angular.module('lingoApp', [])

angular.module('lingoApp')
    .controller('lingoController', ['$scope', '$http',  function($scope, $http) {
    
    $scope.greeting = "Translate this!"
    
    $scope.word = ''
    $scope.getTranslation = function() {
        $http.post('/translate', $scope.translate)
        .then(function(returnData) {
            $scope.word = returnData.data
        })
    }
    
        
var randomWords = ['protection', 'hipbone', 'elephants', 'grind', 'guilt', 'headphones', 'salty', 'opposition', 'wealthy', 'taste', 'tank', 'hooker', 'mystical', 'missionary', 'acidic', 'advantage', 'conclusion', 'folding', 'gorgeous', 'decadent', 'grappler', 'carcass', 'glow']    


    $scope.randomWord = ""
    $scope.startQuiz = function() {
        $scope.randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
        console.log($scope.randomWord)
        if ($scope.testLanguage === 'es') {
            $http.post('/startquiz', {
                testLanguage: 'es', 
                nativeLanguage: 'en',
                randomWord: $scope.randomWord
            })
            .then(function(returnData) {
            $scope.translatedWord = returnData.data
        })
            
        } else{
            $http.post('/startquiz', {
                testLanguage: 'en', 
                nativeLanguage: 'es',
                randomWord: $scope.randomWord
            })
            .then(function(returnData) {
            $scope.translatedWord = returnData.data
        })
        }
    }
     $scope.showTranslation = false;
        $scope.checkIt = function(){ 
    $scope.showTranslation = true;
       }
    
    $scope.wrongAnswers = 0
    $scope.checkIt = function() {
        if($scope.yourAnswer !== $scope.translatedWord) {
            $scope.wrongAnswers++
            $scope.wrong = true;
            $scope.showTranslation = true;
            if ($scope.wrongAnswers < 3) {
                $scope.again = true;
            } else {
                $scope.gameOver = true;
                $scope.wrongAnswers = 0
            }
        } else {
            $scope.correct = true;
            $scope.again = true;
        }
    }
    
    $scope.nextQuestion = function() {
        $scope.wrong = false;
        $scope.correct = false;
        $scope.again = false;
        $scope.showTranslation = false;
        $scope.yourAnswer = "";
        $scope.startQuiz()
    }
        
    
        
}])


angular.module('countriesApp', [])

