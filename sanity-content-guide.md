# Sanity CMS Content Entry Guide

Open the studio at **http://localhost:4321/studio** (Astro dev) or run `cd sanity && sanity dev` for the standalone studio.

---

## 1. Site Settings

**Document type:** Site Settings
Create **one** document only.

| Field | Value |
|---|---|
| Name | `Win Naing Kyaw` |
| Role / Title | `Cloud Engineer · STEM Educator · EdTech Consultant` |
| Tagline | `Cloud-focused software engineer and STEM educator — architecting production-grade infrastructure on AWS & Azure while empowering the next generation through AI-assisted learning.` |
| Email | `winnkyawhc@hotmail.com` |
| Phone | `(+66) 653-899-530` |
| Location | `Chiang Mai, Thailand` |
| GitHub URL | `https://gitlab.com/winnkyaw` |
| LinkedIn URL | `https://linkedin.com/in/win-naing-kyaw` |
| Twitter / X URL | _(leave blank)_ |
| Resume PDF | _(upload PDF when ready)_ |

---

## 2. About

**Document type:** About
Create **one** document only.

| Field | Value |
|---|---|
| Heading | `About Me` |
| Bio | _(paste multi-paragraph text below)_ |
| Profile Image | _(upload your photo)_ |

**Bio text (paste as-is):**

```
Cloud-focused software engineer (B.Eng., Chiang Mai University — CGPA 3.59) with CKA, CKAD, and Terraform Associate certifications. I architect production-grade solutions on AWS and Azure, spanning Kubernetes, IaC, AI/ML pipelines, and large-scale network infrastructure including a 300+ node BGP-enabled distributed network.

Equally passionate about STEM education — three years coaching robotics and programming at international schools, plus AR-integrated STEAM curriculum development across Southeast Asia. Judges' Award winner representing Myanmar at the First Global Robotics Competition, Dubai 2019.
```

---

## 3. Experience

**Document type:** Experience
Create **6** documents in this order (set Sort Order as listed to control display sequence).

### Experience 1
| Field | Value |
|---|---|
| Role | `AI/ML Engineer Intern` |
| Company | `Base Technology Inc. (Expa.ai)` |
| Location | `Chiang Mai, Thailand` |
| Start Date | `2026-01-01` |
| End Date | _(leave blank)_ |
| Current Position | ✅ checked |
| Description | `Architected a 5-agent orchestration system using CrewAI for end-to-end restaurant management automation. Designed a conversational RAG pipeline integrating hybrid BM25 + semantic vector search with Reciprocal Rank Fusion. Deployed containerized inference stacks (Weaviate + Ollama). Built AI-assisted dev toolchains using Claude Code and MCP server integrations.` |
| Technologies | `CrewAI`, `RAG`, `Weaviate`, `Ollama`, `Docker`, `n8n`, `Python` |
| Sort Order | `1` |

### Experience 2
| Field | Value |
|---|---|
| Role | `Capstone — Smart Parking Lot System` |
| Company | `Chiang Mai University` |
| Location | `Chiang Mai, Thailand` |
| Start Date | `2025-10-01` |
| End Date | `2025-10-31` |
| Current Position | ☐ unchecked |
| Description | `Designed an end-to-end smart parking solution with IP cameras, Raspberry Pi, and Nvidia Jetson edge devices. Developed FastAPI backend for concurrent camera stream ingestion. Deployed 4 ML models for real-time occupancy detection and license plate recognition. Implemented MQTT for low-latency edge-to-cloud telemetry.` |
| Technologies | `FastAPI`, `MQTT`, `Nvidia Jetson`, `Python`, `AWS`, `ML/CV` |
| Sort Order | `2` |

### Experience 3
| Field | Value |
|---|---|
| Role | `Cloud Infrastructure Engineer` |
| Company | `Chiang Mai University (Independent Projects)` |
| Location | `Chiang Mai, Thailand` |
| Start Date | `2025-09-01` |
| End Date | `2025-11-30` |
| Current Position | ☐ unchecked |
| Description | `Provisioned production-grade multi-AZ EKS cluster on AWS with Terraform. Replaced SSH bastion architecture with AWS Systems Manager Session Manager with KMS encryption. Built Azure IAM solution with Managed Identities for credential-less Blob Storage access.` |
| Technologies | `AWS`, `Azure`, `Terraform`, `EKS`, `IAM`, `KMS` |
| Sort Order | `3` |

### Experience 4
| Field | Value |
|---|---|
| Role | `Network & Infrastructure Engineer` |
| Company | `Self-Directed (Independent Project)` |
| Location | `Remote` |
| Start Date | `2023-01-01` |
| End Date | _(leave blank)_ |
| Current Position | ✅ checked |
| Description | `Designed and operated a BGP-enabled distributed infrastructure spanning 300+ VPS nodes across multiple cloud providers. Acquired ASN and /24 IPv4 CIDR block with dynamic IP rotation via selective BGP route announcements. Architected a 3-node HA Kubernetes control plane on Oracle Cloud ARM with Cilium CNI.` |
| Technologies | `BGP`, `Kubernetes`, `Cilium`, `Oracle Cloud`, `n8n`, `Shadowsocks` |
| Sort Order | `4` |

### Experience 5
| Field | Value |
|---|---|
| Role | `Outsourced STEM Activity Coach` |
| Company | `Lanna International School / Sasin International School` |
| Location | `Chiang Mai, Thailand` |
| Start Date | `2022-01-01` |
| End Date | `2025-01-31` |
| Current Position | ☐ unchecked |
| Description | `Designed and delivered extracurricular STEM modules for K-12 international school students. Taught robotics, programming, and computational thinking in multilingual settings. Collaborated with coordinators to align with IB and Cambridge curriculum frameworks.` |
| Technologies | `Robotics`, `Python`, `Scratch`, `Curriculum Design`, `IB/Cambridge` |
| Sort Order | `5` |

### Experience 6
| Field | Value |
|---|---|
| Role | `Junior Maker — STEAM Education` |
| Company | `360ed` |
| Location | `Yangon, Myanmar` |
| Start Date | `2017-12-01` |
| End Date | `2018-03-31` |
| Current Position | ☐ unchecked |
| Description | `Developed STEAM curriculum integrating augmented reality (AR) content for children aged 8-14. Coached students in maker projects combining electronics, programming, and design thinking. Contributed to AR-based learning products deployed in schools across Myanmar.` |
| Technologies | `AR`, `Electronics`, `Design Thinking`, `STEAM` |
| Sort Order | `6` |

---

## 4. Projects

**Document type:** Project
Create **4** documents.

### Project 1
| Field | Value |
|---|---|
| Title | `BGP-Enabled Distributed Infrastructure` |
| Description | `Designed and operated a 300+ VPS node distributed network across multiple cloud providers with BGP route management, dynamic IP rotation, and automated fleet lifecycle management via n8n workflows.` |
| Technologies | `BGP`, `Kubernetes`, `Cilium`, `Oracle Cloud`, `n8n` |
| Live URL | _(leave blank)_ |
| GitHub URL | _(leave blank or add when public)_ |
| Featured | ✅ checked |
| Sort Order | `1` |

### Project 2
| Field | Value |
|---|---|
| Title | `Smart Parking Lot System` |
| Description | `End-to-end IoT parking solution with IP cameras, Nvidia Jetson edge ML inference for occupancy detection and license plate recognition, MQTT telemetry, and AWS-hosted monitoring portal.` |
| Technologies | `FastAPI`, `MQTT`, `Nvidia Jetson`, `ML/CV`, `AWS`, `Raspberry Pi` |
| Live URL | _(leave blank)_ |
| GitHub URL | _(leave blank or add when public)_ |
| Featured | ✅ checked |
| Sort Order | `2` |

### Project 3
| Field | Value |
|---|---|
| Title | `Production EKS Cluster with Terraform` |
| Description | `Multi-AZ Kubernetes cluster on AWS provisioned via Terraform with private/public subnet architecture, managed node groups, IAM roles, and dual-mode RBAC via aws-auth ConfigMap and EKS Auth API.` |
| Technologies | `AWS EKS`, `Terraform`, `IAM`, `Kubernetes`, `VPC` |
| Live URL | _(leave blank)_ |
| GitHub URL | _(leave blank or add when public)_ |
| Featured | ✅ checked |
| Sort Order | `3` |

### Project 4
| Field | Value |
|---|---|
| Title | `CrewAI Multi-Agent Orchestration` |
| Description | `A 5-agent orchestration system automating restaurant management workflows including order processing, inventory tracking, and customer service using CrewAI framework with RAG retrieval pipeline.` |
| Technologies | `CrewAI`, `RAG`, `Weaviate`, `Ollama`, `Python`, `Docker` |
| Live URL | _(leave blank)_ |
| GitHub URL | _(leave blank or add when public)_ |
| Featured | ✅ checked |
| Sort Order | `4` |

---

## 5. Skills

**Document type:** Skill
Create **18** documents. The category dropdown now has: `Cloud Platforms`, `Containers & Orchestration`, `Infrastructure as Code`, `Languages`, `Networking`, `AI & ML`, `Other`.

| Skill Name | Category | Proficiency |
|---|---|---|
| AWS (EKS, EC2, S3, IAM, VPC) | Cloud Platforms | 90 |
| Azure (Entra ID, RBAC, VMs) | Cloud Platforms | 80 |
| Oracle Cloud | Cloud Platforms | 75 |
| Kubernetes (CKA/CKAD) | Containers & Orchestration | 92 |
| Docker | Containers & Orchestration | 90 |
| Helm / ArgoCD | Containers & Orchestration | 85 |
| Terraform (Certified) | Infrastructure as Code | 90 |
| GitLab CI / GitHub Actions | Infrastructure as Code | 85 |
| Python | Languages | 90 |
| JavaScript / Node.js | Languages | 82 |
| Bash | Languages | 88 |
| Terraform HCL | Languages | 90 |
| BGP / FRR | Networking | 85 |
| VPC / Subnet Design | Networking | 88 |
| MQTT | Networking | 80 |
| CrewAI / RAG Pipelines | AI & ML | 85 |
| Weaviate / Vector Search | AI & ML | 82 |
| LLM Integration | AI & ML | 85 |

---

## 6. Blog Posts

**Document type:** Blog Post
Create **2** starter posts (or skip until you write real content).

### Blog Post 1
| Field | Value |
|---|---|
| Title | `Building a BGP-Enabled Network Across 300+ Nodes` |
| Slug | Click **Generate** (auto-fills from title) |
| Excerpt | `How I acquired an ASN, a /24 IPv4 block, and designed a distributed infrastructure with dynamic IP rotation using BGP route announcements.` |
| Published At | `2025-01-15T00:00:00Z` |
| Tags | `BGP`, `Networking`, `Infrastructure` |
| Body | _(write full article content in the block editor)_ |

### Blog Post 2
| Field | Value |
|---|---|
| Title | `From Classroom to Cloud: My Journey as a STEM Educator` |
| Slug | Click **Generate** (auto-fills from title) |
| Excerpt | `Reflections on three years of teaching robotics and programming at international schools, and how AI is reshaping education.` |
| Published At | `2025-03-01T00:00:00Z` |
| Tags | `EdTech`, `STEM`, `AI in Education` |
| Body | _(write full article content in the block editor)_ |

---

## Notes

- **Publish each document** after saving — Sanity drafts are not visible to the Astro frontend.
- The site automatically falls back to the hardcoded data in `src/data/fallback.ts` if Sanity returns nothing.
- The embedded Sanity Studio is available at `/studio` when running `npm run dev`.
- To run the standalone studio separately: `cd sanity && npm run dev`
