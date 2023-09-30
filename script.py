import csv, json

print(csv)

csvFile = open("worldcities.csv", "r", encoding="UTF-8")
csvData = csvFile.readlines()

cities = dict()

for i in range(len(csvData)):
    line = csvData[i]
    # print(i, line)
    [
        city,
        asciCity,
        lng,
        lat,
        country,
        countryCode_1,
        countryCode_2,
        adminName,
        capital,
        population,
        id,
    ] = line.split("~")
    # print(country, asciCity, "\n")

    if not cities.get(country):
        cities[country.strip()] = []
        cities[country].append(asciCity.strip())
    else:
        cities[country].append(asciCity.strip())

with open("cities_of_the_world.json", "+w") as outFile:
    outFile.write(json.dumps(cities, indent=4))
