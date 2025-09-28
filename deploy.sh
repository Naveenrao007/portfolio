#!/bin/bash

echo "🚀 Starting Portfolio Deployment..."

# Update system
echo "📦 Updating system..."
sudo dnf update -y

# Install Node.js and Nginx
echo "🔧 Installing Node.js and Nginx..."
sudo dnf install -y nodejs npm nginx

# Check versions
echo "✅ Checking versions..."
node --version
npm --version
nginx --version

# Clone repository
echo "📥 Cloning repository..."
git clone https://github.com/Naveenrao007/portfolio.git
cd portfolio

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the app
echo "🏗️ Building the app..."
npm run build

# Copy to web directory
echo "📁 Copying files to web directory..."
sudo cp -r build/* /usr/share/nginx/html/

# Start Nginx
echo "🌐 Starting Nginx..."
sudo systemctl enable nginx
sudo systemctl start nginx

# Check status
echo "✅ Checking Nginx status..."
sudo systemctl status nginx

echo "🎉 Deployment complete!"
echo "🌐 Your portfolio is now live at: http://your-server-ip"
