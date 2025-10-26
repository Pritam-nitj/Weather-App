-- CreateTable
CREATE TABLE "weather_searches" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "feelsLike" DOUBLE PRECISION NOT NULL,
    "humidity" INTEGER NOT NULL,
    "pressure" INTEGER NOT NULL,
    "windSpeed" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "weather_searches_pkey" PRIMARY KEY ("id")
);
