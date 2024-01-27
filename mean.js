class DescriptiveStatistic {
    // Measures of Central Tendency
  
    // Mean
    static mean(data) {
      const sum = data.reduce((acc, val) => acc + val, 0);
      return sum / data.length;
    }
  
    // Median
    static median(data) {
      const sortData = data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortData.length / 2);
      return (sortData.length % 2 === 0) ? 
        (sortData[mid - 1] + sortData[mid]) / 2 :
        sortData[mid];
    }
  
    // Mode
    static mode(data) {
      const frequencyMap = data.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
  
      const modes = [];
      let maxFrequency = 0;
  
      for (const key in frequencyMap) {
        if (frequencyMap[key] > maxFrequency) {
          modes.length = 0;
          modes.push(Number(key));
          maxFrequency = frequencyMap[key];
        } else if (frequencyMap[key] === maxFrequency) {
          modes.push(Number(key));
        }
      }
  
      return modes;
    }
  
    // Measures of Dispersion
  
    // Range
    static range(data) {
      return Math.max(...data) - Math.min(...data);
    }
  
    // Variance
    static variance(data) {
      const mean = DescriptiveStatistic.mean(data);
      const squareDiff = data.map(val => (val - mean) ** 2);
      return DescriptiveStatistic.mean(squareDiff);
    }
  
    // Standard Deviation
    static standardDeviation(data) {
      return Math.sqrt(DescriptiveStatistic.variance(data));
    }
  
    // Interquartile Range (IQR)
    static interquartileRange(data) {
      const sortData = data.slice().sort((a, b) => a - b);
      const q1 = DescriptiveStatistic.percentile(sortData, 25);
      const q3 = DescriptiveStatistic.percentile(sortData, 75);
      return q3 - q1;
    }
  
   
    }
  
  
  // Example usage
  const data = [5, 10, 15, 20, 25];
  console.log("Mean:", DescriptiveStatistic.mean(data));
  console.log("Median:", DescriptiveStatistic.median(data));
  console.log("Mode:", DescriptiveStatistic.mode(data));
  console.log("Range:", DescriptiveStatistic.range(data));
  console.log("Variance:", DescriptiveStatistic.variance(data));
  console.log("Standard Deviation:", DescriptiveStatistic.standardDeviation(data));
  console.log("Interquartile Range:", DescriptiveStatistic.interquartileRange(data));
 