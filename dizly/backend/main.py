from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse, JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import io
import os
from rembg import remove
import uvicorn

app = FastAPI()

# ✅ Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Abhi * rakho, baad me apna domain dalna
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- API ROUTES ---------------- #

@app.get("/api")
def root():
    return {"status": "Backend is running 🚀"}

# ✅ New API route
@app.post("/api/remove-bg")
async def api_remove_bg(file: UploadFile = File(...)):
    try:
        input_bytes = await file.read()
        output_bytes = remove(input_bytes)
        return StreamingResponse(io.BytesIO(output_bytes), media_type="image/png")
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# ✅ Old route (for backward compatibility)
@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    try:
        input_bytes = await file.read()
        output_bytes = remove(input_bytes)
        return StreamingResponse(io.BytesIO(output_bytes), media_type="image/png")
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# ---------------- FRONTEND (React) ---------------- #

# React build folder ka path
frontend_path = os.path.join(os.path.dirname(__file__), "../build")

# React ke static files serve karne ke liye
app.mount(
    "/static",
    StaticFiles(directory=os.path.join(frontend_path, "static")),
    name="static"
)

# React ke index.html ko serve karne ke liye catch-all route
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    index_file = os.path.join(frontend_path, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return JSONResponse(content={"error": "Frontend build not found"}, status_code=404)

# ---------------- RUN SERVER ---------------- #

if __name__ == "__main__":
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
