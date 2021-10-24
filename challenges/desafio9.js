db.trips.aggregate([
  {
    $match: {
      birthYear: { $ne: "" },
    },
  },
  {
    $addFields: {
      anoNascimento: { $toInt: "$birthYear" },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: "$anoNascimento" },
      menorAnoNascimento: { $min: "$anoNascimento" },
    },
  },
  {
    $project: {
      maiorAnoNascimento: 1,
      menorAnoNascimento: 1,
      _id: 0,
    },
  },
]);
