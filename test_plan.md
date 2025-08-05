# 📘 Performance Testing Plan – Perfo_NextTEch

## 🎯 Objective

To evaluate the performance, scalability, and stability of Nextech’s API services under varying load conditions using tools such as k6 and Postman. The goal is to identify bottlenecks, understand system limits, and recommend optimizations.

---

## 🧰 Tools & Tech Stack

| Tool      | Purpose                       |
|-----------|-------------------------------|
| Postman   | Functional API validation     |
| k6        | Load testing (CLI-based)      |
| JMeter    | (Optional) Scenario simulation|
| HTML/CSV  | Report visualization/output   |

---

## 🔍 Scope of Testing

### ✅ APIs Covered
- `Account/Login`
- `BasicPatientSearch`
- `List Product`
- `List Providers`
- `List Practice`
- `List Services`
- `Book Appointment`
- `Get Patient Context`

### ❌ Out of Scope
- Frontend UI performance
- Database-level profiling
- Backend code-level changes

---

## 🚦 Entry & Exit Criteria

| Entry Criteria                                  | Exit Criteria                               |
|------------------------------------------------|---------------------------------------------|
| All API endpoints are reachable & functional   | Load tests are executed with metrics logged |
| Test data is available (sample patients, etc.) | Reports generated and findings documented   |

---

## 🔄 Test Scenarios

| Scenario                | Users (VUs) | Duration | Purpose                           |
|------------------------|-------------|----------|-----------------------------------|
| Smoke Test             | 1           | 1 min    | API health check                  |
| Load Test – Medium     | 50          | 5 mins   | Steady-state behavior             |
| Load Test – High       | 100         | 15 mins  | Resource scaling and latency test |
| Stress Test            | 500         | 10 mins  | Max capacity and breaking point   |
| Soak Test              | 50          | 30–60 min| Long-term stability under load    |

---

## 📊 Metrics to Collect

- Response time (avg, min, max, p95)
- Throughput (requests/second)
- Success vs error rate (%)
- Latency trends during ramp-up
- System behavior under stress
- Failures (timeouts, 5xx errors)

---

## 🗂 Directory Structure

```plaintext
Perfo_NextTEch/
├── k6/                        # k6 test scripts and result CSVs
├── k6/zipped_results/        # Raw zip outputs
├── postman/                  # Postman collection
├── results/                  # HTML or CSV test reports
├── report/                   # Final report PDF or markdown
├── README.md                 # Project overview
└── test_plan.md              # This test plan
