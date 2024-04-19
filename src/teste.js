const close_approach_data = [
    {
        "close_approach_date": "2024-04-18",
        "close_approach_date_full": "2024-Apr-18 05:29",
        "epoch_date_close_approach": 1713418140000,
        "relative_velocity": {
            "kilometers_per_second": "28.7097234193",
            "kilometers_per_hour": "103355.0043094116",
            "miles_per_hour": "64220.7803165897"
        },
        "miss_distance": {
            "astronomical": "0.3252091675",
            "lunar": "126.5063661575",
            "kilometers": "48650598.762473225",
            "miles": "30230080.283551505"
        },
        "orbiting_body": "Earth"
    }
]

console.log(close_approach_data[0].relative_velocity.kilometers_per_hour)