# Source: https://www.thorsten-hans.com/how-to-build-smaller-and-secure-docker-images-for-net5/

FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine3.13 AS publish
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore --runtime alpine-x64

# Copy everything else and publish
COPY . ./
RUN dotnet publish -c Release -o /app/publish \
    --runtime alpine-x64 \
    --self-contained true \
    /p:PublishTrimmed=true \
    /p:PublishSingleFile=true

# upgrade musl to remove potential vulnerability
RUN apk upgrade musl

# Build runtime image
FROM mcr.microsoft.com/dotnet/runtime-deps:6.0-alpine3.13 AS final

RUN adduser --disabled-password \
  --home /app \
  --gecos '' dotnetuser && chown -R dotnetuser /app


USER dotnetuser
WORKDIR /app
COPY --from=publish /app/publish .

ENV DOTNET_EnableDiagnostics=0
EXPOSE 80

ENTRYPOINT ["./ml-api"]