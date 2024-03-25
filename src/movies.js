// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  // Bonus: Removing duplicates
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const totalScore = moviesArray.reduce((acc, curr) => {
    if (curr.score) {
      return acc + curr.score;
    } else {
      return acc;
    }
  }, 0);
  return parseFloat((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title).sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    let duration = movie.duration.split(' ').reduce((acc, time) => {
      if (time.includes('h')) {
        return acc + parseInt(time) * 60;
      } else if (time.includes('min')) {
        return acc + parseInt(time);
      }
      return acc;
    }, 0);
    return { ...movie, duration };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const scoresByYear = moviesArray.reduce((acc, curr) => {
    if (acc[curr.year]) {
      acc[curr.year].push(curr.score);
    } else {
      acc[curr.year] = [curr.score];
    }
    return acc;
  }, {});
  let bestYear = '';
  let bestAverage = 0;
  for (const year in scoresByYear) {
    const averageScore = scoresByYear[year].reduce((acc, curr) => acc + curr, 0) / scoresByYear[year].length;
    if (averageScore > bestAverage || (averageScore === bestAverage && year < bestYear)) {
      bestYear = year;
      bestAverage = averageScore;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

