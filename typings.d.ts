interface CurrentWeather{
    temperature: number;
    time: string;
    weathercode:number;
    winddirection:number;
    windspeed:number;
}

interface Daily{
    apparent_temperature_max: [number];
    apparent_temperature_min: [number];
    precipitation_sum: [number];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    weathercode: [number];
}

interface DailyUnits{
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_sum: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    weathercode: string;
}

interface Hourly{
    apparent_temperature: [number];
    dewpoint_2m: [number];
    is_day: [number];
    precipitation_probability: [number];
    rain: [number];
    relativehumidity_2m: [number];
    showers: [number];
    snow_depth: [number];
    snowfall: [number];
    temperature_2m: [number];
    time: [string];
    uv_index: [number];
    uv_index_clear_sky: [number];
    windgusts_10m: [number];
}

interface HourlyUnits{
    apparent_temperature: string;
    dewpoint_2m: string;
    is_day: string;
    precipitation_probability: string;
    rain: string;
    relativehumidity_2m: string;
    showers: string;
    snow_depth: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    uv_index_clear_sky: string;
    windgusts_10m: string;
}

interface Root{
    current_weather: CurrentWeather;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}