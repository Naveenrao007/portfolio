#!/bin/bash

echo "🚀 Starting OCI Portfolio Deployment..."

# Update system
echo "📦 Updating system..."
sudo dnf update -y

# Install everything needed
echo "🔧 Installing dependencies..."
sudo dnf install -y git nodejs npm nginx

# Clone your portfolio
echo "📥 Cloning portfolio..."
git clone https://github.com/Naveenrao007/portfolio.git
cd portfolio

# Install dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Build the app
echo "🏗️ Building React app..."
npm run build

# Copy to web directory
echo "📁 Copying files to web directory..."
sudo cp -r build/* /usr/share/nginx/html/

# Create Nginx configuration
echo "⚙️ Configuring Nginx..."
sudo tee /etc/nginx/nginx.conf > /dev/null << 'EOF'
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }

        # Handle static assets
        location /static/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;

        # Gzip compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    }
}
EOF

# Start Nginx
echo "🌐 Starting Nginx..."
sudo systemctl enable nginx
sudo systemctl start nginx

# Check status
echo "✅ Checking Nginx status..."
sudo systemctl status nginx

echo "🎉 Deployment complete!"
echo "🌐 Your portfolio is now live at: http://140.238.242.45"
echo "📋 Make sure port 80 is open in OCI Security Lists!"
