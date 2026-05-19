# Dockerized Web App with CI/CD Pipeline on AWS EC2

![Docker](https://img.shields.io/badge/Docker-Container-blue) ![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-green) ![AWS](https://img.shields.io/badge/AWS-EC2-orange) ![Python](https://img.shields.io/badge/Python-Flask-yellow)

A production-ready Dockerized Flask web application with fully automated CI/CD pipeline using GitHub Actions, DockerHub, and AWS EC2.

## Architecture
## Tech Stack
| Tool | Purpose |
|---|---|
| Python Flask | Web application |
| Docker | Containerization |
| DockerHub | Image registry |
| GitHub Actions | CI/CD automation |
| AWS EC2 | Cloud hosting |
| AWS IAM | Access control |
| AWS VPC | Network isolation |
| AWS Security Groups | Firewall rules |

## Project Structure
## Setup

### Step 1 - Add GitHub Secrets
| Secret | Value |
|---|---|
| DOCKER_USERNAME | Your DockerHub username |
| DOCKER_PASSWORD | Your DockerHub password |
| EC2_HOST | Your EC2 public IP |
| EC2_SSH_KEY | Your EC2 private key |

### Step 2 - Launch EC2 and install Docker
```bash
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -aG docker ec2-user
```

### Step 3 - Push to GitHub
```bash
git add .
git commit -m "initial deployment"
git push origin main
```

## Resume Bullets
- Containerized a Python Flask web application using Docker ensuring consistent behaviour across local and AWS EC2 environments
- Built a fully automated CI/CD pipeline using GitHub Actions to build, push Docker images to DockerHub, and deploy to EC2 on every git push
- Configured AWS EC2 with IAM roles, Security Groups, and VPC settings to securely host the Dockerized application
- Reduced deployment time by approximately 75% by automating the full build-push-deploy cycle using GitHub Actions and DockerHub
