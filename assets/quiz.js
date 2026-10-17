/* Shared quiz widget for EGuitar lessons.
   Usage:
   <div class="quiz-question" data-answer="2">   <!-- 1-based index of correct option -->
     <p>Question text</p>
     <ul class="quiz-options">
       <li><label><input type="radio"> <span>Option 1</span></label></li>
       <li><label><input type="radio"> <span>Option 2 (correct)</span></label></li>
     </ul>
     <div class="quiz-feedback" data-for="correct">✓ Explanation</div>
     <div class="quiz-feedback" data-for="wrong">✗ Explanation</div>
   </div>
*/
(function () {
  function initQuizzes() {
    var questions = document.querySelectorAll('.quiz-question');
    questions.forEach(function (q, qi) {
      var answer = q.getAttribute('data-answer');
      var groupName = 'quiz' + qi + '-' + Math.random().toString(36).slice(2, 7);
      var radios = q.querySelectorAll('input[type="radio"]');
      var fbCorrect = q.querySelector('.quiz-feedback[data-for="correct"]');
      var fbWrong = q.querySelector('.quiz-feedback[data-for="wrong"]');

      radios.forEach(function (r, ri) {
        r.name = groupName;
        r.value = String(ri + 1);
        r.addEventListener('change', function () {
          fbCorrect.classList.remove('correct');
          fbWrong.classList.remove('wrong');
          if (r.value === answer) {
            fbCorrect.classList.add('correct');
          } else {
            fbWrong.classList.add('wrong');
          }
        });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initQuizzes);
})();