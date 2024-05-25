# Login Monitor

### **1. Project Setup**

I begin by setting up your project directory structure. This structure likely included directories for each of your Express servers (**`server1`**, **`server2`**, **`server3`**), a directory for Prometheus configuration (**`prometheus`**), and a **`docker-compose.yml`** file to define your Docker services.

### **2. Writing Dockerfiles**

I have created Dockerfiles for each  Express servers (**`server1`**, **`server2`**, **`server3`**). These Dockerfiles define the environment and dependencies required to run each server. They likely included instructions to install Node.js, copy your application code into the container, install dependencies using **`npm install`**, and specify the command to start the server.

### **3. Writing Prometheus Configuration**

In the **`prometheus`** directory, I was needed a  **`prometheus.yml`** file to configure Prometheus. This file likely contained configuration settings such as scrape targets (the endpoints of Express servers), scrape intervals, and any additional Prometheus settings.

### **4. Writing Docker Compose File**

Now I needed a  **`docker-compose.yml`** file to define my Docker services and how they should be orchestrated. This file specified the configuration for each service, including which Docker image to use, any environment variables, ports to expose, and any volumes to mount.

### **5. Building Docker Images**

I have used the **`docker-compose build`** command to build Docker images for your services based on the Dockerfiles and configuration defined in your project. This step created Docker images that contained your Express server code and dependencies, ready to be deployed as containers.

### **6. Running Docker Containers**

After that I used the **`docker-compose up -d`** command to start Docker containers for my services in detached mode. This command launched my Express servers and Prometheus as separate containers based on the images built in the previous step.

### **Explanation**

- **Project Structure**: Organizing my project into directories helps keep your codebase modular and maintainable. Each directory contains related files and configurations for a specific part of your application.
- **Dockerfiles**: Dockerfiles are used to build Docker images, which are portable and self-contained environments for running applications. They specify how to create the environment needed to run my Express servers within a Docker container.
- **Prometheus Configuration**: Prometheus is a monitoring and alerting toolkit, and its configuration file defines what data to collect and how often to collect it.  **`prometheus.yml`** file specifies the endpoints of  Express servers to scrape metrics from them.
- **Docker Compose**: Docker Compose is a tool for defining and running multi-container Docker applications. Your **`docker-compose.yml`** file defines  application's services, networks, and volumes, making it easy to manage and orchestrate  containers.
- **Building and Running**: Building Docker images creates reusable and shareable artifacts containing  application code and dependencies. Running Docker containers based on these images launches my application in isolated environments, ready for testing or production use.

By following these steps, I’ve effectively containerized  Express servers and set up Prometheus for monitoring, creatied a scalable and maintainable infrastructure for my application.