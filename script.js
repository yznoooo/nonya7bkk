document.getElementById('years').textContent = new Date().getFullYear() - 2021;

document.getElementById('openLetter').addEventListener('click', () => {
  document.getElementById('letterPaper').classList.toggle('hidden');
  document.getElementById('openLetter').querySelector('span:last-child').textContent =
    document.getElementById('letterPaper').classList.contains('hidden') ? 'اضغطي لفتح الرسالة' : 'اضغطي لإغلاق الرسالة';
});

const questions = [
  {q:'متى تاريخ ميلادي؟',a:['2009/01/16','2008/01/16','2009/06/10','2010/01/16'],c:0},
  {q:'مين حبيبتي؟',a:['صهيب','نونتي','اياد','عبدالله'],c:1},
  {q:'مين دنيتي؟',a:['نونتي','نوره','نوني','نونه'],c:0},
  {q:'مين يحب اكثر الثاني؟',a:['يزونتي','يزن','يزوني','زوزي'],c:0},
  {q:'وش الانمي اللي تهاوشنا بسببه؟',a:['ناروتو','هجوم العمالقه','ون بيس','ديث نوت'],c:1},
  {q:'وش كان اهم شي عندنا يوم كنا ندخل اتصال؟',a:['نلعب','نتابع افلام','نسمع أصوات بعض','نسولف عن الدراسة'],c:2},
  {q:'مين اللي اعتذر يوم الهوشة على ارمين وايرين؟',a:['نوره','يزن','ميساء','محد'],c:1},
  {q:'وش اكثر شي احبه في نونتي؟',a:['حنيتها','اهتمامها','ضحكتها','كل هذي الاشياء'],c:3},
  {q:'وش اتمنى يصير لنا بالمستقبل؟',a:['ننسى بعض','نبقى مجرد ذكريات','نجتمع بالحلال ونعيش ايام حلوه','ولا شي'],c:2},
  {q:'وش اسم الدلع اللي احب اناديها فيه؟',a:['نونتي','نونو','نوري','نانا'],c:0}
];
let current=0, score=0, answered=false;
const qEl=document.getElementById('question'), answersEl=document.getElementById('answers'),
progress=document.getElementById('quizProgress'), feedback=document.getElementById('feedback'),
next=document.getElementById('nextQuestion');
function renderQuestion(){
  answered=false; const q=questions[current];
  progress.textContent=`السؤال ${current+1} من ${questions.length}`;
  qEl.textContent=q.q; feedback.textContent=''; next.classList.add('hidden'); answersEl.innerHTML='';
  q.a.forEach((answer,i)=>{
    const b=document.createElement('button'); b.className='answer'; b.textContent=answer;
    b.addEventListener('click',()=>{
      if(answered)return; answered=true;
      [...answersEl.children].forEach((el,j)=>{el.disabled=true;if(j===q.c)el.classList.add('correct');});
      if(i===q.c){score++;feedback.textContent='صح عليك يا نونتي ♡';}
      else{b.classList.add('wrong');feedback.textContent='مو هذي الاجابة بس احبك برضو ♡';}
      next.textContent=current===questions.length-1?'شوفي نتيجتك':'السؤال اللي بعده';
      next.classList.remove('hidden');
    });
    answersEl.appendChild(b);
  });
}
next.addEventListener('click',()=>{
  if(current<questions.length-1){current++;renderQuestion();}
  else{progress.textContent='خلصتي الأسئلة';qEl.textContent=`جبتي ${score} من ${questions.length} ♡`;answersEl.innerHTML='';feedback.textContent='كل إجابة منك حلوة لأنك انتي اللي جاوبتي';next.classList.add('hidden');}
});
renderQuestion();

document.getElementById('surpriseButton').addEventListener('click',()=>{
  document.getElementById('surprise').classList.remove('hidden');
  document.getElementById('surpriseButton').classList.add('hidden');
  document.getElementById('surprise').scrollIntoView({behavior:'smooth',block:'center'});
});
