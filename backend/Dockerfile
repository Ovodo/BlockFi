# Use an official Python runtime as the base image
FROM python:3.10-alpine

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY src/ .

# Run migrations (if applicable)
RUN python manage.py migrate

# Expose the port on which the app will run
EXPOSE 8001

# Command to run the app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
