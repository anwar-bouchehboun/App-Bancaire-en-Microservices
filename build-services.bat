@echo off
echo Building Config Service...
cd config-service
call ./mvnw clean package -DskipTests
cd ..

echo Building Discovery Service...
cd discovery-service
call ./mvnw clean package -DskipTests
cd ..

echo Building Gateway Service...
cd gateway-service
call ./mvnw clean package -DskipTests
cd ..

echo Building Customer Service...
cd customer-service
call ./mvnw clean package -DskipTests
cd ..

echo Building Account Service...
cd account-service
call ./mvnw clean package -DskipTests
cd ..

echo Building Frontend...
cd gestion-bancaire
call npm install
call npm run build
cd ..

echo All services built successfully!
echo You can now run: docker-compose up --build 