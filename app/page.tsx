"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { HistoryList } from "@/components/HistoryList";
import { useToast } from "@/hooks/use-toast";
import { CloudSun } from "lucide-react";

interface WeatherData {
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

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      toast({
        title: "Weather fetched successfully",
        description: `Showing weather for ${data.city}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch weather data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CloudSun className="w-12 h-12 text-yellow-500" />
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
              Weather App
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Get real-time weather information for any city
          </p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {weather && (
          <WeatherCard
            city={weather.city}
            temperature={weather.temperature}
            feelsLike={weather.feelsLike}
            humidity={weather.humidity}
            pressure={weather.pressure}
            windSpeed={weather.windSpeed}
            description={weather.description}
            icon={weather.icon}
            country={weather.country}
          />
        )}

        <HistoryList />
      </div>
    </div>
  );
}
