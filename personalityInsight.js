var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: "dc9370f1-4bb2-400c-b971-e8002a334efe",
  password: "kgZ3FDvpsSmH",
  version_date: '2016-10-20'
});

var params = {
  // Get the content items from text field
  string text = "",
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

personality_insights.profile(params, function(error, response) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);