for (let property in statistics) { /* checks if the property name starts with an r or an odd number */
    if (property[0] === 'r' || statistics[property] %2 !== 0) {
      console.log(statistics[property]); 
    }
}
