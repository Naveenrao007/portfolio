@echo off
echo 🚀 Starting Portfolio Deployment...

echo 📦 Updating system...
sudo dnf update -y

echo 🔧 Installing Node.js and Nginx...
sudo dnf install -y nodejs npm nginx

echo ✅ Checking versions...
node --version
npm --version
nginx --version

echo 📥 Cloning repository...
git clone https://github.com/Naveenrao007/portfolio.git
cd portfolio

echo 📦 Installing dependencies...
npm install

echo 🏗️ Building the app...
npm run build

echo 📁 Copying files to web directory...
sudo cp -r build/* /usr/share/nginx/html/

echo 🌐 Starting Nginx...
sudo systemctl enable nginx
sudo systemctl start nginx

echo ✅ Checking Nginx status...
sudo systemctl status nginx

echo 🎉 Deployment complete!
echo 🌐 Your portfolio is now live at: http://140.238.242.45
