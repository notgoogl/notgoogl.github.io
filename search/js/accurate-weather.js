    const temps = [
        "64°F", "72°F", "58°F", "81°F", "69°F",
        "77°F", "53°F", "90°F", "61°F", "66°F",
        "74°F", "84°F", "59°F", "70°F", "68°F",
        "73°F", "57°F", "79°F", "65°F", "76°F",
        "82°F", "60°F", "55°F", "88°F", "63°F",
        "71°F", "67°F", "80°F", "62°F", "85°F"
    ];
    const conditions = [
        "Partly cloudy with a low hum in the distance.",
        "Fog with strong opinions.",
        "Comfortably uncertain skies.",
        "Clear, unless you're seeing double.",
        "Occasional static falling from the sky.",
        "Mildly suspicious overcast.",
        "Sunny, due to coffee filter shortage.",
        "Clouds chasing each other in circles.",
        "Strange glowing lights to the north. And south... And east. All clear in the west.",
        "Sky mostly normal, except for brief flashes of orange.",
        "Heavy sighs from the atmosphere.",
        "Gently rotating mist.",
        "Shimmering sunlight with faint applause.",
        "Clouds in polite formation.",
        "A drizzle of forgotten memories.",
        "Partly sunny, partly existential dread.",
        "Clear skies with intermittent falling birds.",
        "Occasional sparks of inexplicable happiness.",
        "Slightly wobbly horizon.",
        "4PM started early today.",
        "Sporadic, gentle lightning.",
        "Shy purple haze.",
        "Haphazard sunlight.",
        "Air mildly sentient.",
        "Air smells faintly of peppermint.",
        "Faint, unidentifiable voices."
    ];
    const winds = [
        "Cooperative", 
        "Whispering", 
        "Brisk but contemplative", 
        "Slightly judgmental", 
        "Chaotic",
        "Polite gusts",
        "Uncertain direction",
        "Lightly conspiratorial",
        "Occasionally stops to think",
        "Persistent, mostly harmless",
        "Sporadic in focus",
        "Tugging at your attention",
        "Restless and impatient",
        "Mildly apologetic",
        "Humming under the trees",
        "Slightly mischievous",
        "Softly applauding",
        "Indecisive",
        "Shuffling eastward",
        "Conspicuously absent",
        "Sweeping in existential doubt",
        "Hovering near the ground"
    ];
    const humidity = [
        "42% (mildly judgmental)", 
        "58% (questioning your choices)", 
        "33% (watching you)", 
        "61% (approving)", 
        "50% (indecisive)",
        "47% (uncertain if it exists)",
        "69% (enthusiastically moist)",
        "55% (pretending to care)",
        "60% (half asleep)",
        "52% (slightly accusatory)",
        "48% (optimistically wet)",
        "64% (quietly plotting)",
        "53% (humming)",
        "59% (incongruously cheerful)",
        "46% (restless)",
        "65% (prone to sudden judgment)",
        "51% (softly blinking)",
        "57% (timid)",
        "63% (overly polite)",
        "66% (suspicious of clouds)",
        "49% (staring at your window)",
        "56% (nervous)",
        "54% (waiting for something)",
        "67% (ready to gossip)",
        "68% (mildly alarmed)",
        "45% (pretending it's normal)"
    ];
    const chanceOfRain = [
        "Higher than your hopes", 
        "Almost none, maybe later", 
        "0% unless you blink", 
        "Low, unless reality disagrees", 
        "Unpredictable but fashionable",
        "Approximately as likely as you'd think",
        "Moderate, with occasional dancing",
        "Uncertain, like your memories",
        "50%, plus or minus 50%",
        "Certain in spirit",
        "Extremely likely to inconvenience you",
        "Negligible, except on Wednesdays",
        "Sporadic and judgmental",
        "Mildly inconvenient",
        "Occasional drizzle of questions",
        "Surprisingly unhelpful",
        "Inconsistent but charming",
        "Nearly zero, unless provoked",
        "Fluctuating whimsically",
        "Probably, but don't quote us",
        "Uncomfortably likely",
        "Temporarily suppressed",
        "Slightly evasive",
        "Moderately accusatory",
        "High, according to someone else's calculation",
        "Shadowy chance",
        "Out on bail",
        "Erratically falling",
        "Significantly unlikely",
        "Curiously persistent"
    ];
    const icons = ["☀️", "🌤️", "🌫️", "🌧️", "🌪️", "🌌", "⚡"];


    function randomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    document.getElementById('temp').innerText = "Temperature: " + randomElement(temps) + " — " + randomElement(conditions);
    document.getElementById('wind').innerText = "Wind: " + randomElement(winds);
    document.getElementById('humidity').innerText = "Humidity: " + randomElement(humidity);
    document.getElementById('chance').innerText = "Chance of rain: " + randomElement(chanceOfRain);
    document.getElementById('weather-icon').innerText = randomElement(icons);