🏗️ AWS Three-Tier Application (ECS Fargate)

This project is a hands-on implementation of a three-tier cloud architecture on AWS using modern DevOps practices.
The app is designed to demonstrate how to build, containerize, and deploy a production-grade service using:

A secure VPC with public, private app, and private data subnets

ECS Fargate for compute

Application Load Balancer for routing

DynamoDB or RDS for data

Terraform for IaC

GitHub Actions for CI/CD

This project is both a learning exercise and a portfolio-ready example of real-world cloud engineering.

🎯 Project Goal

Build and deploy a fully functional, containerized web application using AWS three-tier architecture.
The goal is to create infrastructure and deployment pipelines that reflect real enterprise patterns:

Isolated network tiers (web → app → data)

Secure routing with SG-to-SG relationships

Immutable deployments via ECS Fargate

Automated provisioning with Terraform

Automated builds & deploys with GitHub Actions

The result will be an application that can scale, is secure by default, and follows AWS best practices.

🧰 Tech Stack
Application

Node.js (Express) simple backend API
(can be replaced with Python/Go later)

Docker container

Infrastructure (IaC)

Terraform

VPC (public, private-app, private-data)

Subnets, route tables, IGW, NAT

ECS Fargate cluster + services + task definitions

ECR private repository

Application Load Balancer

DynamoDB or RDS (TBD)

AWS Services

ECS Fargate

ECR

ALB (Application Load Balancer)

VPC + subnets

IAM roles / policies

CloudWatch logging

Secrets Manager / SSM Parameter Store
(for environment variables)

CI/CD

GitHub Actions

Build & test the app

Build & push Docker image to ECR

Terraform plan/apply via OIDC

Trigger ECS deployment

🚀 Deployment Plan (ECS Fargate)
1. Build the Local App

Create a simple Express API returning "Hello from ECS!"

Containerize it with Docker

Test locally using Docker Compose

2. Provision AWS Infrastructure (Terraform)

Terraform will create:

VPC with 3 tiers:

Public subnets (ALB, NAT)

Private app subnets (ECS tasks)

Private data subnets (DB/DynamoDB)

Internet Gateway + NAT Gateway

Security groups for:

ALB

ECS tasks

Database access

ECR repository

ECS Cluster + Task Definition + Service

Application Load Balancer (HTTP/HTTPS)

3. Push Docker Image to ECR

GitHub Actions workflow:

Build Docker image

Authenticate to AWS via OIDC

Push image to ECR repository

4. Deploy to ECS Fargate

GitHub Actions:

Run terraform plan on pull request

Run terraform apply on main branch

Update ECS service to use the new image tag

ECS performs a rolling deployment behind the ALB

5. Validate Deployment

Visit ALB public DNS

Confirm the service responds with "Hello from ECS!"

Check logs in CloudWatch

📁 Project Structure (Planned)
.
├─ app/
│  ├─ server.js
│  ├─ package.json
│  └─ Dockerfile
├─ infra/
│  ├─ main.tf
│  ├─ vpc.tf
│  ├─ ecs.tf
│  ├─ alb.tf
│  ├─ ecr.tf
│  ├─ iam.tf
│  ├─ variables.tf
│  └─ outputs.tf
├─ .github/workflows/
│  ├─ ci.yml
│  └─ deploy.yml
└─ README.md# aws-ecs-app
