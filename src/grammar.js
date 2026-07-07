// ============================================================================
//  문법 단원 데이터
// ----------------------------------------------------------------------------
//  각 단원(unit)은 핵심 정리(summary)와 연습 문제(questions)로 구성됩니다.
//  문제 유형:
//    - type: 'choice'  → 객관식 (options 중 answer 인덱스가 정답)
//    - type: 'blank'   → 빈칸 채우기 (answer 배열 중 하나와 일치하면 정답, 대소문자 무시)
//  선생님은 아래 단원 내용을 자유롭게 추가/수정할 수 있습니다.
// ============================================================================

export const units = [
  {
    id: 'be-verb',
    title: 'be동사 (am / is / are)',
    icon: '🟦',
    summary:
      'be동사는 주어에 따라 달라져요.  I → am,  He/She/It(3인칭 단수) → is,  You/We/They(복수) → are.',
    questions: [
      {
        id: 'be1', type: 'choice',
        question: 'She ___ a nurse.',
        options: ['am', 'is', 'are', 'be'],
        answer: 1,
        explanation: '주어 She는 3인칭 단수이므로 is를 씁니다.',
      },
      {
        id: 'be2', type: 'choice',
        question: 'They ___ my friends.',
        options: ['is', 'am', 'are', 'be'],
        answer: 2,
        explanation: '주어 They는 복수이므로 are를 씁니다.',
      },
      {
        id: 'be3', type: 'blank',
        question: 'I ___ a student.  (빈칸에 알맞은 be동사)',
        answer: ['am'],
        explanation: '주어 I 뒤에는 항상 am을 씁니다.',
      },
      {
        id: 'be4', type: 'choice',
        question: '다음 중 be동사의 부정문으로 알맞은 것은?',
        options: ['He not is tall.', 'He is not tall.', 'He no is tall.', 'He isn’t are tall.'],
        answer: 1,
        explanation: 'be동사의 부정문은 be동사 바로 뒤에 not을 붙입니다. (is not = isn’t)',
      },
      {
        id: 'be5', type: 'blank',
        question: 'Tom and I ___ in the same class.  (빈칸에 알맞은 be동사)',
        answer: ['are'],
        explanation: 'Tom and I는 복수(=we)이므로 are를 씁니다.',
      },
    ],
  },
  {
    id: 'be-past',
    title: 'be동사 과거형 (was / were)',
    icon: '⏪',
    summary:
      'be동사의 과거형은 am/is → was,  are → were 로 바뀝니다.  I/He/She/It → was,  You/We/They → were.',
    questions: [
      {
        id: 'bp1', type: 'choice',
        question: 'I ___ tired yesterday.',
        options: ['am', 'was', 'were', 'is'],
        answer: 1,
        explanation: '주어 I의 과거형 be동사는 was입니다.',
      },
      {
        id: 'bp2', type: 'choice',
        question: 'They ___ at home last night.',
        options: ['was', 'were', 'are', 'is'],
        answer: 1,
        explanation: '주어 They(복수)의 과거형 be동사는 were입니다.',
      },
      {
        id: 'bp3', type: 'blank',
        question: 'The movie ___ very exciting.  (과거형, 빈칸에 알맞은 be동사)',
        answer: ['was'],
        explanation: 'The movie는 3인칭 단수이므로 과거형은 was입니다.',
      },
      {
        id: 'bp4', type: 'choice',
        question: '다음 문장의 부정문으로 알맞은 것은?  "She was busy."',
        options: ['She wasn’t busy.', 'She weren’t busy.', 'She not was busy.', 'She was not busy는 틀림'],
        answer: 0,
        explanation: 'was의 부정은 was not = wasn’t 입니다.',
      },
      {
        id: 'bp5', type: 'blank',
        question: 'You ___ late for school.  (과거형, 빈칸에 알맞은 be동사)',
        answer: ['were'],
        explanation: '주어 You 뒤에는 과거형 were를 씁니다.',
      },
    ],
  },
  {
    id: 'general-verb',
    title: '일반동사 현재형 (3인칭 단수 -s)',
    icon: '🏃',
    summary:
      '주어가 3인칭 단수(He/She/It)일 때 일반동사 끝에 -s(또는 -es)를 붙여요.  go → goes,  study → studies,  have → has.',
    questions: [
      {
        id: 'gv1', type: 'choice',
        question: 'He ___ soccer every day.',
        options: ['play', 'plays', 'playes', 'playing'],
        answer: 1,
        explanation: '3인칭 단수 He 뒤에서는 play에 -s를 붙여 plays가 됩니다.',
      },
      {
        id: 'gv2', type: 'choice',
        question: 'My sister ___ English very well.',
        options: ['speak', 'speaks', 'speakes', 'speaking'],
        answer: 1,
        explanation: 'My sister는 3인칭 단수이므로 speaks를 씁니다.',
      },
      {
        id: 'gv3', type: 'blank',
        question: 'She ___ (study) math hard.  (괄호 안 동사를 알맞은 형태로)',
        answer: ['studies'],
        explanation: '「자음+y」로 끝나는 동사는 y를 i로 바꾸고 -es → studies.',
      },
      {
        id: 'gv4', type: 'choice',
        question: '다음 중 부정문이 바른 것은?',
        options: ['He not likes it.', 'He doesn’t likes it.', 'He doesn’t like it.', 'He don’t like it.'],
        answer: 2,
        explanation: '3인칭 단수 부정은 doesn’t + 동사원형 → doesn’t like.',
      },
      {
        id: 'gv5', type: 'blank',
        question: 'Tom ___ (have) two dogs.  (괄호 안 동사를 알맞은 형태로)',
        answer: ['has'],
        explanation: 'have의 3인칭 단수 현재형은 예외적으로 has입니다.',
      },
    ],
  },
  {
    id: 'present-progressive',
    title: '현재진행형 (be + -ing)',
    icon: '🎬',
    summary:
      '지금 하고 있는 일은 「be동사 + 동사-ing」로 표현해요.  make → making,  run → running,  sit → sitting.',
    questions: [
      {
        id: 'pp1', type: 'choice',
        question: 'She is ___ a letter now.',
        options: ['write', 'writes', 'writing', 'wrote'],
        answer: 2,
        explanation: '현재진행형은 be + -ing.  write는 e를 빼고 writing.',
      },
      {
        id: 'pp2', type: 'blank',
        question: 'They are ___ (run) in the park.  (괄호 안 동사를 진행형으로)',
        answer: ['running'],
        explanation: '「단모음+단자음」으로 끝나면 자음을 하나 더 → running.',
      },
      {
        id: 'pp3', type: 'choice',
        question: '다음 중 현재진행형 문장이 바른 것은?',
        options: ['I am study now.', 'I studying now.', 'I am studying now.', 'I is studying now.'],
        answer: 2,
        explanation: 'be동사(am) + 동사-ing 형태가 필요합니다 → I am studying.',
      },
      {
        id: 'pp4', type: 'blank',
        question: 'He is ___ (sit) on the chair.  (괄호 안 동사를 진행형으로)',
        answer: ['sitting'],
        explanation: 'sit은 t를 하나 더 붙여 sitting.',
      },
      {
        id: 'pp5', type: 'choice',
        question: 'The baby ___ sleeping.',
        options: ['am', 'is', 'are', 'be'],
        answer: 1,
        explanation: 'The baby는 3인칭 단수이므로 be동사 is를 씁니다.',
      },
    ],
  },
  {
    id: 'past-simple',
    title: '일반동사 과거형 (규칙 · 불규칙)',
    icon: '📅',
    summary:
      '규칙 동사는 -ed를 붙여요(play → played).  불규칙 동사는 형태가 통째로 바뀝니다(go → went, eat → ate).',
    questions: [
      {
        id: 'ps1', type: 'choice',
        question: 'We ___ to the zoo last Sunday.',
        options: ['go', 'goed', 'went', 'gone'],
        answer: 2,
        explanation: 'go의 과거형은 불규칙 went입니다.',
      },
      {
        id: 'ps2', type: 'blank',
        question: 'She ___ (watch) TV last night.  (괄호 안 동사를 과거형으로)',
        answer: ['watched'],
        explanation: 'watch는 규칙 동사이므로 -ed를 붙여 watched.',
      },
      {
        id: 'ps3', type: 'blank',
        question: 'I ___ (eat) pizza for lunch.  (괄호 안 동사를 과거형으로)',
        answer: ['ate'],
        explanation: 'eat의 과거형은 불규칙 ate입니다.',
      },
      {
        id: 'ps4', type: 'choice',
        question: '다음 중 과거형 부정문이 바른 것은?',
        options: ['He didn’t went.', 'He didn’t go.', 'He not went.', 'He don’t go.'],
        answer: 1,
        explanation: '과거 부정은 didn’t + 동사원형 → didn’t go.',
      },
      {
        id: 'ps5', type: 'choice',
        question: '"study"의 과거형으로 알맞은 것은?',
        options: ['studyed', 'studied', 'studyd', 'studeed'],
        answer: 1,
        explanation: '「자음+y」는 y를 i로 바꾸고 -ed → studied.',
      },
    ],
  },
  {
    id: 'future',
    title: '미래시제 (will / be going to)',
    icon: '🚀',
    summary:
      '미래는 「will + 동사원형」 또는 「be going to + 동사원형」으로 나타내요.  둘 다 뒤에는 동사원형이 옵니다.',
    questions: [
      {
        id: 'fu1', type: 'choice',
        question: 'I will ___ you tomorrow.',
        options: ['call', 'calls', 'called', 'calling'],
        answer: 0,
        explanation: 'will 뒤에는 항상 동사원형이 옵니다 → will call.',
      },
      {
        id: 'fu2', type: 'choice',
        question: 'She is going to ___ a doctor.',
        options: ['sees', 'saw', 'see', 'seeing'],
        answer: 2,
        explanation: 'be going to 뒤에도 동사원형이 옵니다 → see.',
      },
      {
        id: 'fu3', type: 'blank',
        question: 'It ___ rain tomorrow.  (will을 이용한 미래, 빈칸에 알맞은 한 단어)',
        answer: ['will'],
        explanation: '「will + 동사원형」으로 미래를 표현합니다 → It will rain.',
      },
      {
        id: 'fu4', type: 'choice',
        question: '다음 중 미래 부정문이 바른 것은?',
        options: ['I will not go.', 'I not will go.', 'I willn’t go.', 'I will don’t go.'],
        answer: 0,
        explanation: 'will의 부정은 will not = won’t 입니다 → I will not go.',
      },
      {
        id: 'fu5', type: 'blank',
        question: 'We are going ___ visit Grandma.  (빈칸에 알맞은 한 단어)',
        answer: ['to'],
        explanation: 'be going to의 to가 빠졌습니다 → are going to visit.',
      },
    ],
  },
  {
    id: 'modal',
    title: '조동사 (can / must / should)',
    icon: '🔑',
    summary:
      '조동사 뒤에는 항상 동사원형이 와요.  can(할 수 있다), must(해야 한다), should(하는 게 좋다).',
    questions: [
      {
        id: 'mo1', type: 'choice',
        question: 'You must ___ your homework.',
        options: ['did', 'does', 'do', 'doing'],
        answer: 2,
        explanation: '조동사 must 뒤에는 동사원형이 옵니다 → must do.',
      },
      {
        id: 'mo2', type: 'choice',
        question: 'He can ___ very fast.',
        options: ['runs', 'ran', 'run', 'running'],
        answer: 2,
        explanation: 'can 뒤에는 동사원형 run이 옵니다. 3인칭이라도 -s를 붙이지 않아요.',
      },
      {
        id: 'mo3', type: 'blank',
        question: 'You ___ see a dentist.  (‘가는 게 좋다’는 뜻의 조동사)',
        answer: ['should'],
        explanation: '‘~하는 게 좋다’는 충고의 조동사 should입니다.',
      },
      {
        id: 'mo4', type: 'choice',
        question: '다음 중 조동사 부정문이 바른 것은?',
        options: ['He cannot swims.', 'He can not swim.', 'He no can swim.', 'He doesn’t can swim.'],
        answer: 1,
        explanation: 'can의 부정은 cannot(= can’t) + 동사원형. 여기서는 can not swim이 맞습니다.',
      },
      {
        id: 'mo5', type: 'blank',
        question: 'Students ___ not run in the hallway.  (‘~해서는 안 된다’는 강한 금지, must/should 중 하나)',
        answer: ['must', 'should'],
        explanation: 'must not(=강한 금지) 또는 should not이 들어갈 수 있습니다.',
      },
    ],
  },
  {
    id: 'comparative',
    title: '비교급과 최상급',
    icon: '📊',
    summary:
      '비교급은 -er/more(더 ~한), 최상급은 -est/most(가장 ~한).  good → better → best 는 불규칙이에요.',
    questions: [
      {
        id: 'cp1', type: 'choice',
        question: 'A cheetah is ___ than a horse.',
        options: ['fast', 'faster', 'fastest', 'more fast'],
        answer: 1,
        explanation: 'than이 있으므로 비교급 faster를 씁니다.',
      },
      {
        id: 'cp2', type: 'choice',
        question: 'This is the ___ building in the city.',
        options: ['tall', 'taller', 'tallest', 'most tall'],
        answer: 2,
        explanation: 'the ~ in ...(가장 ~한)이므로 최상급 tallest.',
      },
      {
        id: 'cp3', type: 'blank',
        question: 'Health is ___ (important) than money.  (괄호 안 단어를 비교급으로)',
        answer: ['more important'],
        explanation: '긴 단어(3음절 이상)는 more를 붙여 비교급을 만듭니다 → more important.',
      },
      {
        id: 'cp4', type: 'blank',
        question: 'She is a ___ (good) singer than me.  (괄호 안 단어를 비교급으로)',
        answer: ['better'],
        explanation: 'good의 비교급은 불규칙 better입니다.',
      },
      {
        id: 'cp5', type: 'choice',
        question: '"big"의 비교급으로 알맞은 것은?',
        options: ['biger', 'bigger', 'more big', 'biggest'],
        answer: 1,
        explanation: '「단모음+단자음」은 자음을 하나 더 → bigger.',
      },
    ],
  },
  {
    id: 'to-infinitive',
    title: 'to부정사',
    icon: '🎯',
    summary:
      'to부정사는 「to + 동사원형」.  ‘~하는 것, ~하기 위해, ~할’ 등의 뜻으로 쓰여요.  want/hope/decide 등은 뒤에 to부정사를 씁니다.',
    questions: [
      {
        id: 'ti1', type: 'choice',
        question: 'I want ___ a soccer player.',
        options: ['be', 'to be', 'being', 'is'],
        answer: 1,
        explanation: 'want 뒤에는 to부정사가 옵니다 → want to be.',
      },
      {
        id: 'ti2', type: 'choice',
        question: 'He studies hard ___ pass the exam.',
        options: ['to', 'for', 'at', 'of'],
        answer: 0,
        explanation: '‘~하기 위해’(목적)는 to부정사로 나타냅니다 → to pass.',
      },
      {
        id: 'ti3', type: 'blank',
        question: 'She decided ___ (study) abroad.  (괄호 안 동사를 to부정사로)',
        answer: ['to study'],
        explanation: 'decide 뒤에는 to부정사 → to study.',
      },
      {
        id: 'ti4', type: 'choice',
        question: '다음 중 to부정사가 바르게 쓰인 것은?',
        options: ['I hope to see you.', 'I hope see you.', 'I hope seeing you.', 'I hope to seeing you.'],
        answer: 0,
        explanation: 'hope 뒤에는 to + 동사원형 → to see.',
      },
      {
        id: 'ti5', type: 'blank',
        question: 'It is time ___ go to bed.  (빈칸에 알맞은 한 단어)',
        answer: ['to'],
        explanation: '‘~할 시간’은 time to + 동사원형으로 표현합니다.',
      },
    ],
  },
  {
    id: 'gerund',
    title: '동명사 (동사 + -ing)',
    icon: '💡',
    summary:
      '동명사는 「동사-ing」 형태로 ‘~하는 것’이라는 명사 역할을 해요.  enjoy/finish/mind 등은 뒤에 동명사를 씁니다.',
    questions: [
      {
        id: 'ge1', type: 'choice',
        question: 'I enjoy ___ comic books.',
        options: ['read', 'to read', 'reading', 'reads'],
        answer: 2,
        explanation: 'enjoy 뒤에는 동명사가 옵니다 → enjoy reading.',
      },
      {
        id: 'ge2', type: 'choice',
        question: '___ is good for your health.',
        options: ['Swim', 'To swimming', 'Swimming', 'Swims'],
        answer: 2,
        explanation: '주어 자리에 ‘수영하는 것’은 동명사 Swimming.',
      },
      {
        id: 'ge3', type: 'blank',
        question: 'He finished ___ (do) his homework.  (괄호 안 동사를 동명사로)',
        answer: ['doing'],
        explanation: 'finish 뒤에는 동명사 → doing.',
      },
      {
        id: 'ge4', type: 'choice',
        question: '다음 중 어법상 바른 문장은?',
        options: ['She is good at cook.', 'She is good at to cook.', 'She is good at cooking.', 'She is good at cooks.'],
        answer: 2,
        explanation: '전치사(at) 뒤에는 동명사가 옵니다 → at cooking.',
      },
      {
        id: 'ge5', type: 'blank',
        question: 'Would you mind ___ (open) the window?  (괄호 안 동사를 동명사로)',
        answer: ['opening'],
        explanation: 'mind 뒤에는 동명사 → opening.',
      },
    ],
  },
  {
    id: 'relative',
    title: '관계대명사 (who / which / that)',
    icon: '🔗',
    summary:
      '관계대명사는 두 문장을 연결하며 앞의 명사를 꾸며요.  사람 → who,  사물·동물 → which,  둘 다 → that.',
    questions: [
      {
        id: 're1', type: 'choice',
        question: 'I know a boy ___ can speak French.',
        options: ['which', 'who', 'what', 'whose'],
        answer: 1,
        explanation: '앞의 명사가 사람(a boy)이므로 who를 씁니다.',
      },
      {
        id: 're2', type: 'choice',
        question: 'This is the book ___ I bought yesterday.',
        options: ['who', 'which', 'whom', 'where'],
        answer: 1,
        explanation: '앞의 명사가 사물(the book)이므로 which를 씁니다.',
      },
      {
        id: 're3', type: 'blank',
        question: 'The dog ___ is barking is mine.  (사물·동물에 쓰는 관계대명사, 한 단어)',
        answer: ['which', 'that'],
        explanation: '동물(the dog)에는 which 또는 that을 쓸 수 있습니다.',
      },
      {
        id: 're4', type: 'choice',
        question: '다음 중 관계대명사가 바르게 쓰인 것은?',
        options: [
          'The man who he lives here.',
          'The man who lives here.',
          'The man which lives here.',
          'The man what lives here.',
        ],
        answer: 1,
        explanation: '사람 + 주어 역할이므로 who를 쓰고, 뒤에 중복 주어(he)를 쓰지 않습니다.',
      },
      {
        id: 're5', type: 'blank',
        question: 'She is the teacher ___ teaches us math.  (사람에 쓰는 관계대명사, 한 단어)',
        answer: ['who', 'that'],
        explanation: '사람(the teacher)에는 who 또는 that을 쓸 수 있습니다.',
      },
    ],
  },
  {
    id: 'present-perfect',
    title: '현재완료 (have / has + p.p.)',
    icon: '⏳',
    summary:
      '현재완료는 「have/has + 과거분사(p.p.)」.  과거에 시작된 일이 현재까지 이어지거나 경험·완료를 나타내요.  3인칭 단수는 has.',
    questions: [
      {
        id: 'pf1', type: 'choice',
        question: 'I have ___ my homework.',
        options: ['finish', 'finished', 'finishing', 'finishes'],
        answer: 1,
        explanation: 'have 뒤에는 과거분사(p.p.)가 옵니다 → finished.',
      },
      {
        id: 'pf2', type: 'choice',
        question: 'She ___ never been to Japan.',
        options: ['have', 'has', 'is', 'was'],
        answer: 1,
        explanation: '주어 She(3인칭 단수)는 has를 씁니다.',
      },
      {
        id: 'pf3', type: 'blank',
        question: 'They have ___ (go) home already.  (괄호 안 동사를 과거분사로)',
        answer: ['gone'],
        explanation: 'go의 과거분사(p.p.)는 gone입니다.',
      },
      {
        id: 'pf4', type: 'choice',
        question: '다음 중 현재완료 문장으로 알맞은 것은?',
        options: ['I have saw it.', 'I have see it.', 'I have seen it.', 'I has seen it.'],
        answer: 2,
        explanation: 'see의 과거분사는 seen → I have seen it.',
      },
      {
        id: 'pf5', type: 'blank',
        question: 'He ___ lived here for 5 years.  (빈칸에 알맞은 한 단어)',
        answer: ['has'],
        explanation: '주어 He는 3인칭 단수이므로 has + p.p. → has lived.',
      },
    ],
  },
]

// ============================================================================
//  학생별 학습 범위 설정
// ----------------------------------------------------------------------------
//  접속하는 학생마다 학습할 단원(범위)이 다릅니다.
//  units 값에 위 단원의 id를 넣으면 해당 학생에게 그 단원만 보입니다.
//    - 특정 단원만:  units: ['be-verb', 'be-past', 'general-verb']
//    - 전체 단원:    units: 'all'
//
//  ▶ 선생님께: 학생 이름과 범위를 아래에서 자유롭게 추가/수정하세요.
//    (실제 학생 명단과 범위가 정해지면 이 목록만 바꾸면 됩니다.)
// ============================================================================

export const students = [
  {
    id: 'sample-basic',
    name: '샘플 A반 (기초)',
    units: ['be-verb', 'be-past', 'general-verb', 'present-progressive'],
  },
  {
    id: 'sample-mid',
    name: '샘플 B반 (시제)',
    units: ['past-simple', 'future', 'present-perfect', 'modal'],
  },
  {
    id: 'sample-adv',
    name: '샘플 C반 (심화)',
    units: ['comparative', 'to-infinitive', 'gerund', 'relative', 'present-perfect'],
  },
  {
    id: 'sample-all',
    name: '샘플 전체 범위',
    units: 'all',
  },
]

// 헬퍼: 학생에게 배정된 단원 목록을 반환
export function getUnitsForStudent(student) {
  if (!student || student.units === 'all') return units
  return units.filter((u) => student.units.includes(u.id))
}
