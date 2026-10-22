@echo off
rem 依存パッケージの脆弱性監査（OSV / GitHub Advisory データベース）
rem 初回のみ pip-audit の導入が必要:
rem   python -m pip install pip-audit
rem 実行方法: map\scripts\audit_deps.bat
rem 対象: map\requirements.txt（requests / urllib3 / certifi / numpy / shapely / pyproj / trimesh / pygltflib / lxml）
cd /d "%~dp0\.."
python -m pip_audit -r requirements.txt --desc on
if errorlevel 1 (
  echo.
  echo [audit_deps] 脆弱性が検出されたか、pip-audit が未インストールです。
  echo [audit_deps] 未インストールの場合: python -m pip install pip-audit
)