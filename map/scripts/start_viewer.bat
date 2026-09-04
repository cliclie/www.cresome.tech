@echo off
rem 3Dマップビュワーをローカルサーバーで起動する（ESモジュールのためHTTP経由が必須）
cd /d "%~dp0\.."
echo Starting viewer at http://localhost:8000/viewer/index.html
start "" http://localhost:8000/viewer/index.html
python -m http.server 8000
