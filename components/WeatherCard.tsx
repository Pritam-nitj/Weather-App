"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Wind, Gauge } from "lucide-react";

interface WeatherCardProps {
  city: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  description: string;
  icon: string;
  country: string;
}

export function WeatherCard({
  city,
  temperature,
  feelsLike,
  humidity,
  pressure,
  windSpeed,
  description,
  icon,
  country,
}: WeatherCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          {city}, {country}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={description}
            className="w-32 h-32"
          />
          <div className="text-6xl font-bold text-gray-800 dark:text-white">
            {Math.round(temperature)}°C
          </div>
          <div className="text-xl text-gray-600 dark:text-gray-300 capitalize mt-2">
            {description}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Feels like {Math.round(feelsLike)}°C
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Humidity</div>
              <div className="text-xl font-semibold">{humidity}%</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <Wind className="w-8 h-8 text-teal-500" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</div>
              <div className="text-xl font-semibold">{windSpeed} m/s</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <Gauge className="w-8 h-8 text-purple-500" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pressure</div>
              <div className="text-xl font-semibold">{pressure} hPa</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <Cloud className="w-8 h-8 text-gray-500" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Condition</div>
              <div className="text-xl font-semibold capitalize">{description}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
