## Eficode timetable

Web application that shows next three itineraries from Pohjoinen Rautatienkatu to Kumpulan kampus. Data is fetched from digitransit GraphQL api.

[Heroku link](https://eficode-timetables.herokuapp.com/)

## Building with docker
1. Clone repository and move to it
```
git clone https://github.com/tulma95/eficode-timetable
cd eficode-timetable
```

2. Build image
```
docker build -t timetable .
```

3. Run image
```
docker run -p 3003:3000 timetable
```

4. Navigate to http://localhost:3003 with your browser