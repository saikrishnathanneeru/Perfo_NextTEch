# Perfo_NextTEch – API Performance Testing Project

This project demonstrates performance testing of Nextech APIs using k6, Postman, and Python-based validation scripts.

## 🔧 Tools Used
- Postman (for functional validation)
- k6 (load testing up to 500 VUs)
- Newman (optional CLI validation)
- Python + Pytest (optional baseline checks)

## 📁 Project Structure
- `k6/` – Main k6 scripts and results
- `postman/` – Postman collection used for smoke tests
- `report/` – Final PDF report and summary
- `functional-tests/` – Optional pytest API validation layer

## 🚀 How to Run k6 Load Test

```bash
cd k6
k6 run FullLoadTest.js
