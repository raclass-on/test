// ============================================================================
//  문법 문제 데이터 (자동 생성 · 워크북 20% 활용 + 80% 신규)
//  courses: 반(1-B / 2-B)별로 8개 유닛, 각 유닛 = 객관식(mc) 40 + 주관식(sa) 10
//    mc 항목: { q, options[4], answer(정답 인덱스 0-3), explain }
//    sa 항목: { q, answers[](정답 후보들, 정규화 후 일치하면 정답), explain }
//  ※ 문제 내용을 고치려면 이 파일의 해당 항목만 수정하세요.
// ============================================================================

export const courses = [
  {
    "id": "1-B",
    "name": "1학년 2학기 (1-B)",
    "units": [
      {
        "id": "1-B-U1",
        "unit": 1,
        "title": "to부정사의 명사적 용법 (목적어)",
        "concept": "want·hope·decide·need·plan 등의 동사 뒤에 「to+동사원형」이 와서 '~하기를/~하는 것을'로 해석한다.",
        "mc": [
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I want ___ comics.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to read가 정답이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  She hopes ___ her cousin.",
            "options": [
              "to meet",
              "meet",
              "meeting",
              "met"
            ],
            "answer": 0,
            "explain": "hope 뒤에는 to부정사가 오므로 to meet이 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  We decided ___ the classroom.",
            "options": [
              "clean",
              "cleaned",
              "to clean",
              "cleans"
            ],
            "answer": 2,
            "explain": "decide 뒤에는 to부정사가 오므로 to clean이 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  He needs ___ his bike.",
            "options": [
              "to fix",
              "fix",
              "fixing",
              "fixed"
            ],
            "answer": 0,
            "explain": "need 뒤에는 「to+동사원형」이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  They plan ___ a bakery.",
            "options": [
              "opens",
              "to open",
              "opening",
              "open"
            ],
            "answer": 1,
            "explain": "plan 뒤에는 to부정사가 오므로 to open이 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I want ___ a cook.",
            "options": [
              "become",
              "becoming",
              "to become",
              "becomes"
            ],
            "answer": 2,
            "explain": "want 뒤에는 to부정사가 오고 to 뒤에는 동사원형 become이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  My sister hopes ___ the contest.",
            "options": [
              "to win",
              "win",
              "winning",
              "won"
            ],
            "answer": 0,
            "explain": "hope 뒤에는 to부정사가 오므로 to win이 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I decided ___ my grandmother next month.",
            "options": [
              "visit",
              "visiting",
              "visited",
              "to visit"
            ],
            "answer": 3,
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to visit이 맞다."
          },
          {
            "q": "우리말 뜻에 맞는 영어를 고르세요.  '나는 새 자전거를 사고 싶다.'",
            "options": [
              "I want buy a new bike.",
              "I want to buy a new bike.",
              "I want buying a new bike.",
              "I want to buying a new bike."
            ],
            "answer": 1,
            "explain": "want to buy가 '사고 싶다'의 올바른 표현이다."
          },
          {
            "q": "우리말 뜻에 맞는 영어를 고르세요.  '내 남동생은 축구 선수가 되기를 바란다.'",
            "options": [
              "My brother hopes be a soccer player.",
              "My brother hopes being a soccer player.",
              "My brother hopes to be a soccer player.",
              "My brother hope to be a soccer player."
            ],
            "answer": 2,
            "explain": "hope to be가 '되기를 바란다'의 올바른 표현이다."
          },
          {
            "q": "우리말 뜻에 맞는 영어를 고르세요.  '우리는 도서관에서 공부하기로 결정했다.'",
            "options": [
              "We decided to study at the library.",
              "We decided study at the library.",
              "We decided studying at the library.",
              "We decide to studying at the library."
            ],
            "answer": 0,
            "explain": "decided to study가 '공부하기로 결정했다'의 올바른 표현이다."
          },
          {
            "q": "우리말 뜻에 맞는 영어를 고르세요.  '너는 지금 좀 자는 것이 필요하다.'",
            "options": [
              "You need sleep now.",
              "You need sleeping now.",
              "You need to sleep now.",
              "You need to sleeping now."
            ],
            "answer": 2,
            "explain": "need to sleep가 '자는 것이 필요하다'의 올바른 표현이다."
          },
          {
            "q": "어법상 옳은 문장을 고르세요.",
            "options": [
              "They plan to go camping this weekend.",
              "They plan go camping this weekend.",
              "They plan going camping this weekend.",
              "They plans to go camping this weekend."
            ],
            "answer": 0,
            "explain": "plan 뒤에 to go가 오고 주어 They에 맞는 동사 plan을 써야 한다."
          },
          {
            "q": "어법상 옳은 문장을 고르세요.",
            "options": [
              "She wants learn the song.",
              "She wants to learn the song.",
              "She wants learning the song.",
              "She want to learn the song."
            ],
            "answer": 1,
            "explain": "wants 뒤에는 to learn이 와야 한다."
          },
          {
            "q": "어법상 틀린 문장을 고르세요.",
            "options": [
              "I want to become a vet.",
              "We decided to visit Jeju.",
              "He need to drink water.",
              "I hope to do well."
            ],
            "answer": 2,
            "explain": "주어 He에는 needs를 써야 하므로 'He need'는 틀렸다."
          },
          {
            "q": "어법상 틀린 문장을 고르세요.",
            "options": [
              "They plan to make an app.",
              "She wants to learn to play the piano.",
              "I decided to clean my room.",
              "We want buy the tickets."
            ],
            "answer": 3,
            "explain": "want 뒤에는 to buy가 와야 하므로 'want buy'는 틀렸다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I want ___ English fluently.",
            "options": [
              "speak",
              "to speak",
              "speaking",
              "spoke"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  She decided ___ an artist.",
            "options": [
              "to be",
              "be",
              "being",
              "is"
            ],
            "answer": 0,
            "explain": "decide 뒤에는 to be가 오며 to 뒤에는 동사원형 be가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  We hope ___ the mountain.",
            "options": [
              "climbs",
              "climbing",
              "to climb",
              "climbed"
            ],
            "answer": 2,
            "explain": "hope 뒤에는 to climb이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  He needs ___ his hands now.",
            "options": [
              "wash",
              "to wash",
              "washing",
              "washes"
            ],
            "answer": 1,
            "explain": "need 뒤에는 「to+동사원형」이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  They plan ___ a club.",
            "options": [
              "start",
              "starting",
              "to start",
              "started"
            ],
            "answer": 2,
            "explain": "plan 뒤에는 to start가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I want ___ a new language.",
            "options": [
              "to learn",
              "learn",
              "learning",
              "learns"
            ],
            "answer": 0,
            "explain": "want 뒤에는 to learn이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  We decided ___ on a picnic.",
            "options": [
              "go",
              "goes",
              "going",
              "to go"
            ],
            "answer": 3,
            "explain": "decide 뒤에는 「to+동사원형」이 온다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.  ( to / I / want / be / a pilot )",
            "options": [
              "I want be to a pilot.",
              "I want to be a pilot.",
              "I to want be a pilot.",
              "I be want to a pilot."
            ],
            "answer": 1,
            "explain": "want + to be의 어순으로 'I want to be a pilot.'이 맞다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.  ( decided / she / to / study / harder )",
            "options": [
              "She to decided study harder.",
              "She decided study to harder.",
              "She decided to study harder.",
              "She study decided to harder."
            ],
            "answer": 2,
            "explain": "decided + to study의 어순으로 'She decided to study harder.'가 맞다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.  ( we / to / hope / see / you / soon )",
            "options": [
              "We hope to see you soon.",
              "We to hope see you soon.",
              "We hope see to you soon.",
              "We see hope to you soon."
            ],
            "answer": 0,
            "explain": "hope + to see의 어순으로 'We hope to see you soon.'이 맞다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.  ( he / to / needs / finish / his homework )",
            "options": [
              "He needs finish to his homework.",
              "He to needs finish his homework.",
              "He needs to finish his homework.",
              "He finish needs to his homework."
            ],
            "answer": 2,
            "explain": "needs + to finish의 어순으로 'He needs to finish his homework.'가 맞다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.  ( they / to / plan / build / a treehouse )",
            "options": [
              "They plan to build a treehouse.",
              "They to plan build a treehouse.",
              "They plan build to a treehouse.",
              "They build plan to a treehouse."
            ],
            "answer": 0,
            "explain": "plan + to build의 어순으로 'They plan to build a treehouse.'가 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  A: What do you want to be? B: I want ___ a movie director.",
            "options": [
              "become",
              "to become",
              "becoming",
              "became"
            ],
            "answer": 1,
            "explain": "want 뒤에는 to become이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I hope ___ great films someday.",
            "options": [
              "make",
              "makes",
              "to make",
              "making"
            ],
            "answer": 2,
            "explain": "hope 뒤에는 to make가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  This summer, I plan ___ to Europe.",
            "options": [
              "to travel",
              "travel",
              "traveling",
              "traveled"
            ],
            "answer": 0,
            "explain": "plan 뒤에는 to travel이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  Next year, I decided ___ the film club.",
            "options": [
              "join",
              "joins",
              "joining",
              "to join"
            ],
            "answer": 3,
            "explain": "decide 뒤에는 「to+동사원형」이 온다."
          },
          {
            "q": "어법상 옳은 문장을 고르세요.",
            "options": [
              "I want to eat pizza for lunch.",
              "I want eat pizza for lunch.",
              "I want ate pizza for lunch.",
              "I want eating pizza for lunch."
            ],
            "answer": 0,
            "explain": "want 뒤에는 to eat이 와야 한다."
          },
          {
            "q": "어법상 틀린 문장을 고르세요.",
            "options": [
              "We hope to win the game.",
              "She plans to read the book.",
              "I decided to go home.",
              "He wants to plays soccer."
            ],
            "answer": 3,
            "explain": "to 뒤에는 동사원형 play가 와야 하므로 'to plays'는 틀렸다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  She wants ___ to play the piano.",
            "options": [
              "learn",
              "to learn",
              "learning",
              "learns"
            ],
            "answer": 1,
            "explain": "want 뒤에는 to learn이 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  I decided ___ my room.",
            "options": [
              "clean",
              "cleaning",
              "to clean",
              "cleaned"
            ],
            "answer": 2,
            "explain": "decide 뒤에는 to clean이 온다."
          },
          {
            "q": "우리말 뜻에 맞는 영어를 고르세요.  '그는 매일 물을 많이 마실 필요가 있다.'",
            "options": [
              "He needs drink a lot of water.",
              "He need to drink a lot of water.",
              "He needs to drink a lot of water.",
              "He needs to drinking a lot of water."
            ],
            "answer": 2,
            "explain": "needs to drink가 올바른 표현이다."
          },
          {
            "q": "우리말 뜻에 맞는 영어를 고르세요.  '나는 이번 시험을 잘 보기를 바란다.'",
            "options": [
              "I hope to do well on this test.",
              "I hope do well on this test.",
              "I hope doing well on this test.",
              "I hope to doing well on this test."
            ],
            "answer": 0,
            "explain": "hope to do가 '~하기를 바란다'의 올바른 표현이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.  We want ___ the concert tickets.",
            "options": [
              "buy",
              "to buy",
              "buying",
              "buys"
            ],
            "answer": 1,
            "explain": "want 뒤에는 to buy가 온다."
          },
          {
            "q": "어법상 옳은 문장을 고르세요.",
            "options": [
              "She hope to travel abroad.",
              "She hopes to travel abroad.",
              "She hopes travel abroad.",
              "She hopes to traveling abroad."
            ],
            "answer": 1,
            "explain": "주어 She에는 hopes를 쓰고 뒤에 to travel이 온다."
          }
        ],
        "sa": [
          {
            "q": "빈칸을 채우세요. (동사 read 이용)  I want ___ comics.",
            "answers": [
              "to read"
            ],
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to read이다."
          },
          {
            "q": "빈칸을 채우세요. (동사 meet 이용)  I hope ___ my cousin.",
            "answers": [
              "to meet"
            ],
            "explain": "hope 뒤에는 to meet이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 clean 이용)  We decided ___ the classroom.",
            "answers": [
              "to clean"
            ],
            "explain": "decide 뒤에는 to clean이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 open 이용)  They plan ___ a bakery.",
            "answers": [
              "to open"
            ],
            "explain": "plan 뒤에는 to open이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 be 이용)  I want ___ a cook.",
            "answers": [
              "to be"
            ],
            "explain": "want 뒤에는 to be가 오고 to 뒤에는 동사원형 be가 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 speak 이용)  I want ___ English fluently.",
            "answers": [
              "to speak"
            ],
            "explain": "want 뒤에는 to speak이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 climb 이용)  We hope ___ the mountain.",
            "answers": [
              "to climb"
            ],
            "explain": "hope 뒤에는 to climb이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 wash 이용)  He needs ___ his hands.",
            "answers": [
              "to wash"
            ],
            "explain": "need 뒤에는 to wash가 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 travel 이용)  I plan ___ to Europe this summer.",
            "answers": [
              "to travel"
            ],
            "explain": "plan 뒤에는 to travel이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 join 이용)  I decided ___ the film club.",
            "answers": [
              "to join"
            ],
            "explain": "decide 뒤에는 to join이 온다."
          }
        ]
      },
      {
        "id": "1-B-U2",
        "unit": 2,
        "title": "비인칭 주어 It",
        "concept": "날씨·시간·요일·날짜·계절·거리·명암을 말할 때 문장의 주어로 It을 쓰며, 이 It은 '그것은'으로 해석하지 않는다.",
        "mc": [
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is sunny today.",
            "options": [
              "It",
              "This",
              "That",
              "They"
            ],
            "answer": 0,
            "explain": "날씨를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is 9 o'clock now.",
            "options": [
              "He",
              "It",
              "There",
              "This"
            ],
            "answer": 1,
            "explain": "시간을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is Wednesday today.",
            "options": [
              "That",
              "This",
              "It",
              "One"
            ],
            "answer": 2,
            "explain": "요일을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is March 3rd today.",
            "options": [
              "It",
              "They",
              "Its",
              "There"
            ],
            "answer": 0,
            "explain": "날짜를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is spring now.",
            "options": [
              "This",
              "It",
              "He",
              "That"
            ],
            "answer": 1,
            "explain": "계절을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is 1 km to the park.",
            "options": [
              "There",
              "This",
              "It",
              "They"
            ],
            "answer": 2,
            "explain": "거리를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is very dark outside.",
            "options": [
              "It",
              "That",
              "This",
              "Those"
            ],
            "answer": 0,
            "explain": "명암(밝고 어두움)을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ is cloudy today.",
            "options": [
              "They",
              "It",
              "This",
              "He"
            ],
            "answer": 1,
            "explain": "날씨를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n오늘은 비가 온다.",
            "options": [
              "It's rainy today.",
              "This is rainy today.",
              "There is rainy today.",
              "It rainy today."
            ],
            "answer": 0,
            "explain": "날씨는 It's + 형용사로 나타낸다. 'It's rainy today.'가 올바르다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n지금은 5시다.",
            "options": [
              "This is 5 o'clock now.",
              "It's 5 o'clock now.",
              "There is 5 o'clock.",
              "It 5 o'clock now."
            ],
            "answer": 1,
            "explain": "시간은 It's + 시각으로 나타낸다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n오늘은 토요일이다.",
            "options": [
              "Today is a Saturday it.",
              "It Saturday today.",
              "It's Saturday today.",
              "That's Saturday today."
            ],
            "answer": 2,
            "explain": "요일은 It's + 요일로 나타낸다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n지금은 겨울이다.",
            "options": [
              "It's winter now.",
              "This winter now.",
              "It winter is now.",
              "There's winter now."
            ],
            "answer": 0,
            "explain": "계절은 It's + 계절로 나타낸다."
          },
          {
            "q": "다음 중 문장이 옳은 것을 고르세요.",
            "options": [
              "This is far from here to the station.",
              "It's far from here to the station.",
              "There far from here.",
              "It far from here to the station."
            ],
            "answer": 1,
            "explain": "거리는 It's far/near로 나타낸다."
          },
          {
            "q": "다음 중 문장이 옳은 것을 고르세요.",
            "options": [
              "It's bright in the room.",
              "That's bright in the room.",
              "It bright in the room.",
              "This bright in the room."
            ],
            "answer": 0,
            "explain": "명암은 It's bright/dark로 나타낸다."
          },
          {
            "q": "다음 중 문장이 틀린 것을 고르세요.",
            "options": [
              "It's sunny today.",
              "It's Monday today.",
              "They is 3 o'clock now.",
              "It's summer now."
            ],
            "answer": 2,
            "explain": "시간을 나타낼 때 주어는 It이어야 한다. 'They is'는 틀렸고, 'It's 3 o'clock now.'가 옳다."
          },
          {
            "q": "다음 중 문장이 틀린 것을 고르세요.",
            "options": [
              "It's winter now.",
              "It's dark outside.",
              "This is Friday today.",
              "It's April 9th today."
            ],
            "answer": 2,
            "explain": "요일을 나타낼 때 주어는 It. 'This is Friday'가 아니라 'It's Friday today.'가 옳다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: What's the weather like today?  B: ___ windy.",
            "options": [
              "This is",
              "There's",
              "It's",
              "He's"
            ],
            "answer": 2,
            "explain": "날씨를 답할 때 It's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: What time is it now?  B: ___ 8:30.",
            "options": [
              "It's",
              "This is",
              "That's",
              "They're"
            ],
            "answer": 0,
            "explain": "시간을 답할 때 It's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: What day is it today?  B: ___ Thursday.",
            "options": [
              "There's",
              "It's",
              "This is",
              "He's"
            ],
            "answer": 1,
            "explain": "요일을 답할 때 It's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: What's the date today?  B: ___ January 1st.",
            "options": [
              "This is",
              "That's",
              "It's",
              "They're"
            ],
            "answer": 2,
            "explain": "날짜를 답할 때 It's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: What season is it now?  B: ___ fall.",
            "options": [
              "It's",
              "There's",
              "This is",
              "He's"
            ],
            "answer": 0,
            "explain": "계절을 답할 때 It's를 쓴다."
          },
          {
            "q": "밑줄 친 It의 쓰임이 나머지와 다른 것을 고르세요.",
            "options": [
              "It's sunny today.",
              "It's my new phone.",
              "It's Monday today.",
              "It's 10 o'clock now."
            ],
            "answer": 1,
            "explain": "2번의 It은 '그것'을 뜻하는 대명사이고, 나머지는 날씨·요일·시간을 나타내는 비인칭 It이다."
          },
          {
            "q": "밑줄 친 It의 쓰임이 나머지와 다른 것을 고르세요.",
            "options": [
              "It's a nice bag.",
              "It's winter now.",
              "It's dark outside.",
              "It's far from here."
            ],
            "answer": 0,
            "explain": "1번의 It은 '그것'을 뜻하는 대명사이고, 나머지는 계절·명암·거리를 나타내는 비인칭 It이다."
          },
          {
            "q": "밑줄 친 It이 '그것'으로 해석되는 문장을 고르세요.",
            "options": [
              "It's spring now.",
              "It's cloudy today.",
              "It's a cute cat.",
              "It's 2 km to the park."
            ],
            "answer": 2,
            "explain": "'It's a cute cat.'의 It만 '그것'을 뜻하는 대명사이고, 나머지는 비인칭 It이다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n지금은 2시다.",
            "options": [
              "It's 2 o'clock now.",
              "This is 2 o'clock.",
              "It 2 o'clock now.",
              "There's 2 o'clock now."
            ],
            "answer": 0,
            "explain": "시간은 It's + 시각으로 나타낸다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n오늘은 12월 25일이다.",
            "options": [
              "This December 25th today.",
              "It's December 25th today.",
              "It December 25th today.",
              "That's December 25th."
            ],
            "answer": 1,
            "explain": "날짜는 It's + 날짜로 나타낸다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n지금 밖이 어둡다.",
            "options": [
              "This is dark outside.",
              "There's dark outside.",
              "It's dark outside.",
              "It dark outside now."
            ],
            "answer": 2,
            "explain": "명암은 It's dark로 나타낸다."
          },
          {
            "q": "우리말 뜻에 맞는 영어 문장을 고르세요.\n오늘 눈이 온다.",
            "options": [
              "It's snowy today.",
              "This snowy today.",
              "It snowy is today.",
              "There is snowy today."
            ],
            "answer": 0,
            "explain": "날씨는 It's + 형용사로 나타낸다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( it's / o'clock / ten )",
            "options": [
              "Ten it's o'clock.",
              "It's ten o'clock.",
              "O'clock ten it's.",
              "It's o'clock ten."
            ],
            "answer": 1,
            "explain": "'It's ten o'clock.'이 올바른 어순이다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( it's / Thursday / today )",
            "options": [
              "It's today Thursday.",
              "Today Thursday it's.",
              "It's Thursday today.",
              "Thursday it's today."
            ],
            "answer": 2,
            "explain": "'It's Thursday today.'가 올바른 어순이다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( summer / it's / now )",
            "options": [
              "It's summer now.",
              "Summer it's now.",
              "Now summer it's.",
              "It's now summer."
            ],
            "answer": 0,
            "explain": "'It's summer now.'가 올바른 어순이다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( to / it's / far / the museum )",
            "options": [
              "It's the museum to far.",
              "Far it's to the museum.",
              "It's far to the museum.",
              "To the museum it's far."
            ],
            "answer": 2,
            "explain": "'It's far to the museum.'이 올바른 어순이다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: Is it far from here to school?  B: Yes, ___ far.",
            "options": [
              "it's",
              "this is",
              "there's",
              "he's"
            ],
            "answer": 0,
            "explain": "거리를 답할 때 it's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nA: Is it dark outside now?  B: Yes, ___ dark.",
            "options": [
              "there's",
              "it's",
              "this is",
              "that's"
            ],
            "answer": 1,
            "explain": "명암을 답할 때 it's를 쓴다."
          },
          {
            "q": "다음 중 밑줄 친 It이 비인칭 주어인 문장을 고르세요.",
            "options": [
              "It is my book.",
              "It is on the desk.",
              "It is 3 o'clock now.",
              "I like it very much."
            ],
            "answer": 2,
            "explain": "'It is 3 o'clock now.'의 It만 시간을 나타내는 비인칭 It이고, 나머지는 '그것'을 가리키는 대명사이다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n오늘은 화요일이다.  ___ Tuesday today.",
            "options": [
              "It's",
              "This is",
              "There's",
              "They're"
            ],
            "answer": 0,
            "explain": "요일은 It's + 요일로 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n여기서 우체국까지 가깝다.  It's ___ to the post office.",
            "options": [
              "far",
              "near",
              "long",
              "dark"
            ],
            "answer": 1,
            "explain": "'가깝다'는 near로 나타낸다. It's near to the post office."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n방 안이 밝다.  It's ___ in the room.",
            "options": [
              "bright",
              "dark",
              "far",
              "rainy"
            ],
            "answer": 0,
            "explain": "'밝다'는 bright로 나타낸다."
          },
          {
            "q": "다음 중 문장이 옳은 것을 고르세요.",
            "options": [
              "It's windy now.",
              "Windy it's now.",
              "It windy now.",
              "This windy now."
            ],
            "answer": 0,
            "explain": "날씨는 It's + 형용사. 'It's windy now.'가 옳다."
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 말을 고르세요.\n___ is snowy today.  ___ is winter now.",
            "options": [
              "This",
              "There",
              "It",
              "They"
            ],
            "answer": 2,
            "explain": "날씨와 계절을 나타낼 때 모두 비인칭 주어 It을 쓴다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (날씨)\n___ is sunny today.",
            "answers": [
              "It"
            ],
            "explain": "날씨를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (시간)\n___ is 9 o'clock now.",
            "answers": [
              "It"
            ],
            "explain": "시간을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. (줄임말, 요일)\n___ Wednesday today. (It is를 줄여서)",
            "answers": [
              "It's"
            ],
            "explain": "It is의 줄임말은 It's이다. 요일은 It's로 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (거리)\n___ is 1 km to the park.",
            "answers": [
              "It"
            ],
            "explain": "거리를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (명암)\n___ is very dark outside.",
            "answers": [
              "It"
            ],
            "explain": "명암을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. (줄임말)\nA: What time is it now?  B: ___ 8:30. (It is를 줄여서)",
            "answers": [
              "It's"
            ],
            "explain": "시간을 답할 때 It's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (계절)\n___ is summer now.",
            "answers": [
              "It"
            ],
            "explain": "계절을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 한 단어를 쓰세요.\n여기서 역까지 멀다.  It's ___ from here to the station.",
            "answers": [
              "far"
            ],
            "explain": "'멀다'는 far로 나타낸다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 한 단어를 쓰세요.\n방 안이 밝다.  It's ___ in the room.",
            "answers": [
              "bright"
            ],
            "explain": "'밝다'는 bright로 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (요일)\n___ is Thursday today.",
            "answers": [
              "It"
            ],
            "explain": "요일을 나타낼 때는 비인칭 주어 It을 쓴다."
          }
        ]
      },
      {
        "id": "1-B-U3",
        "unit": 3,
        "title": "감각동사 + 형용사",
        "concept": "감각동사(look, sound, smell, taste, feel) 뒤에는 부사(-ly)가 아니라 형용사가 온다. (look like 뒤에는 명사)",
        "mc": [
          {
            "q": "The flowers smell ___.",
            "options": [
              "sweet",
              "sweetly",
              "sweetness",
              "to sweet"
            ],
            "answer": 0,
            "explain": "감각동사 smell 뒤에는 형용사가 와요. 부사 sweetly가 아니라 형용사 sweet가 정답이에요."
          },
          {
            "q": "Your idea sounds ___.",
            "options": [
              "greatly",
              "great",
              "greatness",
              "greating"
            ],
            "answer": 1,
            "explain": "sound 뒤에는 형용사가 와요. 부사 greatly가 아니라 형용사 great가 맞아요."
          },
          {
            "q": "This cake tastes ___.",
            "options": [
              "deliciously",
              "delicious",
              "deliciousness",
              "more deliciously"
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와요. 부사 deliciously는 쓸 수 없고 형용사 delicious가 정답이에요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The music sounds loudly.",
              "The music sounds loud.",
              "The music sounds a loud.",
              "The music sound loud."
            ],
            "answer": 1,
            "explain": "감각동사 sound 뒤에는 형용사 loud가 와요. 부사 loudly는 틀리고, 3인칭 단수 주어라 sounds가 맞아요."
          },
          {
            "q": "This blanket feels ___.",
            "options": [
              "softly",
              "soft",
              "softness",
              "to soft"
            ],
            "answer": 1,
            "explain": "feel 뒤에는 형용사가 와요. 부사 softly가 아니라 형용사 soft가 정답이에요."
          },
          {
            "q": "You look ___ today.",
            "options": [
              "happily",
              "happiness",
              "happy",
              "to happy"
            ],
            "answer": 2,
            "explain": "look 뒤에는 형용사가 와요. 부사 happily가 아니라 형용사 happy가 맞아요."
          },
          {
            "q": "다음 중 밑줄 친 부분이 틀린 문장은?",
            "options": [
              "The soup tastes salty.",
              "The soup tastes saltily.",
              "The soup tastes good.",
              "The soup tastes hot."
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와야 하므로 부사 saltily는 틀려요. 형용사 salty가 맞아요."
          },
          {
            "q": "The baby looks ___.",
            "options": [
              "cutely",
              "cute",
              "cuteness",
              "cuting"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 cutely가 아니라 형용사 cute가 정답이에요."
          },
          {
            "q": "A: How does the pizza taste?  B: It tastes ___.",
            "options": [
              "nicely",
              "nice",
              "niceness",
              "to nice"
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와요. 부사 nicely가 아니라 형용사 nice가 맞아요."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것은?  The bread smells ___.",
            "options": [
              "fresh",
              "good",
              "freshly",
              "delicious"
            ],
            "answer": 2,
            "explain": "smell 뒤에는 형용사만 올 수 있어요. freshly는 부사라서 들어갈 수 없어요."
          },
          {
            "q": "That plan sounds ___.",
            "options": [
              "dangerously",
              "danger",
              "dangerous",
              "to dangerous"
            ],
            "answer": 2,
            "explain": "sound 뒤에는 형용사가 와요. 부사 dangerously가 아니라 형용사 dangerous가 정답이에요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "She looks beautifully.",
              "She looks beauty.",
              "She looks beautiful.",
              "She look beautiful."
            ],
            "answer": 2,
            "explain": "look 뒤에는 형용사 beautiful이 와요. 부사 beautifully는 틀리고, 주어가 She라 looks가 맞아요."
          },
          {
            "q": "This lemon tastes ___.",
            "options": [
              "sour",
              "sourly",
              "sourness",
              "to sour"
            ],
            "answer": 0,
            "explain": "taste 뒤에는 형용사가 와요. 부사 sourly가 아니라 형용사 sour가 맞아요."
          },
          {
            "q": "The towel feels ___.",
            "options": [
              "warmly",
              "warmth",
              "warm",
              "to warm"
            ],
            "answer": 2,
            "explain": "feel 뒤에는 형용사가 와요. 부사 warmly가 아니라 형용사 warm이 정답이에요."
          },
          {
            "q": "다음 중 밑줄 친 부분이 틀린 문장은?",
            "options": [
              "He looks tired.",
              "He looks sleepy.",
              "He looks nicely.",
              "He looks cool."
            ],
            "answer": 2,
            "explain": "look 뒤에는 형용사가 와야 하므로 부사 nicely는 틀려요. nice로 고쳐야 해요."
          },
          {
            "q": "The news sounds ___.",
            "options": [
              "surprisingly",
              "surprise",
              "surprising",
              "to surprising"
            ],
            "answer": 2,
            "explain": "sound 뒤에는 형용사가 와요. 부사 surprisingly가 아니라 형용사 surprising이 맞아요."
          },
          {
            "q": "This ice cream tastes ___.",
            "options": [
              "creamily",
              "creamy",
              "creaminess",
              "cream"
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와요. 형용사 creamy가 정답이에요. (creamily는 부사)"
          },
          {
            "q": "You look ___ your father.  (너는 너의 아빠처럼 보인다.)",
            "options": [
              "look",
              "look like",
              "like",
              "as"
            ],
            "answer": 2,
            "explain": "'~처럼 보이다'는 look like + 명사예요. 'You look ___ your father'에서 이미 look이 있으니 빈칸에는 like가 와요."
          },
          {
            "q": "다음 중 올바른 것은?  (그는 배우처럼 보인다.)",
            "options": [
              "He looks an actor.",
              "He looks like an actor.",
              "He looks likely an actor.",
              "He look like an actor."
            ],
            "answer": 1,
            "explain": "뒤에 명사(an actor)가 오면 look like를 써요. look 뒤에 바로 명사는 올 수 없어요."
          },
          {
            "q": "The soup looks ___.  (그 국은 뜨거워 보인다.)",
            "options": [
              "hotly",
              "hot",
              "hotness",
              "to hot"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 hotly가 아니라 형용사 hot이 정답이에요."
          },
          {
            "q": "The movie looks ___.",
            "options": [
              "interestingly",
              "interesting",
              "interest",
              "to interesting"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 interestingly가 아니라 형용사 interesting이 맞아요."
          },
          {
            "q": "빈칸에 알맞은 것은?  This juice tastes ___.  (이 주스는 단맛이 난다.)",
            "options": [
              "sweetly",
              "sweet",
              "sweetness",
              "to sweet"
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와요. 형용사 sweet가 정답이에요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The pillow feels softly.",
              "The pillow feels soft.",
              "The pillow feel soft.",
              "The pillow feels a soft."
            ],
            "answer": 1,
            "explain": "feel 뒤에는 형용사 soft가 와요. 부사 softly는 틀리고, 주어가 단수라 feels가 맞아요."
          },
          {
            "q": "Your voice sounds ___.",
            "options": [
              "greatly",
              "great",
              "greatness",
              "to great"
            ],
            "answer": 1,
            "explain": "sound 뒤에는 형용사가 와요. 부사 greatly가 아니라 형용사 great가 맞아요."
          },
          {
            "q": "The fish smells ___.",
            "options": [
              "badly",
              "bad",
              "badness",
              "to bad"
            ],
            "answer": 1,
            "explain": "smell 뒤에는 형용사가 와요. 부사 badly가 아니라 형용사 bad가 정답이에요."
          },
          {
            "q": "다음 중 밑줄 친 부분이 틀린 문장은?",
            "options": [
              "This candy tastes sweet.",
              "This candy tastes sweetly.",
              "This candy tastes good.",
              "This candy tastes fresh."
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와야 하므로 부사 sweetly는 틀려요. sweet가 맞아요."
          },
          {
            "q": "The shoes look ___.  (그 신발이 편안해 보인다.)",
            "options": [
              "comfortably",
              "comfortable",
              "comfort",
              "to comfortable"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 comfortably가 아니라 형용사 comfortable이 맞아요."
          },
          {
            "q": "A: How do you feel now?  B: I feel ___.",
            "options": [
              "greatly",
              "great",
              "greatness",
              "to great"
            ],
            "answer": 1,
            "explain": "feel 뒤에는 형용사가 와요. 부사 greatly가 아니라 형용사 great가 맞아요."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것은?  The song sounds ___.",
            "options": [
              "nice",
              "beautiful",
              "quietly",
              "sad"
            ],
            "answer": 2,
            "explain": "sound 뒤에는 형용사만 올 수 있어요. quietly는 부사라서 들어갈 수 없어요. (quiet로 써야 함)"
          },
          {
            "q": "The strawberries taste ___.",
            "options": [
              "freshly",
              "fresh",
              "freshness",
              "to fresh"
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와요. 부사 freshly가 아니라 형용사 fresh가 정답이에요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The teacher looks kindly.",
              "The teacher looks kindness.",
              "The teacher looks kind.",
              "The teacher look kind."
            ],
            "answer": 2,
            "explain": "look 뒤에는 형용사 kind가 와요. 부사 kindly는 틀리고, 주어가 단수라 looks가 맞아요."
          },
          {
            "q": "This blanket feels ___.  (이 담요는 부드럽게 느껴진다.)",
            "options": [
              "softly",
              "soft",
              "softness",
              "to soft"
            ],
            "answer": 1,
            "explain": "feel 뒤에는 형용사가 와요. '부드럽게 느껴진다'지만 부사가 아니라 형용사 soft를 써요."
          },
          {
            "q": "The fireworks looked ___ in the night sky.",
            "options": [
              "amazingly",
              "amazing",
              "amazement",
              "to amazing"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 amazingly가 아니라 형용사 amazing이 맞아요."
          },
          {
            "q": "다음 중 밑줄 친 부분이 틀린 문장은?",
            "options": [
              "The water feels cold.",
              "The water feels cool.",
              "The water feels warmly.",
              "The water feels nice."
            ],
            "answer": 2,
            "explain": "feel 뒤에는 형용사가 와야 하므로 부사 warmly는 틀려요. warm이 맞아요."
          },
          {
            "q": "Your room looks ___.  (네 방이 깨끗해 보인다.)",
            "options": [
              "cleanly",
              "clean",
              "cleanness",
              "to clean"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 cleanly가 아니라 형용사 clean이 정답이에요."
          },
          {
            "q": "The cheese tastes ___.",
            "options": [
              "strongly",
              "strong",
              "strength",
              "to strong"
            ],
            "answer": 1,
            "explain": "taste 뒤에는 형용사가 와요. 부사 strongly가 아니라 형용사 strong이 맞아요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "This soup tastes hotly.",
              "This soup taste hot.",
              "This soup tastes hot.",
              "This soup tastes a hot."
            ],
            "answer": 2,
            "explain": "taste 뒤에는 형용사 hot이 와요. 부사 hotly는 틀리고, 주어가 단수라 tastes가 맞아요."
          },
          {
            "q": "The boy looks ___.  (그 남자아이는 졸려 보인다.)",
            "options": [
              "sleepily",
              "sleepy",
              "sleepiness",
              "to sleepy"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 sleepily가 아니라 형용사 sleepy가 정답이에요."
          },
          {
            "q": "빈칸에 알맞은 것은?  He looks ___ his brother.  (그는 그의 형처럼 보인다.)",
            "options": [
              "like",
              "likely",
              "very",
              "so"
            ],
            "answer": 0,
            "explain": "뒤에 명사(his brother)가 오므로 look like를 써요. 빈칸에는 like가 정답이에요."
          },
          {
            "q": "The flowers around the stage looked ___.",
            "options": [
              "wonderfully",
              "wonderful",
              "wonder",
              "to wonderful"
            ],
            "answer": 1,
            "explain": "look 뒤에는 형용사가 와요. 부사 wonderfully가 아니라 형용사 wonderful이 맞아요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.  This juice tastes ___.  (이 주스는 단맛이 난다.)",
            "answers": [
              "sweet"
            ],
            "explain": "taste 뒤에는 형용사가 와요. '단맛이 난다'는 tastes sweet이에요."
          },
          {
            "q": "괄호 안의 부사를 알맞은 형태(형용사)로 고쳐 쓰세요.  The music sounds (loudly).  →  The music sounds ___.",
            "answers": [
              "loud"
            ],
            "explain": "sound 뒤에는 형용사가 와요. 부사 loudly를 형용사 loud로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.  You look ___ today.  (너는 오늘 행복해 보인다.)",
            "answers": [
              "happy"
            ],
            "explain": "look 뒤에는 형용사가 와요. '행복해 보인다'는 look happy예요."
          },
          {
            "q": "괄호 안의 단어를 알맞은 형태로 고쳐 쓰세요.  The bread smells (freshly).  →  The bread smells ___.",
            "answers": [
              "fresh"
            ],
            "explain": "smell 뒤에는 형용사가 와요. 부사 freshly를 형용사 fresh로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.  This towel feels ___.  (이 수건은 따뜻하게 느껴진다.)",
            "answers": [
              "warm"
            ],
            "explain": "feel 뒤에는 형용사가 와요. '따뜻하게 느껴진다'는 feels warm이에요."
          },
          {
            "q": "괄호 안의 단어를 알맞은 형태로 고쳐 쓰세요.  This lemon tastes (sourly).  →  This lemon tastes ___.",
            "answers": [
              "sour"
            ],
            "explain": "taste 뒤에는 형용사가 와요. 부사 sourly를 형용사 sour로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 두 단어를 쓰세요.  You ___ ___ your father.  (너는 너의 아빠처럼 보인다.)",
            "answers": [
              "look like",
              "looklike"
            ],
            "explain": "'~처럼 보이다'는 뒤에 명사가 오므로 look like를 써요."
          },
          {
            "q": "다음 문장에서 틀린 한 단어를 바르게 고쳐 쓰세요.  He looks tiredly today.  →  He looks ___ today.",
            "answers": [
              "tired"
            ],
            "explain": "look 뒤에는 형용사가 와야 해요. 부사 tiredly를 형용사 tired로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.  The pillow feels ___.  (그 베개는 부드럽게 느껴진다.)",
            "answers": [
              "soft"
            ],
            "explain": "feel 뒤에는 형용사가 와요. '부드럽게 느껴진다'는 feels soft예요."
          },
          {
            "q": "괄호 안의 단어를 알맞은 형태로 고쳐 쓰세요.  Your voice sounds (greatly).  →  Your voice sounds ___.",
            "answers": [
              "great"
            ],
            "explain": "sound 뒤에는 형용사가 와요. 부사 greatly를 형용사 great로 고쳐야 해요."
          }
        ]
      },
      {
        "id": "1-B-U4",
        "unit": 4,
        "title": "동명사",
        "concept": "동사원형+ing인 동명사는 '~하기/~하는 것'으로 해석하며 주어·목적어·보어·전치사의 목적어 자리에 쓰고 enjoy/finish/mind/keep/practice/avoid/give up 뒤에 온다.",
        "mc": [
          {
            "q": "I enjoy ___ games with my friends.",
            "options": [
              "play",
              "plays",
              "playing",
              "to play"
            ],
            "answer": 2,
            "explain": "enjoy 뒤에는 동명사(-ing)를 쓴다. 따라서 playing이 정답이다."
          },
          {
            "q": "He finished ___ his room an hour ago.",
            "options": [
              "clean",
              "cleaning",
              "to clean",
              "cleans"
            ],
            "answer": 1,
            "explain": "finish 뒤에는 동명사를 쓰므로 cleaning이 정답이다."
          },
          {
            "q": "동명사를 만들 때 철자가 바르게 된 것은?",
            "options": [
              "makeing",
              "makking",
              "making",
              "maiking"
            ],
            "answer": 2,
            "explain": "make처럼 -e로 끝나는 동사는 e를 빼고 -ing를 붙인다. make → making."
          },
          {
            "q": "run의 올바른 동명사 형태는?",
            "options": [
              "runing",
              "running",
              "runnning",
              "runeing"
            ],
            "answer": 1,
            "explain": "run은 '단모음+단자음'으로 끝나므로 마지막 자음 n을 하나 더 쓰고 -ing를 붙인다. run → running."
          },
          {
            "q": "She is good at ___ pictures.",
            "options": [
              "draw",
              "draws",
              "drawing",
              "to draw"
            ],
            "answer": 2,
            "explain": "전치사 at 뒤에는 동명사를 쓴다. 따라서 drawing이 정답이다."
          },
          {
            "q": "Do you mind ___ the window?",
            "options": [
              "open",
              "opening",
              "to open",
              "opens"
            ],
            "answer": 1,
            "explain": "mind 뒤에는 동명사를 쓰므로 opening이 정답이다."
          },
          {
            "q": "My hobby is ___ stamps.",
            "options": [
              "collect",
              "collects",
              "collecting",
              "to collect"
            ],
            "answer": 2,
            "explain": "be동사 뒤 보어 자리에 동명사가 올 수 있다. collecting이 정답이다."
          },
          {
            "q": "다음 중 밑줄 친 부분이 어법상 틀린 것은?",
            "options": [
              "I enjoy swimming.",
              "He finished eating.",
              "She avoids to run.",
              "They keep talking."
            ],
            "answer": 2,
            "explain": "avoid 뒤에는 동명사를 써야 한다. to run이 아니라 running이 되어야 하므로 3번이 틀렸다."
          },
          {
            "q": "We practice ___ soccer every weekend.",
            "options": [
              "play",
              "playing",
              "to play",
              "played"
            ],
            "answer": 1,
            "explain": "practice 뒤에는 동명사를 쓰므로 playing이 정답이다."
          },
          {
            "q": "swim의 올바른 동명사 형태는?",
            "options": [
              "swiming",
              "swimming",
              "swimeing",
              "swimmming"
            ],
            "answer": 1,
            "explain": "swim은 '단모음+단자음'으로 끝나므로 m을 하나 더 쓰고 -ing를 붙인다. swim → swimming."
          },
          {
            "q": "___ books is my favorite activity. (독서가 내가 가장 좋아하는 활동이다.)",
            "options": [
              "Read",
              "Reads",
              "Reading",
              "To reads"
            ],
            "answer": 2,
            "explain": "문장의 주어 자리에 동명사가 올 수 있다. Reading이 정답이다."
          },
          {
            "q": "Thank you for ___ me.",
            "options": [
              "help",
              "helps",
              "helping",
              "to help"
            ],
            "answer": 2,
            "explain": "전치사 for 뒤에는 동명사를 쓴다. 따라서 helping이 정답이다."
          },
          {
            "q": "He gave up ___ soda last month.",
            "options": [
              "drink",
              "drinking",
              "to drink",
              "drinks"
            ],
            "answer": 1,
            "explain": "give up 뒤에는 동명사를 쓰므로 drinking이 정답이다."
          },
          {
            "q": "밑줄 친 -ing의 철자가 바르지 않은 것은?",
            "options": [
              "sitting",
              "coming",
              "writing",
              "geting"
            ],
            "answer": 3,
            "explain": "get은 '단모음+단자음'이므로 t를 하나 더 써서 getting이 되어야 한다. geting은 틀린 철자이다."
          },
          {
            "q": "She keeps ___ questions in class.",
            "options": [
              "ask",
              "asks",
              "asking",
              "to ask"
            ],
            "answer": 2,
            "explain": "keep 뒤에는 동명사를 쓰므로 asking이 정답이다."
          },
          {
            "q": "Are you interested in ___ the guitar?",
            "options": [
              "play",
              "playing",
              "to play",
              "plays"
            ],
            "answer": 1,
            "explain": "전치사 in 뒤에는 동명사를 쓴다. 따라서 playing이 정답이다."
          },
          {
            "q": "I finished ___ my homework, so now I can rest.",
            "options": [
              "do",
              "doing",
              "to do",
              "does"
            ],
            "answer": 1,
            "explain": "finish 뒤에는 동명사를 쓰므로 doing이 정답이다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것은? '나는 만화 그리는 것을 즐긴다.'",
            "options": [
              "I enjoy to draw cartoons.",
              "I enjoy drawing cartoons.",
              "I enjoy draw cartoons.",
              "I enjoy drew cartoons."
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사를 쓴다. drawing cartoons가 알맞다."
          },
          {
            "q": "write의 올바른 동명사 형태는?",
            "options": [
              "writeing",
              "writting",
              "writing",
              "writeng"
            ],
            "answer": 2,
            "explain": "write는 -e로 끝나므로 e를 빼고 -ing를 붙인다. write → writing."
          },
          {
            "q": "My sister enjoys ___ photos of flowers.",
            "options": [
              "take",
              "takes",
              "taking",
              "to take"
            ],
            "answer": 2,
            "explain": "enjoy 뒤에는 동명사를 쓴다. take는 -e로 끝나므로 taking이 정답이다."
          },
          {
            "q": "How about ___ a movie tonight?",
            "options": [
              "watch",
              "watching",
              "to watch",
              "watches"
            ],
            "answer": 1,
            "explain": "전치사 about 뒤에는 동명사를 쓴다. 따라서 watching이 정답이다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "I enjoy to read comics.",
              "She finished to cook dinner.",
              "They avoid eating late.",
              "He keeps to run."
            ],
            "answer": 2,
            "explain": "enjoy, finish, avoid, keep 뒤에는 모두 동명사를 쓴다. avoid eating이 유일하게 바른 문장이다."
          },
          {
            "q": "We avoid ___ late at night.",
            "options": [
              "eat",
              "eating",
              "to eat",
              "eats"
            ],
            "answer": 1,
            "explain": "avoid 뒤에는 동명사를 쓰므로 eating이 정답이다."
          },
          {
            "q": "___ every morning is good for your health. (매일 아침 달리기는 건강에 좋다.)",
            "options": [
              "Run",
              "Runs",
              "Running",
              "To running"
            ],
            "answer": 2,
            "explain": "주어 자리에 동명사가 온다. run은 자음을 하나 더 쓰므로 Running이 정답이다."
          },
          {
            "q": "He is afraid of ___ in the dark.",
            "options": [
              "walk",
              "walks",
              "walking",
              "to walk"
            ],
            "answer": 2,
            "explain": "전치사 of 뒤에는 동명사를 쓴다. 따라서 walking이 정답이다."
          },
          {
            "q": "빈칸에 들어갈 말이 나머지와 다른 것은?",
            "options": [
              "I enjoy ___ music.",
              "He finished ___ lunch.",
              "I want ___ some water.",
              "They keep ___ loudly."
            ],
            "answer": 2,
            "explain": "enjoy, finish, keep 뒤에는 동명사(-ing)를 쓰지만 want 뒤에는 to부정사를 쓴다. 3번만 to부정사가 필요하다."
          },
          {
            "q": "Do you enjoy ___ to school by bike?",
            "options": [
              "go",
              "going",
              "to go",
              "goes"
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사를 쓰므로 going이 정답이다."
          },
          {
            "q": "sit의 올바른 동명사 형태는?",
            "options": [
              "siting",
              "sitting",
              "siteing",
              "sittting"
            ],
            "answer": 1,
            "explain": "sit은 '단모음+단자음'으로 끝나므로 t를 하나 더 쓰고 -ing를 붙인다. sit → sitting."
          },
          {
            "q": "She practices ___ the violin every day.",
            "options": [
              "play",
              "plays",
              "playing",
              "to play"
            ],
            "answer": 2,
            "explain": "practice 뒤에는 동명사를 쓰므로 playing이 정답이다."
          },
          {
            "q": "다음 중 -ing 철자가 모두 바른 것은?",
            "options": [
              "makeing, runing",
              "making, running",
              "makking, runnning",
              "making, runing"
            ],
            "answer": 1,
            "explain": "make는 e를 빼고 making, run은 n을 하나 더 써서 running이 된다. 2번이 모두 바르다."
          },
          {
            "q": "My dream is ___ around the world.",
            "options": [
              "travel",
              "traveling",
              "travels",
              "to traveling"
            ],
            "answer": 1,
            "explain": "be동사 뒤 보어 자리에 동명사가 올 수 있다. traveling이 정답이다."
          },
          {
            "q": "They kept ___ even when it started to rain.",
            "options": [
              "walk",
              "walked",
              "walking",
              "to walk"
            ],
            "answer": 2,
            "explain": "keep 뒤에는 동명사를 쓰므로 walking이 정답이다."
          },
          {
            "q": "I'm sorry for ___ late.",
            "options": [
              "be",
              "being",
              "to be",
              "am"
            ],
            "answer": 1,
            "explain": "전치사 for 뒤에는 동명사를 쓴다. be의 동명사는 being이다."
          },
          {
            "q": "Would you mind ___ the door, please?",
            "options": [
              "close",
              "closing",
              "to close",
              "closes"
            ],
            "answer": 1,
            "explain": "mind 뒤에는 동명사를 쓰고 close는 e를 빼고 closing이 된다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것은? '그는 설거지하는 것을 끝냈다.'",
            "options": [
              "He finished to wash the dishes.",
              "He finished washing the dishes.",
              "He finished wash the dishes.",
              "He finish washing the dishes."
            ],
            "answer": 1,
            "explain": "finish 뒤에는 동명사를 쓰고 주어가 He이며 과거이므로 finished washing the dishes가 알맞다."
          },
          {
            "q": "___ is fun, but I am not good at it. (수영은 재미있지만 나는 잘 못한다.)",
            "options": [
              "Swim",
              "Swiming",
              "Swimming",
              "To swim"
            ],
            "answer": 2,
            "explain": "주어 자리에 동명사가 오며 swim은 m을 하나 더 써서 Swimming이 된다."
          },
          {
            "q": "He is proud of ___ first prize.",
            "options": [
              "win",
              "wins",
              "winning",
              "to win"
            ],
            "answer": 2,
            "explain": "전치사 of 뒤에는 동명사를 쓰고 win은 n을 하나 더 써서 winning이 된다."
          },
          {
            "q": "We enjoyed ___ on the beach yesterday.",
            "options": [
              "run",
              "ran",
              "running",
              "to run"
            ],
            "answer": 2,
            "explain": "enjoy 뒤에는 동명사를 쓰고 run은 running이 된다. enjoyed(과거)여도 뒤에는 동명사이다."
          },
          {
            "q": "다음 중 빈칸에 to부정사가 아닌 동명사가 들어가는 것은?",
            "options": [
              "I hope ___ you soon.",
              "She wants ___ a doctor.",
              "They finished ___ dinner.",
              "He decided ___ home."
            ],
            "answer": 2,
            "explain": "hope, want, decide 뒤에는 to부정사를, finish 뒤에는 동명사를 쓴다. 따라서 3번만 동명사(eating/cooking 등)가 들어간다."
          },
          {
            "q": "Lisa gave up ___ the piano because she was too busy.",
            "options": [
              "learn",
              "learns",
              "learning",
              "to learn"
            ],
            "answer": 2,
            "explain": "give up 뒤에는 동명사를 쓰므로 learning이 정답이다."
          }
        ],
        "sa": [
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. I enjoy ___ (draw) cartoons.",
            "answers": [
              "drawing"
            ],
            "explain": "enjoy 뒤에는 동명사를 쓴다. draw → drawing."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. He finished ___ (clean) his room.",
            "answers": [
              "cleaning"
            ],
            "explain": "finish 뒤에는 동명사를 쓴다. clean → cleaning."
          },
          {
            "q": "동명사 철자 규칙에 맞게 쓰세요. make의 동명사 형태는?",
            "answers": [
              "making"
            ],
            "explain": "-e로 끝나는 동사는 e를 빼고 -ing를 붙인다. make → making."
          },
          {
            "q": "동명사 철자 규칙에 맞게 쓰세요. run의 동명사 형태는?",
            "answers": [
              "running"
            ],
            "explain": "'단모음+단자음'으로 끝나면 자음을 하나 더 쓰고 -ing를 붙인다. run → running."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. She is good at ___ (swim).",
            "answers": [
              "swimming"
            ],
            "explain": "전치사 at 뒤에는 동명사를 쓰고 swim은 m을 하나 더 써서 swimming이 된다."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. Thank you for ___ (help) me.",
            "answers": [
              "helping"
            ],
            "explain": "전치사 for 뒤에는 동명사를 쓴다. help → helping."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. They keep ___ (talk) in class.",
            "answers": [
              "talking"
            ],
            "explain": "keep 뒤에는 동명사를 쓴다. talk → talking."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. My hobby is ___ (write) stories.",
            "answers": [
              "writing"
            ],
            "explain": "보어 자리에 동명사가 오고 write는 e를 빼고 writing이 된다."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. We avoid ___ (sit) too long.",
            "answers": [
              "sitting"
            ],
            "explain": "avoid 뒤에는 동명사를 쓰고 sit은 t를 하나 더 써서 sitting이 된다."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. He practices ___ (play) the piano every day.",
            "answers": [
              "playing"
            ],
            "explain": "practice 뒤에는 동명사를 쓴다. play → playing."
          }
        ]
      },
      {
        "id": "1-B-U5",
        "unit": 5,
        "title": "비교급",
        "concept": "짧은 단어는 -er, 긴 단어는 more를 붙이고 그 뒤에 than을 써서 'A는 B보다 더 ~하다'를 나타낸다.",
        "mc": [
          {
            "q": "This tree is ______ than that tree. (빈칸에 알맞은 것은?)",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "answer": 1,
            "explain": "짧은 단어 tall은 -er을 붙여 taller로 만들고 than 앞에 씁니다."
          },
          {
            "q": "This shirt is ______ than that one. (이 셔츠가 저것보다 더 싸다.)",
            "options": [
              "cheap",
              "cheapest",
              "cheaper",
              "more cheap"
            ],
            "answer": 2,
            "explain": "cheap은 짧은 단어이므로 cheaper로 만듭니다."
          },
          {
            "q": "This test is ______ than the last one. (이번 시험이 더 어렵다.)",
            "options": [
              "difficulter",
              "more difficult",
              "difficultest",
              "most difficult"
            ],
            "answer": 1,
            "explain": "difficult은 긴 단어이므로 앞에 more를 붙여 more difficult로 씁니다."
          },
          {
            "q": "Today's weather is ______ than yesterday's. (오늘 날씨가 더 나쁘다.)",
            "options": [
              "badder",
              "more bad",
              "worse",
              "worst"
            ],
            "answer": 2,
            "explain": "bad의 비교급은 불규칙 형태인 worse입니다."
          },
          {
            "q": "I have ______ books than you. (나는 너보다 더 많은 책을 가지고 있다.)",
            "options": [
              "many",
              "manyer",
              "more",
              "much"
            ],
            "answer": 2,
            "explain": "many의 비교급은 불규칙 형태인 more입니다."
          },
          {
            "q": "Her English is ______ than my English. (그녀의 영어가 더 잘한다/좋다.)",
            "options": [
              "gooder",
              "more good",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "good의 비교급은 불규칙 형태인 better입니다."
          },
          {
            "q": "This flower is ______ than that one. (이 꽃이 더 예쁘다.)",
            "options": [
              "prettier",
              "prettyer",
              "more pretty",
              "prettiest"
            ],
            "answer": 0,
            "explain": "「자음+y」로 끝나는 pretty는 y를 i로 바꾸고 -er을 붙여 prettier가 됩니다."
          },
          {
            "q": "My bag is ______ than your bag. (내 가방이 더 크다.)",
            "options": [
              "biger",
              "bigger",
              "more big",
              "biggest"
            ],
            "answer": 1,
            "explain": "big은 「단모음+단자음」이므로 g를 한 번 더 쓰고 -er을 붙여 bigger가 됩니다."
          },
          {
            "q": "This puzzle is ______ than that puzzle. (이 퍼즐이 더 어렵다/딱딱하다.)",
            "options": [
              "hardest",
              "more hard",
              "harder",
              "hardder"
            ],
            "answer": 2,
            "explain": "hard는 짧은 단어이므로 harder로 만듭니다."
          },
          {
            "q": "다음 중 비교급이 바르게 만들어진 것은?",
            "options": [
              "more tall",
              "expensiver",
              "faster",
              "gooder"
            ],
            "answer": 2,
            "explain": "fast는 짧은 단어라 faster가 맞습니다. tall→taller, expensive→more expensive, good→better."
          },
          {
            "q": "다음 중 비교급 형태가 틀린 것은?",
            "options": [
              "easier",
              "happier",
              "bigger",
              "beautifuler"
            ],
            "answer": 3,
            "explain": "beautiful은 긴 단어이므로 more beautiful로 써야 합니다."
          },
          {
            "q": "The blue whale is ______ than the elephant. (파란고래가 더 무겁다.)",
            "options": [
              "heavier",
              "heavyer",
              "more heavy",
              "heaviest"
            ],
            "answer": 0,
            "explain": "「자음+y」로 끝나는 heavy는 y를 i로 바꿔 heavier가 됩니다."
          },
          {
            "q": "This lake is ______ than that pond. (이 호수가 더 깊다.)",
            "options": [
              "deepest",
              "deeper",
              "more deep",
              "deepper"
            ],
            "answer": 1,
            "explain": "deep은 짧은 단어이므로 deeper로 만듭니다."
          },
          {
            "q": "Jane is ______ today than yesterday. (제인은 오늘 더 바쁘다.)",
            "options": [
              "busyer",
              "more busy",
              "busier",
              "busiest"
            ],
            "answer": 2,
            "explain": "「자음+y」로 끝나는 busy는 y를 i로 바꿔 busier가 됩니다."
          },
          {
            "q": "than은 문장에서 어디에 오나요? (비교급의 어순)",
            "options": [
              "비교급 앞에",
              "비교급 바로 뒤에",
              "주어 앞에",
              "문장 맨 앞에"
            ],
            "answer": 1,
            "explain": "'비교급 + than + 비교 대상'의 순서로, than은 비교급 바로 뒤에 옵니다."
          },
          {
            "q": "빈칸에 알맞은 말은? He runs ______ ______ me. (그는 나보다 더 빨리 달린다.)",
            "options": [
              "fast / than",
              "faster / than",
              "than / faster",
              "more fast / than"
            ],
            "answer": 1,
            "explain": "짧은 단어 fast는 faster로 만들고 그 뒤에 than을 씁니다."
          },
          {
            "q": "다음 문장에서 틀린 부분은? This book is more easy than that one.",
            "options": [
              "This book",
              "more easy",
              "than",
              "that one"
            ],
            "answer": 1,
            "explain": "easy는 「자음+y」이므로 more easy가 아니라 easier로 써야 합니다."
          },
          {
            "q": "다음 문장에서 틀린 부분은? My car is expensiver than his car.",
            "options": [
              "My car",
              "expensiver",
              "than",
              "his car"
            ],
            "answer": 1,
            "explain": "expensive는 긴 단어이므로 expensiver가 아니라 more expensive로 써야 합니다."
          },
          {
            "q": "Which is ______, the Han River or this street? (어느 것이 더 긴가요?)",
            "options": [
              "long",
              "longer",
              "longest",
              "more long"
            ],
            "answer": 1,
            "explain": "long은 짧은 단어이므로 longer로 만듭니다."
          },
          {
            "q": "My cousin is ______ than me. (내 사촌이 나보다 나이가 더 많다.)",
            "options": [
              "old",
              "more old",
              "older",
              "oldest"
            ],
            "answer": 2,
            "explain": "old는 짧은 단어이므로 older로 만듭니다."
          },
          {
            "q": "I think a phone is ______ than a watch. (전화기가 더 유용하다.)",
            "options": [
              "usefuler",
              "more useful",
              "usefuller",
              "most useful"
            ],
            "answer": 1,
            "explain": "useful은 긴 단어이므로 more useful로 씁니다."
          },
          {
            "q": "This box is ______ than that box. (이 상자가 더 가볍다.)",
            "options": [
              "light",
              "lighter",
              "more light",
              "lightest"
            ],
            "answer": 1,
            "explain": "light는 짧은 단어이므로 lighter로 만듭니다."
          },
          {
            "q": "My mom cooks ______ than me. (엄마가 나보다 요리를 더 잘하신다.)",
            "options": [
              "gooder",
              "weller",
              "better",
              "more good"
            ],
            "answer": 2,
            "explain": "부사 well의 비교급도 불규칙 형태인 better입니다."
          },
          {
            "q": "Seoul is ______ than my town. (서울이 우리 동네보다 더 크다.)",
            "options": [
              "biger",
              "more big",
              "bigger",
              "biggest"
            ],
            "answer": 2,
            "explain": "big은 마지막 자음을 한 번 더 쓰고 -er을 붙여 bigger가 됩니다."
          },
          {
            "q": "Yuna is 160cm, Sora is 158cm. → Yuna is ______ than Sora.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "answer": 1,
            "explain": "키가 더 큰 것을 나타내려면 tall의 비교급 taller를 씁니다."
          },
          {
            "q": "Today is 30°C, yesterday was 25°C. → Today is ______ than yesterday.",
            "options": [
              "hoter",
              "hotter",
              "more hot",
              "hottest"
            ],
            "answer": 1,
            "explain": "hot은 「단모음+단자음」이므로 t를 한 번 더 쓰고 -er을 붙여 hotter가 됩니다."
          },
          {
            "q": "My dog is 3, your dog is 5. → My dog is ______ than your dog.",
            "options": [
              "young",
              "more young",
              "younger",
              "youngest"
            ],
            "answer": 2,
            "explain": "young은 짧은 단어이므로 younger로 만듭니다."
          },
          {
            "q": "This story is ______ than that story. (이 이야기가 더 재미있다.)",
            "options": [
              "interestinger",
              "more interesting",
              "interesting",
              "most interesting"
            ],
            "answer": 1,
            "explain": "interesting은 긴 단어이므로 more interesting으로 씁니다."
          },
          {
            "q": "Winter in Seoul is ______ than winter in Busan. (서울의 겨울이 더 춥다.)",
            "options": [
              "cold",
              "colder",
              "more cold",
              "coldest"
            ],
            "answer": 1,
            "explain": "cold는 짧은 단어이므로 colder로 만듭니다."
          },
          {
            "q": "다음 중 more를 사용해 비교급을 만드는 단어는?",
            "options": [
              "fast",
              "tall",
              "famous",
              "big"
            ],
            "answer": 2,
            "explain": "famous는 긴 단어이므로 more famous로 만듭니다. 나머지는 -er을 붙입니다."
          },
          {
            "q": "다음 중 -er을 붙여 비교급을 만드는 단어는?",
            "options": [
              "difficult",
              "beautiful",
              "cheap",
              "useful"
            ],
            "answer": 2,
            "explain": "cheap은 짧은 단어라 cheaper가 됩니다. 나머지는 긴 단어라 more를 씁니다."
          },
          {
            "q": "단어를 바르게 배열한 것은? ( than / faster / he / runs / me )",
            "options": [
              "He runs than faster me.",
              "He faster runs than me.",
              "He runs faster than me.",
              "Faster he runs than me."
            ],
            "answer": 2,
            "explain": "'주어+동사+비교급+than+비교 대상' 순서로 He runs faster than me."
          },
          {
            "q": "단어를 바르게 배열한 것은? ( is / than / this / bigger / bag / that / one )",
            "options": [
              "This bag bigger is than that one.",
              "This bag is bigger than that one.",
              "This bag is than bigger that one.",
              "Bigger this bag is than that one."
            ],
            "answer": 1,
            "explain": "'This bag is bigger than that one.'이 올바른 어순입니다."
          },
          {
            "q": "단어를 바르게 배열한 것은? ( more / this / is / difficult / book / that / than / one )",
            "options": [
              "This book is more difficult than that one.",
              "This book more is difficult than that one.",
              "This book is difficult more than that one.",
              "This book is more than difficult that one."
            ],
            "answer": 0,
            "explain": "긴 단어는 'is more difficult than' 순서로 씁니다."
          },
          {
            "q": "City Zoo is ______ than Green Zoo, so it has more animals. (더 크다: large)",
            "options": [
              "larger",
              "largeer",
              "more large",
              "largest"
            ],
            "answer": 0,
            "explain": "-e로 끝나는 large는 -r만 붙여 larger가 됩니다."
          },
          {
            "q": "The cheetah runs ______ than any other animal. (더 빠르게)",
            "options": [
              "fast",
              "more fast",
              "faster",
              "fastest"
            ],
            "answer": 2,
            "explain": "fast는 짧은 단어이므로 faster로 만듭니다."
          },
          {
            "q": "다음 중 문장이 어법상 옳은 것은?",
            "options": [
              "My room is more small than yours.",
              "My room is smaller than yours.",
              "My room is smaller then yours.",
              "My room is small than yours."
            ],
            "answer": 1,
            "explain": "small→smaller, 비교의 than은 then이 아니라 than입니다."
          },
          {
            "q": "다음 중 문장이 어법상 옳은 것은?",
            "options": [
              "This is more good than that.",
              "This is gooder than that.",
              "This is better than that.",
              "This is best than that."
            ],
            "answer": 2,
            "explain": "good의 비교급은 better입니다."
          },
          {
            "q": "My sister is ______ than me. (나의 언니는 나보다 더 부지런하다: diligent)",
            "options": [
              "diligenter",
              "more diligent",
              "most diligent",
              "diligentest"
            ],
            "answer": 1,
            "explain": "diligent은 긴 단어이므로 more diligent으로 씁니다."
          },
          {
            "q": "This problem is ______ than that problem. (이 문제가 더 쉽다: easy)",
            "options": [
              "easyer",
              "more easy",
              "easier",
              "easiest"
            ],
            "answer": 2,
            "explain": "「자음+y」로 끝나는 easy는 y를 i로 바꿔 easier가 됩니다."
          }
        ],
        "sa": [
          {
            "q": "big의 비교급을 쓰세요. (한 단어)",
            "answers": [
              "bigger"
            ],
            "explain": "big은 마지막 자음 g를 한 번 더 쓰고 -er을 붙여 bigger가 됩니다."
          },
          {
            "q": "good의 비교급을 쓰세요. (한 단어)",
            "answers": [
              "better"
            ],
            "explain": "good은 불규칙 비교급으로 better가 됩니다."
          },
          {
            "q": "easy의 비교급을 쓰세요. (한 단어)",
            "answers": [
              "easier"
            ],
            "explain": "「자음+y」로 끝나는 easy는 y를 i로 바꿔 easier가 됩니다."
          },
          {
            "q": "beautiful의 비교급을 쓰세요. (두 단어)",
            "answers": [
              "more beautiful"
            ],
            "explain": "beautiful은 긴 단어이므로 more beautiful로 씁니다."
          },
          {
            "q": "bad의 비교급을 쓰세요. (한 단어)",
            "answers": [
              "worse"
            ],
            "explain": "bad는 불규칙 비교급으로 worse가 됩니다."
          },
          {
            "q": "My brother is ______ than me. (내 남동생은 나보다 키가 더 크다. tall을 알맞게 고쳐 쓰세요.)",
            "answers": [
              "taller"
            ],
            "explain": "tall은 짧은 단어이므로 taller로 만듭니다."
          },
          {
            "q": "Spring is ______ than winter. (봄이 겨울보다 더 따뜻하다. warm을 알맞게 고쳐 쓰세요.)",
            "answers": [
              "warmer"
            ],
            "explain": "warm은 짧은 단어이므로 warmer로 만듭니다."
          },
          {
            "q": "many의 비교급을 쓰세요. (한 단어)",
            "answers": [
              "more"
            ],
            "explain": "many의 비교급은 불규칙 형태인 more입니다."
          },
          {
            "q": "This box is 2kg, that box is 5kg. → That box is ______ than this box. (heavy를 알맞게 고쳐 쓰세요.)",
            "answers": [
              "heavier"
            ],
            "explain": "「자음+y」로 끝나는 heavy는 y를 i로 바꿔 heavier가 됩니다."
          },
          {
            "q": "This cake is 5,000 won, that cake is 7,000 won. → That cake is ______ ______ than this one. (expensive를 알맞게 고쳐 쓰세요. 두 단어)",
            "answers": [
              "more expensive"
            ],
            "explain": "expensive는 긴 단어이므로 more expensive로 씁니다."
          }
        ]
      },
      {
        "id": "1-B-U6",
        "unit": 6,
        "title": "접속사 when",
        "concept": "「when + 주어 + 동사」는 '~할 때'라는 뜻이며, when절이 문장 앞에 오면 그 뒤에 콤마(,)를 쓴다.",
        "mc": [
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI wear a coat ___ it is cold.",
            "options": [
              "when",
              "what",
              "who",
              "where"
            ],
            "answer": 0,
            "explain": "'추울 때'라는 시간의 뜻이므로 접속사 when이 알맞습니다. 「when + 주어 + 동사」로 '~할 때'를 나타냅니다."
          },
          {
            "q": "밑줄 친 when의 뜻이 나머지와 다른 것은?",
            "options": [
              "When did you come?",
              "I read comics when I am free.",
              "He smiles when he sees her.",
              "We stop talking when the movie starts."
            ],
            "answer": 0,
            "explain": "①의 when은 '언제'라는 뜻의 의문사이고, 나머지는 모두 '~할 때'라는 뜻의 접속사입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ it rains, I stay home.",
            "options": [
              "When",
              "What",
              "Which",
              "How"
            ],
            "answer": 0,
            "explain": "'비가 올 때'라는 뜻이므로 접속사 When이 알맞습니다. When절이 앞에 오면 뒤에 콤마를 씁니다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 바르게 연결한 것은?\nHe feels tired. + He takes a rest.",
            "options": [
              "He takes a rest when he feels tired.",
              "He takes a rest when he feel tired.",
              "He takes a rest what he feels tired.",
              "He takes rest when he feels tired he."
            ],
            "answer": 0,
            "explain": "'그는 피곤할 때 쉰다'는 뜻입니다. when 뒤에는 주어(he)와 동사(feels)가 옵니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the bell rings___ children laugh.",
            "options": [
              ",",
              ".",
              "?",
              "!"
            ],
            "answer": 0,
            "explain": "when절이 문장 앞에 왔으므로 when절이 끝나는 자리에 콤마(,)를 씁니다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것은?\n종이 울릴 때, 우리는 나간다.\n___ the bell rings, we go out.",
            "options": [
              "When",
              "Where",
              "What",
              "Why"
            ],
            "answer": 0,
            "explain": "'~할 때'는 접속사 When으로 나타냅니다."
          },
          {
            "q": "어법상 어색한 것은?",
            "options": [
              "When I was young I liked candy.",
              "When it snows, children make a snowman.",
              "I wash my hands when I get home.",
              "We wash the dishes when we finish dinner."
            ],
            "answer": 0,
            "explain": "when절이 문장 앞에 오면 그 뒤에 콤마가 필요합니다. → When I was young, I liked candy."
          },
          {
            "q": "빈칸에 공통으로 알맞은 말을 고르세요.\n· I feel excited ___ I play soccer.\n· ___ she arrives, we will start.",
            "options": [
              "when / When",
              "what / What",
              "who / Who",
              "why / Why"
            ],
            "answer": 0,
            "explain": "두 문장 모두 '~할 때'라는 뜻의 접속사 when이 필요합니다. 문장 맨 앞에 올 때는 첫 글자를 대문자로 씁니다."
          },
          {
            "q": "다음 중 올바른 문장은?",
            "options": [
              "When it snows, children make a snowman.",
              "When it snows children make a snowman.",
              "When, it snows children make a snowman.",
              "It snows when, children make a snowman."
            ],
            "answer": 0,
            "explain": "when절이 앞에 오면 그 절이 끝난 뒤에 콤마를 한 번만 씁니다."
          },
          {
            "q": "밑줄 친 부분이 의문사 when으로 쓰인 것은?",
            "options": [
              "When do you feel sleepy?",
              "I feel sleepy when I eat too much.",
              "She sings when she is happy.",
              "When it rains, we play inside."
            ],
            "answer": 0,
            "explain": "①은 '언제'라고 묻는 의문사 when입니다. 나머지는 '~할 때'라는 접속사입니다."
          },
          {
            "q": "빈칸에 알맞은 동사 형태를 고르세요.\nWhen she ___ home, her dog barks.",
            "options": [
              "arrives",
              "arrive",
              "arriving",
              "to arrive"
            ],
            "answer": 0,
            "explain": "주어 she가 3인칭 단수이고 현재의 반복적인 일이므로 arrives가 알맞습니다."
          },
          {
            "q": "다음 두 문장을 when으로 연결할 때 알맞은 것은?\nIt snows. + Children make a snowman.",
            "options": [
              "Children make a snowman when it snows.",
              "Children make a snowman when it snow.",
              "When it snows children make a snowman.",
              "It snows children make a snowman when."
            ],
            "answer": 0,
            "explain": "'눈이 올 때 아이들은 눈사람을 만든다'는 뜻입니다. it은 3인칭 단수이므로 snows가 됩니다."
          },
          {
            "q": "우리말을 영어로 바르게 옮긴 것은?\n내가 집에 오면, 나는 손을 씻는다.",
            "options": [
              "When I get home, I wash my hands.",
              "When I get home I wash my hands.",
              "I get home when I wash my hands.",
              "When do I get home, I wash my hands."
            ],
            "answer": 0,
            "explain": "when절이 앞에 왔으므로 뒤에 콤마가 필요합니다. 순서와 의미도 자연스러운 ①이 정답입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe stop talking ___ the movie starts.",
            "options": [
              "when",
              "when do",
              "what",
              "which"
            ],
            "answer": 0,
            "explain": "'영화가 시작될 때'라는 뜻이므로 접속사 when이 알맞습니다."
          },
          {
            "q": "다음 문장에서 콤마(,)가 들어갈 위치로 알맞은 곳은?\nWhen ⓐ the weather ⓑ is warm ⓒ I ⓓ play outside.",
            "options": [
              "ⓒ",
              "ⓐ",
              "ⓑ",
              "ⓓ"
            ],
            "answer": 0,
            "explain": "when절(When the weather is warm)이 끝나는 자리, 즉 warm 다음(ⓒ 앞)에 콤마를 씁니다."
          },
          {
            "q": "밑줄 친 when의 쓰임이 나머지와 다른 것은?",
            "options": [
              "When is your birthday?",
              "I am happy when I sing.",
              "When he is angry, he says nothing.",
              "She reads books when she has time."
            ],
            "answer": 0,
            "explain": "①은 '언제'라는 의문사이고, 나머지는 '~할 때'라는 접속사입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ we finish our homework, we watch TV.",
            "options": [
              "When",
              "What",
              "That",
              "Who"
            ],
            "answer": 0,
            "explain": "'숙제를 끝낼 때'라는 뜻이므로 접속사 When이 알맞습니다."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "When I have time, I read books.",
              "When I have time I, read books.",
              "When, I have time I read books.",
              "I read books when, I have time."
            ],
            "answer": 0,
            "explain": "when절이 앞에 올 때는 그 절 뒤(time 다음)에 콤마를 씁니다."
          },
          {
            "q": "우리말과 같도록 빈칸을 완성할 때 알맞은 것은?\n그가 다섯 살이었을 때, 그는 피아노를 배웠다.\nWhen he ___ five, he learned the piano.",
            "options": [
              "was",
              "is",
              "were",
              "be"
            ],
            "answer": 0,
            "explain": "과거의 일이고 주어 he가 단수이므로 was가 알맞습니다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것은?\nA: ___ do you listen to music?\nB: I listen to music when I feel sad.",
            "options": [
              "When",
              "What",
              "Which",
              "Whose"
            ],
            "answer": 0,
            "explain": "'언제 음악을 듣니?'라고 묻는 의문사 When이 알맞습니다. B의 when은 접속사입니다."
          },
          {
            "q": "다음 두 문장을 when으로 연결한 것으로 알맞은 것은?\nI am free. + I read comics.",
            "options": [
              "I read comics when I am free.",
              "I read comics when I free.",
              "I read comics what I am free.",
              "When I am free I read comics."
            ],
            "answer": 0,
            "explain": "'한가할 때 만화를 읽는다'는 뜻입니다. when 뒤에는 「주어+동사」가 오고, when절을 뒤에 두면 콤마가 필요 없습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the sun sets___ the sky turns red.",
            "options": [
              ",",
              "?",
              "!",
              "and"
            ],
            "answer": 0,
            "explain": "when절이 문장 앞에 왔으므로 그 뒤에 콤마(,)를 씁니다."
          },
          {
            "q": "다음 중 뜻이 자연스러운 문장은?",
            "options": [
              "I try again when I make a mistake.",
              "I make a mistake when I try again.",
              "When I try again, I make a mistake often.",
              "I mistake make when I try again."
            ],
            "answer": 0,
            "explain": "'실수를 할 때 다시 시도한다'가 자연스럽습니다."
          },
          {
            "q": "우리말을 영어로 바르게 옮긴 것은?\n내가 학교에 갈 때, 나는 버스를 탄다.",
            "options": [
              "When I go to school, I take the bus.",
              "When I go to school I take the bus.",
              "I go to school when I take the bus.",
              "When do I go to school, I take the bus."
            ],
            "answer": 0,
            "explain": "when절이 앞에 왔으므로 콤마가 필요하고, 의미도 자연스러운 ①이 정답입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nEveryone becomes quiet ___ she sings.",
            "options": [
              "when",
              "who",
              "where",
              "what"
            ],
            "answer": 0,
            "explain": "'그녀가 노래할 때'라는 뜻이므로 접속사 when이 알맞습니다."
          },
          {
            "q": "다음 문장을 when절이 앞에 오도록 바꾼 것으로 알맞은 것은?\nWe wear coats when it is cold.",
            "options": [
              "When it is cold, we wear coats.",
              "When it is cold we wear coats.",
              "When we wear coats, it is cold.",
              "When is it cold, we wear coats."
            ],
            "answer": 0,
            "explain": "when절을 앞으로 옮기면 그 뒤에 콤마를 써야 합니다. 뜻은 그대로 '추울 때 우리는 코트를 입는다'입니다."
          },
          {
            "q": "빈칸에 알맞은 동사 형태를 고르세요.\nWhen I ___ young, I liked candy.",
            "options": [
              "was",
              "am",
              "is",
              "were"
            ],
            "answer": 0,
            "explain": "과거의 일이고 주어 I이므로 was가 알맞습니다."
          },
          {
            "q": "밑줄 친 when이 '언제'라는 뜻으로 쓰인 것은?",
            "options": [
              "When did you go to Jeju?",
              "I went to Jeju when I was ten.",
              "She smiles when she sees her friends.",
              "When lunch time came, we ate together."
            ],
            "answer": 0,
            "explain": "①은 '언제 제주에 갔니?'로 묻는 의문사 when입니다."
          },
          {
            "q": "다음 중 어색한 문장은?",
            "options": [
              "When she arrives we will start the party.",
              "When she arrives, we will start the party.",
              "We will start the party when she arrives.",
              "She arrives, and we start the party."
            ],
            "answer": 0,
            "explain": "when절이 앞에 왔으므로 arrives 다음에 콤마가 필요합니다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( when / rings / the bell / we / go out )",
            "options": [
              "When the bell rings, we go out.",
              "When rings the bell, we go out.",
              "The bell when rings, we go out.",
              "We go out the bell when rings."
            ],
            "answer": 0,
            "explain": "「When + 주어(the bell) + 동사(rings)」 다음에 콤마, 그리고 주절(we go out)이 옵니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI eat lunch fast ___ I am busy.",
            "options": [
              "when",
              "what",
              "why",
              "who"
            ],
            "answer": 0,
            "explain": "'바쁠 때'라는 뜻이므로 접속사 when이 알맞습니다."
          },
          {
            "q": "우리말을 영어로 바르게 옮긴 것은?\n방학이 시작될 때, 우리는 여행을 간다.",
            "options": [
              "When vacation starts, we go on a trip.",
              "When vacation start, we go on a trip.",
              "When vacation starts we go on a trip.",
              "Vacation starts when we go on a trip."
            ],
            "answer": 0,
            "explain": "vacation은 3인칭 단수이므로 starts, when절이 앞에 오므로 콤마가 필요합니다."
          },
          {
            "q": "다음 대화의 빈칸에 공통으로 알맞은 것은?\nA: ___ do you help your mom?\nB: I help my mom ___ she cooks.",
            "options": [
              "When",
              "What",
              "Where",
              "Which"
            ],
            "answer": 0,
            "explain": "A의 When은 '언제'라는 의문사, B의 when은 '~할 때'라는 접속사로, 형태는 같습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ they were young, they played at the playground every day.",
            "options": [
              "When",
              "What",
              "That",
              "Who"
            ],
            "answer": 0,
            "explain": "'그들이 어렸을 때'라는 뜻이므로 접속사 When이 알맞습니다. 앞에 왔으므로 뒤에 콤마가 있습니다."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 것은?",
            "options": [
              "When it rain, we play inside.",
              "When it rains, we play inside.",
              "We play inside when it rains.",
              "When the weather is warm, I play outside."
            ],
            "answer": 0,
            "explain": "it은 3인칭 단수이므로 rain이 아니라 rains가 되어야 합니다."
          },
          {
            "q": "다음 문장에서 when의 역할로 알맞은 것은?\nI laughed a lot when we shared funny stories.",
            "options": [
              "'~할 때'라는 뜻의 접속사",
              "'언제'라는 뜻의 의문사",
              "'무엇'이라는 뜻의 의문사",
              "'어디'라는 뜻의 접속사"
            ],
            "answer": 0,
            "explain": "두 문장을 이어주며 '~할 때'라는 뜻을 나타내는 접속사입니다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것은?\n해가 졌을 때, 우리는 모두 집으로 걸어갔다.\n___ the sun went down, we all walked home.",
            "options": [
              "When",
              "What",
              "Where",
              "Who"
            ],
            "answer": 0,
            "explain": "'해가 졌을 때'라는 뜻이므로 접속사 When이 알맞고, 뒤에 콤마가 있습니다."
          },
          {
            "q": "다음 두 문장을 when으로 연결한 것으로 알맞은 것은?\nShe was seven. + She learned to swim.",
            "options": [
              "She learned to swim when she was seven.",
              "She learned to swim when she is seven.",
              "She learned to swim what she was seven.",
              "When she was seven she learned to swim."
            ],
            "answer": 0,
            "explain": "과거 시제(was)에 맞추고, when절을 뒤에 두면 콤마가 필요 없습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen I woke up___ it was raining.",
            "options": [
              ",",
              ".",
              "?",
              "and"
            ],
            "answer": 0,
            "explain": "when절(When I woke up)이 문장 앞에 왔으므로 그 뒤에 콤마(,)를 씁니다."
          },
          {
            "q": "다음 중 우리말 해석이 바르지 않은 것은?",
            "options": [
              "When is the party? → 파티할 때 나는 간다.",
              "I sing when I am happy. → 나는 행복할 때 노래한다.",
              "When it snows, we ski. → 눈이 올 때, 우리는 스키를 탄다.",
              "He rests when he is tired. → 그는 피곤할 때 쉰다."
            ],
            "answer": 0,
            "explain": "①의 when은 '언제'라는 의문사이므로 '파티가 언제니?'라고 해석해야 합니다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 접속사를 쓰세요. (한 단어)\nI wear a coat ___ it is cold. (추울 때)",
            "answers": [
              "when"
            ],
            "explain": "'~할 때'라는 뜻의 접속사 when이 알맞습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. 문장 맨 앞이므로 대문자로 시작하세요. (한 단어)\n___ it rains, I stay home. (비가 올 때)",
            "answers": [
              "When"
            ],
            "explain": "문장 맨 앞에 오는 접속사이므로 첫 글자를 대문자로 써서 When이 됩니다."
          },
          {
            "q": "빈칸에 알맞은 문장 부호를 쓰세요.\nWhen the bell rings___ children laugh.",
            "answers": [
              ","
            ],
            "explain": "when절이 문장 앞에 왔으므로 그 뒤에 콤마(,)를 씁니다."
          },
          {
            "q": "빈칸에 알맞은 동사를 보기에서 골라 알맞은 형태로 쓰세요. [ arrive ] (한 단어)\nWhen she ___ home, her dog barks.",
            "answers": [
              "arrives"
            ],
            "explain": "주어 she가 3인칭 단수이고 현재이므로 arrives가 됩니다."
          },
          {
            "q": "밑줄 친 when이 '접속사'이면 C, '의문사'이면 Q를 쓰세요.\nWhen do you feel sleepy?",
            "answers": [
              "Q",
              "q"
            ],
            "explain": "'언제 졸리니?'라고 묻는 의문사 when이므로 Q입니다."
          },
          {
            "q": "괄호 안의 동사를 알맞은 형태로 쓰세요. (한 단어)\nWhen I ___ young, I liked candy. (be)",
            "answers": [
              "was"
            ],
            "explain": "과거의 일이고 주어가 I이므로 be동사의 과거형 was를 씁니다."
          },
          {
            "q": "빈칸에 알맞은 접속사를 쓰세요. (한 단어)\nEveryone becomes quiet ___ she sings.",
            "answers": [
              "when"
            ],
            "explain": "'그녀가 노래할 때'라는 뜻이므로 접속사 when이 알맞습니다."
          },
          {
            "q": "괄호 안의 동사를 알맞은 형태로 쓰세요. (한 단어)\nWhen it ___, we play inside. (rain)",
            "answers": [
              "rains"
            ],
            "explain": "it은 3인칭 단수이므로 rains가 됩니다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. 문장 맨 앞이므로 대문자로 시작하세요. (한 단어)\n___ vacation starts, we go on a trip. (방학이 시작될 때)",
            "answers": [
              "When"
            ],
            "explain": "문장 맨 앞에 오는 접속사이므로 대문자 When으로 씁니다."
          },
          {
            "q": "밑줄 친 when이 '접속사'이면 C, '의문사'이면 Q를 쓰세요.\nI went to Jeju when I was ten.",
            "answers": [
              "C",
              "c"
            ],
            "explain": "'~했을 때'라는 뜻으로 두 문장을 이어주는 접속사이므로 C입니다."
          }
        ]
      },
      {
        "id": "1-B-U7",
        "unit": 7,
        "title": "수여동사",
        "concept": "수여동사는 '동사 + 사람(간접목적어) + 사물(직접목적어)' 순서로 '~에게 ~을 ~해주다'라고 해석하며, 3형식으로 바꿀 때 give/send/show/teach 등은 to를, buy/make/cook/get 등은 for를 쓴다.",
        "mc": [
          {
            "q": "다음 중 어순이 바르게 배열된 문장을 고르세요.\nHe gave ______.",
            "options": [
              "a book me",
              "me a book",
              "to me a book",
              "a book to me a book"
            ],
            "answer": 1,
            "explain": "수여동사는 '동사 + 사람(me) + 사물(a book)' 순서예요. 4형식에서는 사람이 사물보다 먼저 와요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy mom made ______ a nice sweater.",
            "options": [
              "for me",
              "to me",
              "me",
              "of me"
            ],
            "answer": 2,
            "explain": "4형식은 '동사 + 사람 + 사물'이므로 사람 앞에 전치사를 쓰지 않아요. made me a sweater."
          },
          {
            "q": "다음 문장을 3형식으로 바르게 바꾼 것을 고르세요.\nShe gave me a present.",
            "options": [
              "She gave a present me.",
              "She gave a present to me.",
              "She gave a present for me.",
              "She gave to me a present."
            ],
            "answer": 1,
            "explain": "give는 3형식으로 바꿀 때 전치사 to를 써요. give me a present = give a present to me."
          },
          {
            "q": "다음 문장을 3형식으로 바르게 바꾼 것을 고르세요.\nDad bought me a laptop.",
            "options": [
              "Dad bought a laptop to me.",
              "Dad bought a laptop for me.",
              "Dad bought a laptop me.",
              "Dad bought for me a laptop."
            ],
            "answer": 1,
            "explain": "buy는 3형식으로 바꿀 때 전치사 for를 써요. buy me a laptop = buy a laptop for me."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nHe sent a package ______ us.",
            "options": [
              "for",
              "of",
              "to",
              "at"
            ],
            "answer": 2,
            "explain": "send는 3형식에서 to를 써요. send us a package = send a package to us."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nGrandma made rice cakes ______ us.",
            "options": [
              "to",
              "for",
              "with",
              "on"
            ],
            "answer": 1,
            "explain": "make는 3형식에서 for를 써요. make us rice cakes = make rice cakes for us."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 것을 고르세요.",
            "options": [
              "She showed me her report card.",
              "I gave him my phone number.",
              "He bought a cake to me.",
              "They told us a story."
            ],
            "answer": 2,
            "explain": "buy는 3형식에서 for를 써야 해요. bought a cake to me → bought a cake for me."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMs. Park teaches ______.",
            "options": [
              "music us",
              "to us music",
              "us music",
              "music us for"
            ],
            "answer": 2,
            "explain": "4형식은 '동사 + 사람 + 사물' 순서예요. teaches us music."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n그는 나에게 그의 새 차를 보여주었다.\nHe showed ______.",
            "options": [
              "me his new car",
              "his new car me",
              "to me his new car",
              "me to his new car"
            ],
            "answer": 0,
            "explain": "'~에게 ~을 보여주다'는 show + 사람 + 사물. showed me his new car."
          },
          {
            "q": "다음 두 문장의 뜻이 같도록 할 때 빈칸에 알맞은 것을 고르세요.\nI showed my drawing to her. = I showed ______.",
            "options": [
              "her my drawing",
              "my drawing her",
              "to her my drawing",
              "her to my drawing"
            ],
            "answer": 0,
            "explain": "3형식 'show 사물 to 사람'을 4형식 'show 사람 사물'로 바꾸면 showed her my drawing."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nI got a ticket ______ her.",
            "options": [
              "to",
              "for",
              "in",
              "by"
            ],
            "answer": 1,
            "explain": "get은 3형식에서 for를 써요. get her a ticket = get a ticket for her."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nShe teaches art ______ them.",
            "options": [
              "for",
              "to",
              "with",
              "of"
            ],
            "answer": 1,
            "explain": "teach는 3형식에서 to를 써요. teach them art = teach art to them."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "He told the news us.",
              "He told us the news.",
              "He told to us the news.",
              "He told the news us to."
            ],
            "answer": 1,
            "explain": "4형식은 '동사 + 사람 + 사물'. told us the news가 올바른 어순이에요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy sister made ______.",
            "options": [
              "a cake me",
              "me a cake",
              "for me a cake",
              "a cake for me for"
            ],
            "answer": 1,
            "explain": "4형식 '동사 + 사람 + 사물'. made me a cake."
          },
          {
            "q": "다음 문장을 4형식으로 바르게 바꾼 것을 고르세요.\nShe sent a letter to her parents.",
            "options": [
              "She sent her parents a letter.",
              "She sent a letter her parents.",
              "She sent to her parents a letter.",
              "She sent her parents to a letter."
            ],
            "answer": 0,
            "explain": "3형식 'send 사물 to 사람'을 4형식으로 바꾸면 'send 사람 사물'. sent her parents a letter."
          },
          {
            "q": "빈칸에 공통으로 알맞은 전치사를 고르세요.\nI gave the book ______ him.\nShe told the truth ______ me.",
            "options": [
              "for",
              "to",
              "of",
              "with"
            ],
            "answer": 1,
            "explain": "give, tell 모두 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nMy mom cooked dinner ______ us.",
            "options": [
              "to",
              "for",
              "at",
              "in"
            ],
            "answer": 1,
            "explain": "cook은 3형식에서 for를 써요. cook us dinner = cook dinner for us."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 것을 고르세요.",
            "options": [
              "I gave a present to him.",
              "She made a cake for me.",
              "He sent a letter for me.",
              "They taught English to us."
            ],
            "answer": 2,
            "explain": "send는 to를 써야 해요. sent a letter for me → sent a letter to me."
          },
          {
            "q": "다음 중 나머지 셋과 3형식 전치사가 다른 하나를 고르세요.",
            "options": [
              "give",
              "send",
              "show",
              "buy"
            ],
            "answer": 3,
            "explain": "give/send/show는 to를 쓰고, buy는 for를 써요. 따라서 buy가 나머지와 달라요."
          },
          {
            "q": "다음 중 나머지 셋과 3형식 전치사가 다른 하나를 고르세요.",
            "options": [
              "make",
              "cook",
              "teach",
              "buy"
            ],
            "answer": 2,
            "explain": "make/cook/buy는 for를 쓰고, teach는 to를 써요. 따라서 teach가 나머지와 달라요."
          },
          {
            "q": "우리말에 맞게 빈칸을 채울 때 알맞은 것을 고르세요.\n삼촌이 나에게 용돈을 주셨다.\nMy uncle gave ______.",
            "options": [
              "some money me",
              "me some money",
              "some money to me for",
              "to me some money"
            ],
            "answer": 1,
            "explain": "give + 사람 + 사물 순서. gave me some money."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nCan you show ______?",
            "options": [
              "me your ticket",
              "your ticket me",
              "to me your ticket",
              "your ticket to me me"
            ],
            "answer": 0,
            "explain": "4형식 '동사 + 사람 + 사물'. show me your ticket."
          },
          {
            "q": "다음 문장을 3형식으로 바르게 바꾼 것을 고르세요.\nHe threw me the ball.",
            "options": [
              "He threw the ball for me.",
              "He threw the ball to me.",
              "He threw the ball me.",
              "He threw to me the ball."
            ],
            "answer": 1,
            "explain": "throw는 3형식에서 to를 써요. throw me the ball = throw the ball to me."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nShe lent her notebook ______ me.",
            "options": [
              "for",
              "to",
              "of",
              "about"
            ],
            "answer": 1,
            "explain": "lend는 3형식에서 to를 써요. lend me her notebook = lend her notebook to me."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "Grandma gave a hug to me.",
              "Grandma gave a hug for me.",
              "Grandma gave me to a hug.",
              "Grandma gave to me a hug."
            ],
            "answer": 0,
            "explain": "give는 3형식에서 to를 쓰고 어순은 '동사 + 사물 + to 사람'. gave a hug to me."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy grandma gave ______ a card on my birthday.",
            "options": [
              "to me",
              "for me",
              "me",
              "me for"
            ],
            "answer": 2,
            "explain": "4형식 '동사 + 사람 + 사물'이므로 사람 앞에 전치사가 없어요. gave me a card."
          },
          {
            "q": "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 것을 고르세요.\nHe bought me a new watch. = He bought a new watch ______ me.",
            "options": [
              "to",
              "for",
              "at",
              "with"
            ],
            "answer": 1,
            "explain": "buy는 3형식에서 for를 써요."
          },
          {
            "q": "우리말에 맞게 문장을 완성할 때 빈칸에 알맞은 것을 고르세요.\n그는 나에게 비밀을 말해주었다.\nHe told ______.",
            "options": [
              "a secret me",
              "me a secret",
              "to me a secret",
              "me to a secret"
            ],
            "answer": 1,
            "explain": "tell + 사람 + 사물 순서. told me a secret."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: What did your dad buy you?\nB: He bought ______.",
            "options": [
              "a bike me",
              "me a bike",
              "to me a bike",
              "a bike me for"
            ],
            "answer": 1,
            "explain": "buy + 사람 + 사물 순서. bought me a bike."
          },
          {
            "q": "다음 중 빈칸에 for가 들어갈 수 없는 문장을 고르세요.",
            "options": [
              "My mom made a dress ______ me.",
              "Dad bought a bag ______ me.",
              "She cooked lunch ______ me.",
              "He gave a book ______ me."
            ],
            "answer": 3,
            "explain": "give는 to를 써요. 나머지 make/buy/cook은 모두 for를 써요."
          },
          {
            "q": "다음 중 빈칸에 to가 들어갈 수 없는 문장을 고르세요.",
            "options": [
              "He showed the photo ______ us.",
              "She sent a gift ______ me.",
              "My mom bought shoes ______ me.",
              "They taught music ______ us."
            ],
            "answer": 2,
            "explain": "buy는 for를 써요. 나머지 show/send/teach는 모두 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWill you get ______?",
            "options": [
              "me a drink",
              "a drink me",
              "to me a drink",
              "for me a drink me"
            ],
            "answer": 0,
            "explain": "4형식 '동사 + 사람 + 사물'. get me a drink."
          },
          {
            "q": "다음 문장을 4형식으로 바르게 바꾼 것을 고르세요.\nShe cooked dinner for us.",
            "options": [
              "She cooked us dinner.",
              "She cooked dinner us.",
              "She cooked us for dinner.",
              "She cooked to us dinner."
            ],
            "answer": 0,
            "explain": "3형식 'cook 사물 for 사람'을 4형식으로 바꾸면 'cook 사람 사물'. cooked us dinner."
          },
          {
            "q": "밑줄 친 부분이 어법상 옳은 문장을 고르세요.",
            "options": [
              "He gave me for a gift.",
              "She teaches us English.",
              "I bought to him a pen.",
              "They sent for us a card."
            ],
            "answer": 1,
            "explain": "4형식 '동사 + 사람 + 사물'은 사람 앞에 전치사가 없어요. teaches us English가 올바른 문장이에요."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 것을 고르세요.\n언니는 나에게 케이크를 만들어주었다.\nMy sister ______ me a cake.",
            "options": [
              "gave",
              "made",
              "sent",
              "showed"
            ],
            "answer": 1,
            "explain": "'만들어주다'는 make. made me a cake."
          },
          {
            "q": "빈칸에 알맞은 전치사끼리 바르게 짝지은 것을 고르세요.\nI gave a pen ______ him and bought a book ______ him.",
            "options": [
              "to / to",
              "for / for",
              "to / for",
              "for / to"
            ],
            "answer": 2,
            "explain": "give는 to, buy는 for를 써요. 따라서 to / for."
          },
          {
            "q": "다음 중 어순이 틀린 문장을 고르세요.",
            "options": [
              "She sent me an email.",
              "He showed us his room.",
              "I gave my number him.",
              "They told us a story."
            ],
            "answer": 2,
            "explain": "'gave my number him'은 어순이 틀렸어요. gave him my number 또는 gave my number to him이 맞아요."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: Who teaches you math?\nB: Mr. Kim teaches ______.",
            "options": [
              "math me",
              "me math",
              "to me math",
              "for me math"
            ],
            "answer": 1,
            "explain": "teach + 사람 + 사물 순서. teaches me math."
          },
          {
            "q": "빈칸에 알맞은 전치사를 고르세요.\nShe wrote a letter ______ me.",
            "options": [
              "for",
              "to",
              "at",
              "of"
            ],
            "answer": 1,
            "explain": "write는 3형식에서 to를 써요. write me a letter = write a letter to me."
          },
          {
            "q": "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 것을 고르세요.\nHe gave his phone number to me. = He gave ______.",
            "options": [
              "me his phone number",
              "his phone number me",
              "to me his phone number",
              "me to his phone number"
            ],
            "answer": 0,
            "explain": "3형식 'give 사물 to 사람'을 4형식 'give 사람 사물'로 바꾸면 gave me his phone number."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nShe gave a present ______ me.",
            "answers": [
              "to"
            ],
            "explain": "give는 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nDad bought a laptop ______ me.",
            "answers": [
              "for"
            ],
            "explain": "buy는 3형식에서 for를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nHe sent a package ______ us.",
            "answers": [
              "to"
            ],
            "explain": "send는 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nGrandma made rice cakes ______ us.",
            "answers": [
              "for"
            ],
            "explain": "make는 3형식에서 for를 써요."
          },
          {
            "q": "다음 3형식 문장을 4형식으로 바꿀 때 밑줄에 들어갈 두 단어를 순서대로 쓰세요.\nHe gave a book to me. → He gave ______ a book.",
            "answers": [
              "me"
            ],
            "explain": "give 사물 to 사람 → give 사람 사물. to me가 me로 바뀌어 gave me a book이 돼요."
          },
          {
            "q": "우리말에 맞게 빈칸을 채우세요. (사람 + 사물)\n그는 나에게 그의 전화번호를 주었다.\nHe gave ______ his phone number.",
            "answers": [
              "me"
            ],
            "explain": "give + 사람(me) + 사물. 사람 앞에는 전치사를 쓰지 않아요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nMs. Park teaches music ______ us.",
            "answers": [
              "to"
            ],
            "explain": "teach는 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nI got a ticket ______ her.",
            "answers": [
              "for"
            ],
            "explain": "get은 3형식에서 for를 써요."
          },
          {
            "q": "다음 4형식 문장을 3형식으로 바꿀 때 밑줄에 들어갈 두 단어를 순서대로 쓰세요.\nShe showed me her drawing. → She showed her drawing ______ ______.",
            "answers": [
              "to me",
              "to me."
            ],
            "explain": "show 사람 사물 → show 사물 to 사람. me 앞에 to를 붙여 to me가 돼요."
          },
          {
            "q": "우리말에 맞게 밑줄에 알맞은 말을 쓰세요. (사람 + 사물, 두 단어)\n그녀는 나에게 이메일을 보냈다.\nShe sent ______ ______.",
            "answers": [
              "me an email",
              "me an email."
            ],
            "explain": "send + 사람(me) + 사물(an email) 순서로 써요."
          }
        ]
      },
      {
        "id": "1-B-U8",
        "unit": 8,
        "title": "명사절 접속사 that",
        "concept": "동사 뒤의 「that + 주어 + 동사」는 '~라는 것을/~라고'로 해석하며 목적어 역할을 하고, 이때 that은 생략할 수 있다.",
        "mc": [
          {
            "q": "I think ___ she is smart. 빈칸에 알맞은 것은?",
            "options": [
              "that",
              "what",
              "who",
              "which"
            ],
            "answer": 0,
            "explain": "동사 think 뒤에서 '~라는 것을/~라고'로 해석되는 명사절을 이끄는 접속사는 that이다."
          },
          {
            "q": "다음 중 빈칸에 that을 넣을 수 없는 것은?",
            "options": [
              "I know ___ you like music.",
              "She believes ___ he tells the truth.",
              "Look at ___ big tree.",
              "We hope ___ you have a great trip."
            ],
            "answer": 2,
            "explain": "'Look at that big tree'의 that은 '저 ~'라는 뜻의 지시형용사이며, 나머지는 명사절 접속사 that이 들어간다. (지시형용사 자리에 다른 접속사는 못 오지만 문제는 '명사절 접속사 that'을 고르는 것)"
          },
          {
            "q": "'나는 그가 정직하다고 믿는다.'를 영어로 바르게 옮긴 것은?",
            "options": [
              "I believe that he is honest.",
              "I believe that honest.",
              "I believe he that is honest.",
              "That I believe he is honest."
            ],
            "answer": 0,
            "explain": "believe 뒤에 'that + 주어(he) + 동사(is)' 순서로 명사절이 온다."
          },
          {
            "q": "밑줄 친 that의 쓰임이 나머지와 다른 것은?",
            "options": [
              "I know that you are kind.",
              "She said that it was true.",
              "That house is very old.",
              "We think that the plan is good."
            ],
            "answer": 2,
            "explain": "'That house'의 that은 '저 ~'라는 지시형용사이고, 나머지는 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "두 문장을 that으로 이을 때 알맞은 것은? I think it. + The book is fun.",
            "options": [
              "I think that the book is fun.",
              "I think it that the book is fun.",
              "I think the book that is fun.",
              "That I think the book is fun."
            ],
            "answer": 0,
            "explain": "'I think it'의 it을 that절 'that the book is fun'으로 바꿔 목적어 자리에 넣는다."
          },
          {
            "q": "다음 문장에서 생략할 수 있는 단어는? I know that you are right.",
            "options": [
              "that",
              "you",
              "know",
              "right"
            ],
            "answer": 0,
            "explain": "목적어 역할을 하는 명사절 접속사 that은 생략할 수 있다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 말은? I hope ___ you win. / She says ___ it is true.",
            "options": [
              "that",
              "what",
              "if",
              "who"
            ],
            "answer": 0,
            "explain": "두 문장 모두 동사 뒤에서 명사절을 이끄는 접속사 that이 들어간다."
          },
          {
            "q": "어법상 옳은 문장은?",
            "options": [
              "He believes that she can do it.",
              "He believes that she can do it that.",
              "He believes she that can do it.",
              "He believes can do it that she."
            ],
            "answer": 0,
            "explain": "'that + 주어(she) + 동사(can do)' 순서가 맞다."
          },
          {
            "q": "'She thinks that the movie is boring.'에서 that절의 역할은?",
            "options": [
              "think의 목적어",
              "think의 주어",
              "the movie를 꾸미는 형용사",
              "장소를 나타내는 부사"
            ],
            "answer": 0,
            "explain": "동사 think 뒤의 that절은 '무엇을 생각하는지'를 나타내는 목적어이다."
          },
          {
            "q": "빈칸에 알맞지 않은 동사는? I ___ that he is a good student.",
            "options": [
              "arrive",
              "think",
              "know",
              "believe"
            ],
            "answer": 0,
            "explain": "think/know/believe 등은 뒤에 that 명사절을 목적어로 취하지만, arrive는 that절을 목적어로 쓰지 않는다."
          },
          {
            "q": "우리말과 일치하도록 빈칸에 알맞은 것은? '나는 네가 최선을 다했다는 것을 안다.' → I ___ that you did your best.",
            "options": [
              "know",
              "want",
              "give",
              "meet"
            ],
            "answer": 0,
            "explain": "'~라는 것을 안다'는 know that ~으로 표현한다."
          },
          {
            "q": "다음 중 that이 반드시 필요한(생략할 수 없는) 문장은?",
            "options": [
              "I want that book.",
              "I think that she is nice.",
              "She said that.",
              "That is my dog."
            ],
            "answer": 0,
            "explain": "'I want that book'의 that은 명사 book을 꾸미는 지시형용사라 생략할 수 없다. 나머지 중 명사절 접속사 that만 생략 가능하다."
          },
          {
            "q": "'그들은 그 계획이 좋다고 생각한다.'를 바르게 옮긴 것은?",
            "options": [
              "They think that the plan is good.",
              "They think the plan that good.",
              "They think good the plan is that.",
              "That they think the plan good."
            ],
            "answer": 0,
            "explain": "think + that + 주어(the plan) + 동사(is) 순서이다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은? My mom knows ___ I am tired.",
            "options": [
              "that",
              "this",
              "it",
              "so"
            ],
            "answer": 0,
            "explain": "know 뒤에 '~라는 것을'의 의미로 명사절을 이끄는 접속사 that이 온다."
          },
          {
            "q": "밑줄 친 that이 '접속사(명사절)'로 쓰인 것은?",
            "options": [
              "I hope that we can meet again.",
              "That is a good idea.",
              "Give me that pen.",
              "Who said that?"
            ],
            "answer": 0,
            "explain": "①은 hope 뒤 명사절 접속사 that. ②는 지시대명사, ③은 지시형용사, ④는 지시대명사이다."
          },
          {
            "q": "다음 문장을 that을 생략한 형태로 바르게 바꾼 것은? I think that it will rain.",
            "options": [
              "I think it will rain.",
              "I think will rain it.",
              "I it think will rain.",
              "Think I it will rain."
            ],
            "answer": 0,
            "explain": "명사절 접속사 that만 빼고 나머지 어순은 그대로 둔다."
          },
          {
            "q": "어법상 어색한 문장은?",
            "options": [
              "I believe that we can win.",
              "She says that she is late.",
              "We hope that everything be fine.",
              "He knows that I am busy."
            ],
            "answer": 2,
            "explain": "'everything be fine'은 틀리며, that절 안의 동사는 주어에 맞게 'everything is/will be fine'이 되어야 한다."
          },
          {
            "q": "A: What do you think about the test? B: I think ___ it is easy. 빈칸에 알맞은 것은?",
            "options": [
              "that",
              "what",
              "when",
              "where"
            ],
            "answer": 0,
            "explain": "think 뒤에서 '~라고 생각한다'의 명사절을 이끄는 that이다."
          },
          {
            "q": "'그는 자신이 그 사고를 봤다고 말한다.'를 옮긴 것은?",
            "options": [
              "He says that he saw the accident.",
              "He says that saw the accident.",
              "He says he the accident saw that.",
              "That he says saw the accident."
            ],
            "answer": 0,
            "explain": "say + that + 주어(he) + 동사(saw) 순서이다."
          },
          {
            "q": "빈칸에 that을 넣기에 자연스럽지 않은 것은?",
            "options": [
              "I feel ___ something is wrong.",
              "We think ___ the news is true.",
              "She likes ___ song very much.",
              "They believe ___ he is kind."
            ],
            "answer": 2,
            "explain": "③은 'that song(저 노래)'처럼 명사를 꾸미는 지시형용사가 어울리며 명사절 접속사가 아니다. 나머지는 동사 뒤 명사절 that이 자연스럽다."
          },
          {
            "q": "다음 중 밑줄 친 that이 지시대명사(저것)인 것은?",
            "options": [
              "I know that he is honest.",
              "That is a beautiful flower.",
              "I hope that you feel better.",
              "She thinks that math is hard."
            ],
            "answer": 1,
            "explain": "②의 That은 '저것'을 뜻하는 지시대명사이고 주어 역할을 한다. 나머지는 명사절 접속사이다."
          },
          {
            "q": "우리말에 맞게 배열할 때 세 번째로 오는 단어는? ( that / I / think / he / is / kind ) → '나는 그가 착하다고 생각한다.'",
            "options": [
              "that",
              "think",
              "he",
              "kind"
            ],
            "answer": 0,
            "explain": "I / think / that / he / is / kind 순서이므로 세 번째 단어는 that이다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것은? A: Do you believe his story? B: Yes, I believe ___ it is true.",
            "options": [
              "that",
              "who",
              "what",
              "why"
            ],
            "answer": 0,
            "explain": "believe 뒤에서 명사절을 이끄는 접속사 that이 들어간다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오. Everyone thinks ___ the weather will be sunny.",
            "options": [
              "that",
              "there",
              "then",
              "this"
            ],
            "answer": 0,
            "explain": "think 뒤에 명사절 접속사 that이 온다."
          },
          {
            "q": "어법상 옳은 문장은?",
            "options": [
              "I know that you are a good friend.",
              "I know that you a good friend.",
              "I know are you a good friend that.",
              "Know I that you good friend."
            ],
            "answer": 0,
            "explain": "know + that + 주어(you) + 동사(are) + 보어 순서가 옳다."
          },
          {
            "q": "다음 문장에서 that의 뜻으로 알맞은 것은? She believes that he will come.",
            "options": [
              "~라는 것을",
              "저것",
              "저 ~",
              "그래서"
            ],
            "answer": 0,
            "explain": "동사 뒤 명사절 접속사 that은 '~라는 것을/~라고'로 해석한다."
          },
          {
            "q": "두 문장을 한 문장으로 바르게 이은 것은? We hope it. + You have a great trip.",
            "options": [
              "We hope that you have a great trip.",
              "We hope you that have a great trip.",
              "We hope have a great trip you that.",
              "That we hope you have a great trip."
            ],
            "answer": 0,
            "explain": "'it'을 that절로 바꿔 hope의 목적어 자리에 넣는다."
          },
          {
            "q": "빈칸에 들어갈 말이 나머지와 다른 것은?",
            "options": [
              "Please close ___ door.",
              "I think ___ you are right.",
              "We know ___ she is smart.",
              "He says ___ it is easy."
            ],
            "answer": 0,
            "explain": "①은 '저 문'이라는 지시형용사 that, 나머지는 명사절 접속사 that이다."
          },
          {
            "q": "'우리는 그가 매일 운동한다는 것을 안다.'를 옮긴 것은?",
            "options": [
              "We know that he exercises every day.",
              "We know that exercises every day.",
              "We know he every day that exercises.",
              "That we know he exercises every day."
            ],
            "answer": 0,
            "explain": "know + that + 주어(he) + 동사(exercises) 순서이며 3인칭 단수 -s에 유의한다."
          },
          {
            "q": "다음 중 that절이 목적어로 쓰이지 않은 문장은?",
            "options": [
              "That book is mine.",
              "I think that it is fun.",
              "She knows that I am here.",
              "We believe that he is right."
            ],
            "answer": 0,
            "explain": "①의 That은 book을 꾸미는 지시형용사이고 that절 목적어가 아니다."
          },
          {
            "q": "빈칸에 알맞은 것은? My teacher says ___ we should bring water.",
            "options": [
              "that",
              "what",
              "how",
              "which"
            ],
            "answer": 0,
            "explain": "say 뒤에서 '~라고'의 명사절을 이끄는 접속사 that이 온다."
          },
          {
            "q": "밑줄 친 that을 생략할 수 있는 문장은?",
            "options": [
              "I believe that we can win.",
              "That is my bag.",
              "I like that color.",
              "Look at that!"
            ],
            "answer": 0,
            "explain": "①의 that만 목적어절을 이끄는 접속사라 생략 가능하고, 나머지는 지시(대)명사·지시형용사라 생략할 수 없다."
          },
          {
            "q": "우리말과 뜻이 같은 문장은? '나는 무언가 잘못되었다고 느낀다.'",
            "options": [
              "I feel that something is wrong.",
              "I feel something that is wrong.",
              "That I feel something is wrong.",
              "I feel wrong that something is."
            ],
            "answer": 0,
            "explain": "feel + that + 주어(something) + 동사(is) + 보어(wrong) 순서이다."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르시오. I ___ that the news is true. (나는 그 소식이 사실이라고 생각한다.)",
            "options": [
              "think",
              "run",
              "open",
              "close"
            ],
            "answer": 0,
            "explain": "'~라고 생각한다'는 think that ~이다."
          },
          {
            "q": "다음 중 어순이 바른 것은?",
            "options": [
              "She knows that I am late.",
              "She that knows I am late.",
              "She knows I that am late.",
              "That she knows I am late."
            ],
            "answer": 0,
            "explain": "주어(She) + 동사(knows) + that + 주어(I) + 동사(am) 순서가 옳다."
          },
          {
            "q": "빈칸에 알맞은 것은? I hope ___ tomorrow's weather will be nice.",
            "options": [
              "that",
              "this",
              "these",
              "those"
            ],
            "answer": 0,
            "explain": "hope 뒤에 명사절을 이끄는 접속사 that이 온다."
          },
          {
            "q": "다음 문장에 대한 설명으로 옳은 것은? I think he is a genius.",
            "options": [
              "think 뒤에 접속사 that이 생략되어 있다.",
              "he가 문장의 주어이다.",
              "is가 문장 전체의 본동사이다.",
              "틀린 문장이다."
            ],
            "answer": 0,
            "explain": "'I think (that) he is a genius'에서 목적어절 접속사 that이 생략된 올바른 문장이다."
          },
          {
            "q": "'그녀는 자신이 시험에 합격할 거라고 믿는다.'를 옮긴 것은?",
            "options": [
              "She believes that she will pass the exam.",
              "She believes that will pass the exam.",
              "She believes will she pass the exam that.",
              "That she believes will pass the exam."
            ],
            "answer": 0,
            "explain": "believe + that + 주어(she) + 동사(will pass) 순서이다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 말은? He knows ___ I am tired. / I think ___ the answer is right.",
            "options": [
              "that",
              "if",
              "what",
              "when"
            ],
            "answer": 0,
            "explain": "두 문장 모두 동사 뒤에서 목적어 역할을 하는 명사절 접속사 that이 들어간다."
          },
          {
            "q": "두 문장을 that으로 이을 때 알맞은 것은? She believes it. + He tells the truth.",
            "options": [
              "She believes that he tells the truth.",
              "She believes he that tells the truth.",
              "She believes it that he tells the truth.",
              "That she believes he tells the truth."
            ],
            "answer": 0,
            "explain": "'She believes it'의 it을 that절 'that he tells the truth'로 바꿔 목적어 자리에 넣는다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. I think ___ she is kind.",
            "answers": [
              "that"
            ],
            "explain": "동사 think 뒤에서 명사절을 이끄는 접속사는 that이다."
          },
          {
            "q": "두 문장을 한 문장으로 만들 때 빈칸에 들어갈 두 단어를 쓰시오. I know it. + You like music. → I ___ ___ you like music.",
            "answers": [
              "know that"
            ],
            "explain": "'I know it'의 it을 that절로 바꿔 'I know that you like music'이 된다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 접속사를 쓰시오. '우리는 그가 정직하다고 믿는다.' → We believe ___ he is honest.",
            "answers": [
              "that"
            ],
            "explain": "believe 뒤에 명사절 접속사 that이 온다."
          },
          {
            "q": "다음 문장에서 생략할 수 있는 한 단어를 쓰시오. She hopes that you feel better.",
            "answers": [
              "that"
            ],
            "explain": "목적어절을 이끄는 명사절 접속사 that은 생략할 수 있다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. My mom knows ___ I am tired.",
            "answers": [
              "that"
            ],
            "explain": "know 뒤에서 '~라는 것을'의 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "우리말에 맞게 빈칸에 들어갈 두 단어를 쓰시오. '그는 자신이 바쁘다고 말한다.' → He ___ ___ he is busy.",
            "answers": [
              "says that",
              "said that"
            ],
            "explain": "say that ~ 형태로 '~라고 말한다'를 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. They think ___ the plan is good.",
            "answers": [
              "that"
            ],
            "explain": "think 뒤에 명사절 접속사 that이 온다."
          },
          {
            "q": "다음 밑줄 친 that의 종류를 쓰시오. (지시대명사 / 접속사 중 하나) → I feel that something is wrong.",
            "answers": [
              "접속사",
              "명사절 접속사",
              "접속사 that"
            ],
            "explain": "feel 뒤에서 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "우리말에 맞게 빈칸에 들어갈 두 단어를 쓰시오. '나는 네가 최선을 다했다는 것을 안다.' → I ___ ___ you did your best.",
            "answers": [
              "know that"
            ],
            "explain": "know that ~으로 '~라는 것을 안다'를 표현한다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. I hope ___ we can help each other.",
            "answers": [
              "that"
            ],
            "explain": "hope 뒤에서 명사절을 이끄는 접속사 that이다."
          }
        ]
      }
    ]
  },
  {
    "id": "2-B",
    "name": "2학년 2학기 (2-B)",
    "units": [
      {
        "id": "2-B-U1",
        "unit": 1,
        "title": "가주어 It ~ to부정사",
        "concept": "「It is + 형용사 (+ for 목적격) + to부정사」에서 It은 뜻 없는 가주어이고, 진짜 주어인 to부정사가 뒤로 간다.",
        "mc": [
          {
            "q": "To learn English is important.  →  ___ is important to learn English.",
            "options": [
              "It",
              "That",
              "This",
              "There"
            ],
            "answer": 0,
            "explain": "진주어 to부정사를 뒤로 보내고 그 자리에 뜻 없는 가주어 It을 쓴다. That/This/There는 가주어로 쓰지 않는다."
          },
          {
            "q": "To exercise every day is good.  →  It is good ___ exercise every day.",
            "options": [
              "for",
              "to",
              "of",
              "at"
            ],
            "answer": 1,
            "explain": "진주어는 to부정사이므로 「to + 동사원형」인 to exercise가 와야 한다."
          },
          {
            "q": "To swim in the deep river is dangerous. 를 가주어 It으로 바르게 바꾼 것은?",
            "options": [
              "It is dangerous to swim in the deep river.",
              "It is dangerous swim in the deep river.",
              "Is it dangerous to swim in the deep river.",
              "It dangerous is to swim in the deep river."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 어순을 지켜야 한다. to 뒤에는 동사원형 swim이 온다."
          },
          {
            "q": "To keep a diary is useful.  →  It is useful ___ a diary.",
            "options": [
              "keep",
              "keeps",
              "to keep",
              "keeping"
            ],
            "answer": 2,
            "explain": "가주어 It 뒤로 보낸 진주어는 to부정사 형태 to keep이어야 한다."
          },
          {
            "q": "다음 중 가주어 It이 바르게 쓰인 문장은?",
            "options": [
              "It is wonderful to help other people.",
              "It is wonderful helps other people.",
              "It wonderful is to help other people.",
              "Is wonderful to help other people."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 형태가 올바르다. 나머지는 어순·형태가 틀렸다."
          },
          {
            "q": "약속을 지키는 것은 중요하다. = It is important ___ ___ promises.",
            "options": [
              "to keep",
              "keeping",
              "keep to",
              "to keeping"
            ],
            "answer": 0,
            "explain": "진주어는 to부정사이므로 to keep이 알맞다. to 뒤에는 항상 동사원형이 온다."
          },
          {
            "q": "자전거를 타는 것은 쉽다. = ___ is easy to ride a bike.",
            "options": [
              "It",
              "He",
              "Bike",
              "Riding"
            ],
            "answer": 0,
            "explain": "문장 맨 앞에는 뜻 없는 가주어 It을 쓴다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것은? '일찍 일어나는 것은 쉽지 않다.'",
            "options": [
              "It is not easy to get up early.",
              "It is not easy get up early.",
              "It not is easy to get up early.",
              "Get up early is not easy it."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 형태로 It is not easy to get up early가 올바르다."
          },
          {
            "q": "It is fun ___ play soccer with friends.",
            "options": [
              "to",
              "for",
              "at",
              "in"
            ],
            "answer": 0,
            "explain": "진주어 to부정사 to play가 와야 하므로 빈칸에는 to가 알맞다."
          },
          {
            "q": "다음 중 밑줄 친 It의 쓰임이 나머지와 다른 것은?",
            "options": [
              "It is a cute dog.",
              "It is good to eat vegetables.",
              "It is hard to finish the work.",
              "It is fun to read books."
            ],
            "answer": 0,
            "explain": "①의 It은 '그것'이라는 뜻의 대명사이고, 나머지는 to부정사를 대신하는 뜻 없는 가주어이다."
          },
          {
            "q": "It is dangerous ___ play with fire.",
            "options": [
              "to",
              "of",
              "for",
              "with"
            ],
            "answer": 0,
            "explain": "진주어 to부정사 to play가 필요하므로 to가 알맞다."
          },
          {
            "q": "다음 문장에서 틀린 부분을 바르게 고친 것은?  'It is important eat breakfast.'",
            "options": [
              "eat → to eat",
              "It → That",
              "is → are",
              "important → importantly"
            ],
            "answer": 0,
            "explain": "진주어는 to부정사여야 하므로 eat을 to eat으로 고쳐야 한다."
          },
          {
            "q": "「It is + 형용사 + ___ + to부정사」에서 to부정사의 의미상 주어를 나타내는 빈칸에 알맞은 것은?",
            "options": [
              "for + 목적격",
              "to + 목적격",
              "of + 주격",
              "for + 주격"
            ],
            "answer": 0,
            "explain": "가주어 구문에서 행동의 주체(의미상 주어)는 「for + 목적격」으로 나타낸다."
          },
          {
            "q": "It is hard ___ ___ to solve this puzzle. (그가 이 퍼즐을 푸는 것은)",
            "options": [
              "for him",
              "for he",
              "of him",
              "to him"
            ],
            "answer": 0,
            "explain": "to부정사의 의미상 주어는 「for + 목적격」이므로 for him이 알맞다. he는 목적격 him으로 써야 한다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것은? '아이들이 이 책을 읽는 것은 쉽다.'  It is easy ___ to read this book.",
            "options": [
              "for children",
              "of children",
              "for child",
              "children"
            ],
            "answer": 0,
            "explain": "의미상 주어는 「for + 목적격」으로 나타내며 children은 복수이므로 for children이 알맞다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "It is easy for me to swim.",
              "It is easy for I to swim.",
              "It is easy of me to swim.",
              "It is easy to me to swim."
            ],
            "answer": 0,
            "explain": "의미상 주어는 「for + 목적격」이므로 for me가 올바르다."
          },
          {
            "q": "It is exciting ___ learn new things.",
            "options": [
              "to",
              "for",
              "of",
              "so"
            ],
            "answer": 0,
            "explain": "진주어 to부정사 to learn이 와야 하므로 to가 알맞다."
          },
          {
            "q": "다음 단어를 바르게 배열하시오.  ( it / is / fun / to / play / soccer )",
            "options": [
              "It is fun to play soccer.",
              "It fun is to play soccer.",
              "It is to play fun soccer.",
              "Is it fun play to soccer."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 어순에 따라 It is fun to play soccer가 된다."
          },
          {
            "q": "다음 단어를 바르게 배열하시오.  ( it / is / hard / to / get up / early )",
            "options": [
              "It is hard to get up early.",
              "It is to get up hard early.",
              "It hard is to get up early.",
              "It is hard get up to early."
            ],
            "answer": 0,
            "explain": "It is + hard + to get up early 순서가 올바르다."
          },
          {
            "q": "다음 단어를 바르게 배열하시오.  ( it / is / important / to / keep / promises )",
            "options": [
              "It is important to keep promises.",
              "It is to keep important promises.",
              "It important is to keep promises.",
              "Is it important keep to promises."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 어순에 따라 It is important to keep promises가 올바르다."
          },
          {
            "q": "To read English books is fun. 과 뜻이 같은 문장은?",
            "options": [
              "It is fun to read English books.",
              "It is fun reading English books to.",
              "It is fun read English books.",
              "Fun is it to read English books."
            ],
            "answer": 0,
            "explain": "진주어 to부정사를 뒤로 보내고 가주어 It을 쓴 It is fun to read English books가 같은 뜻이다."
          },
          {
            "q": "빈칸에 알맞은 형용사는? '채소를 먹는 것은 몸에 좋다.'  It is ___ to eat vegetables.",
            "options": [
              "good",
              "boring",
              "difficult",
              "wrong"
            ],
            "answer": 0,
            "explain": "몸에 좋다는 뜻이므로 good이 알맞다."
          },
          {
            "q": "빈칸에 알맞은 형용사는? '얼음 위에서 달리는 것은 위험하다.'  It is ___ to run on the ice.",
            "options": [
              "dangerous",
              "safe",
              "easy",
              "useful"
            ],
            "answer": 0,
            "explain": "위험하다는 뜻이므로 dangerous가 알맞다."
          },
          {
            "q": "다음 중 문장이 어법상 틀린 것은?",
            "options": [
              "It is necessary drink water every day.",
              "It is necessary to drink water every day.",
              "It is good to go to bed early.",
              "It is easy to solve the problem."
            ],
            "answer": 0,
            "explain": "①은 진주어가 to부정사가 아니라 틀렸다. drink를 to drink로 고쳐야 한다."
          },
          {
            "q": "It is good ___ go to bed early.",
            "options": [
              "to",
              "for",
              "of",
              "and"
            ],
            "answer": 0,
            "explain": "진주어 to부정사 to go가 와야 하므로 to가 알맞다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것은?  A: How is it to read English books?  B: ___ is fun to read them.",
            "options": [
              "It",
              "That",
              "This",
              "He"
            ],
            "answer": 0,
            "explain": "가주어 It으로 문장을 시작해야 한다."
          },
          {
            "q": "It is ___ to make new friends. (즐겁다)",
            "options": [
              "fun",
              "hard",
              "boring",
              "sad"
            ],
            "answer": 0,
            "explain": "즐겁다는 뜻이므로 fun이 알맞다."
          },
          {
            "q": "다음 문장에서 진주어에 해당하는 부분은?  It is important to follow the rules.",
            "options": [
              "to follow the rules",
              "It",
              "is important",
              "important"
            ],
            "answer": 0,
            "explain": "It은 가주어이고 진짜 주어(진주어)는 to부정사 to follow the rules이다."
          },
          {
            "q": "다음 문장에서 가주어에 해당하는 것은?  It is easy to ride a bike.",
            "options": [
              "It",
              "is",
              "easy",
              "to ride a bike"
            ],
            "answer": 0,
            "explain": "뜻 없이 주어 자리를 채우는 It이 가주어이다."
          },
          {
            "q": "It is wonderful ___ others.",
            "options": [
              "to help",
              "help",
              "helps",
              "helping"
            ],
            "answer": 0,
            "explain": "진주어는 to부정사이므로 to help가 알맞다."
          },
          {
            "q": "우리말에 맞게 빈칸을 채우시오.  '매일 물을 마시는 것은 필요하다.'  It is ___ to drink water every day.",
            "options": [
              "necessary",
              "impossible",
              "dangerous",
              "boring"
            ],
            "answer": 0,
            "explain": "필요하다는 뜻이므로 necessary가 알맞다."
          },
          {
            "q": "다음 중 어순이 올바른 문장은?",
            "options": [
              "It is healthy to drink enough water.",
              "It is to drink healthy enough water.",
              "It healthy is to drink enough water.",
              "Is it healthy to enough water drink."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 어순에 따라 It is healthy to drink enough water가 올바르다."
          },
          {
            "q": "It is not easy ___ learn to swim.",
            "options": [
              "to",
              "for",
              "of",
              "in"
            ],
            "answer": 0,
            "explain": "진주어 to부정사 to learn이 와야 하므로 to가 알맞다."
          },
          {
            "q": "다음 문장의 밑줄 친 It과 쓰임이 같은 것은?  It is fun to sing on stage.",
            "options": [
              "It is hard to keep a diary.",
              "It is on the table.",
              "It is my new phone.",
              "It is raining now."
            ],
            "answer": 0,
            "explain": "제시문의 It은 to부정사를 대신하는 가주어이다. ①만 같은 가주어이고 나머지는 대명사·비인칭 주어이다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 것은?  '내가 이 문제를 푸는 것은 어렵다.'  It is hard ___ to solve this problem.",
            "options": [
              "for me",
              "of me",
              "for I",
              "to me"
            ],
            "answer": 0,
            "explain": "의미상 주어는 「for + 목적격」이므로 for me가 알맞다."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 것은?  It is important for we to study hard.",
            "options": [
              "for we → for us",
              "is → are",
              "important → importantly",
              "to study → studying"
            ],
            "answer": 0,
            "explain": "의미상 주어는 「for + 목적격」이므로 for we를 for us로 고쳐야 한다."
          },
          {
            "q": "다음 문장을 가주어 It으로 시작하는 문장으로 바꾼 것은?  To finish the work today is hard.",
            "options": [
              "It is hard to finish the work today.",
              "It is hard finish the work today.",
              "It hard is to finish the work today.",
              "Finish the work today it is hard."
            ],
            "answer": 0,
            "explain": "진주어 to부정사를 뒤로 보내고 가주어 It으로 시작하면 It is hard to finish the work today가 된다."
          },
          {
            "q": "It is useful ___ a foreign language.",
            "options": [
              "to learn",
              "learn",
              "learning",
              "learns"
            ],
            "answer": 0,
            "explain": "진주어는 to부정사이므로 to learn이 알맞다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 말은?  ___ is fun to play soccer.  ___ is hard to wake up early.",
            "options": [
              "It",
              "That",
              "This",
              "They"
            ],
            "answer": 0,
            "explain": "두 문장 모두 to부정사를 진주어로 하는 가주어 It이 필요하다."
          },
          {
            "q": "다음 중 우리말 '남을 돕는 것은 멋진 일이다.'를 바르게 옮긴 것은?",
            "options": [
              "It is wonderful to help others.",
              "It is wonderful help others.",
              "To help others it is wonderful.",
              "It wonderful to help others is."
            ],
            "answer": 0,
            "explain": "「It is + 형용사 + to부정사」 형태로 It is wonderful to help others가 올바르다."
          }
        ],
        "sa": [
          {
            "q": "To learn English is important.  →  ___ is important to learn English. (가주어)",
            "answers": [
              "It"
            ],
            "explain": "진주어 to부정사를 뒤로 보내고 그 자리에 뜻 없는 가주어 It을 쓴다."
          },
          {
            "q": "It is good ___ exercise every day. (빈칸에 한 단어)",
            "answers": [
              "to"
            ],
            "explain": "진주어는 「to + 동사원형」이므로 to가 들어간다."
          },
          {
            "q": "It is fun ___ ___ books. (책을 읽는 것 → 두 단어)",
            "answers": [
              "to read"
            ],
            "explain": "진주어 to부정사 to read가 알맞다."
          },
          {
            "q": "빈칸을 채워 문장을 완성하시오.  ___ ___ dangerous to play with fire. (가주어 + be동사, 두 단어)",
            "answers": [
              "It is",
              "It's"
            ],
            "explain": "가주어 It과 be동사 is를 써서 It is로 시작한다."
          },
          {
            "q": "It is easy ___ ___ to ride a bike. (그가 → 의미상 주어, 두 단어)",
            "answers": [
              "for him"
            ],
            "explain": "의미상 주어는 「for + 목적격」이므로 for him이다."
          },
          {
            "q": "It is important ___ ___ to study hard. (우리가 → 의미상 주어, 두 단어)",
            "answers": [
              "for us"
            ],
            "explain": "의미상 주어는 「for + 목적격」이므로 for us이다."
          },
          {
            "q": "It is important ___ keep promises. (빈칸에 한 단어)",
            "answers": [
              "to"
            ],
            "explain": "진주어는 to부정사이므로 to keep의 to가 들어간다."
          },
          {
            "q": "It is hard to get up early. 에서 진짜 주어(진주어)를 이루는 to부정사의 첫 단어는?",
            "answers": [
              "to"
            ],
            "explain": "진주어는 to부정사 to get up early이므로 첫 단어는 to이다."
          },
          {
            "q": "It is ___ to eat vegetables. (몸에 좋다 → 형용사 한 단어)",
            "answers": [
              "good"
            ],
            "explain": "몸에 좋다는 뜻의 형용사 good이 알맞다."
          },
          {
            "q": "It is ___ to run on the ice. (위험하다 → 형용사 한 단어)",
            "answers": [
              "dangerous"
            ],
            "explain": "위험하다는 뜻의 형용사 dangerous가 알맞다."
          }
        ]
      },
      {
        "id": "2-B-U2",
        "unit": 2,
        "title": "the 비교급, the 비교급",
        "concept": "「The + 비교급 ~, the + 비교급 …」 = '~하면 할수록 더 …하다'로, 두 절 모두 비교급을 쓴다.",
        "mc": [
          {
            "q": "The higher it is, the ___ it is. (높이 오를수록 더 춥다)",
            "options": [
              "cold",
              "colder",
              "coldest",
              "more cold"
            ],
            "answer": 1,
            "explain": "「the 비교급, the 비교급」 구문의 두 번째 절도 반드시 비교급을 써야 하므로 cold의 비교급 colder가 정답이다."
          },
          {
            "q": "The more you practice, the ___ you become. (연습할수록 더 잘한다)",
            "options": [
              "good",
              "well",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "good/well의 불규칙 비교급은 better이다. 최상급 best나 원급은 이 구문에 쓸 수 없다."
          },
          {
            "q": "___ you eat, the heavier you get. (많이 먹을수록 더 무거워진다)",
            "options": [
              "The more",
              "More",
              "The most",
              "Much"
            ],
            "answer": 0,
            "explain": "구문의 앞 절은 「The + 비교급」으로 시작한다. much의 비교급 more 앞에 the를 붙인 The more가 정답이다."
          },
          {
            "q": "The longer you wait, the ___ you feel. (오래 기다릴수록 더 초조하다)",
            "options": [
              "nervous",
              "nervouser",
              "more nervous",
              "most nervous"
            ],
            "answer": 2,
            "explain": "nervous는 2음절 이상 형용사로 more를 붙여 비교급을 만든다. nervouser는 틀린 형태이다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The harder you try, the stronger you become.",
              "Harder you try, stronger you become.",
              "The hard you try, the strong you become.",
              "The harder you try, stronger you become."
            ],
            "answer": 0,
            "explain": "두 절 모두 「The + 비교급」 형태를 갖춰야 한다. the가 빠지거나 원급을 쓰면 틀린다."
          },
          {
            "q": "The ___ you sleep, the more tired you feel. (적게 잘수록 더 피곤하다)",
            "options": [
              "little",
              "less",
              "least",
              "lesser"
            ],
            "answer": 1,
            "explain": "little의 불규칙 비교급은 less이다. '적게 잘수록'이므로 less가 알맞다."
          },
          {
            "q": "The faster he runs, the ___ he gets tired. (빨리 달릴수록 더 빨리 지친다)",
            "options": [
              "quick",
              "quicker",
              "quickest",
              "more quickly"
            ],
            "answer": 1,
            "explain": "quick의 비교급 quicker가 정답이다. 1음절 단어이므로 -er을 붙인다."
          },
          {
            "q": "The more books you read, the ___ you know. (책을 많이 읽을수록 더 많이 안다)",
            "options": [
              "much",
              "many",
              "more",
              "most"
            ],
            "answer": 2,
            "explain": "much/many의 비교급은 more이다. '더 많이 안다'이므로 the more가 알맞다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은? The ___ the sky is, the brighter the stars are.",
            "options": [
              "dark",
              "darker",
              "darkest",
              "more dark"
            ],
            "answer": 1,
            "explain": "dark는 1음절 단어로 -er을 붙여 darker가 된다. 앞 절도 비교급을 써야 한다."
          },
          {
            "q": "The older he gets, the ___ he becomes. (나이가 들수록 더 현명해진다)",
            "options": [
              "wise",
              "wiser",
              "wisest",
              "more wise"
            ],
            "answer": 1,
            "explain": "wise는 -e로 끝나므로 -r만 붙여 wiser가 된다. more wise는 쓰지 않는다."
          },
          {
            "q": "The warmer the weather is, the ___ I feel. (날씨가 따뜻할수록 기분이 좋다)",
            "options": [
              "good",
              "well",
              "better",
              "gooder"
            ],
            "answer": 2,
            "explain": "good의 비교급은 불규칙형 better이다. gooder는 존재하지 않는다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것은? '빨리 걸을수록 더 일찍 도착한다.'",
            "options": [
              "The faster you walk, the earlier you arrive.",
              "The fast you walk, the early you arrive.",
              "Faster you walk, earlier you arrive.",
              "The more fast you walk, the more early you arrive."
            ],
            "answer": 0,
            "explain": "fast→faster, early→earlier로 두 절 모두 비교급을 쓰고 각각 the를 붙인다."
          },
          {
            "q": "The ___ we learn, the smarter we become. (많이 배울수록 더 똑똑해진다)",
            "options": [
              "much",
              "more",
              "many",
              "most"
            ],
            "answer": 1,
            "explain": "동사 learn을 수식하며 '더 많이'를 뜻하는 much의 비교급 more가 알맞다."
          },
          {
            "q": "밑줄 친 부분이 틀린 것은? The higher you fly, the ___ you see.",
            "options": [
              "farther",
              "further",
              "far",
              "more far"
            ],
            "answer": 2,
            "explain": "far의 비교급은 farther/further이다. 원급 far는 이 구문에 쓸 수 없다."
          },
          {
            "q": "The more time you spend, the ___ result you get. (시간을 많이 쓸수록 더 좋은 결과)",
            "options": [
              "good",
              "well",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "명사 result를 꾸미는 형용사 good의 비교급 better가 알맞다."
          },
          {
            "q": "The ___ it is, the darker it is. (늦을수록 더 어둡다)",
            "options": [
              "late",
              "later",
              "latest",
              "more late"
            ],
            "answer": 1,
            "explain": "late는 -e로 끝나므로 -r을 붙여 later가 된다."
          },
          {
            "q": "다음 중 「the 비교급, the 비교급」 구문이 아닌 것은?",
            "options": [
              "The more you give, the more you receive.",
              "The sooner, the better.",
              "She is taller than her sister.",
              "The harder it rains, the wetter we get."
            ],
            "answer": 2,
            "explain": "3번은 than을 이용한 일반 비교 문장이다. 나머지는 모두 「the 비교급, the 비교급」 구문이다."
          },
          {
            "q": "The more you talk, the ___ you understand each other. (많이 이야기할수록 더 잘 이해한다)",
            "options": [
              "good",
              "well",
              "better",
              "gooder"
            ],
            "answer": 2,
            "explain": "동사 understand를 꾸미는 well의 비교급은 불규칙형 better이다."
          },
          {
            "q": "The ___ you get up, the more you can do. (일찍 일어날수록 더 많이 할 수 있다)",
            "options": [
              "early",
              "earlier",
              "earliest",
              "more early"
            ],
            "answer": 1,
            "explain": "early는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 earlier가 된다."
          },
          {
            "q": "빈칸에 알맞은 것은? The ___ the box is, the harder it is to carry.",
            "options": [
              "heavy",
              "heavier",
              "heaviest",
              "more heavy"
            ],
            "answer": 1,
            "explain": "heavy는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙인 heavier가 정답이다."
          },
          {
            "q": "The colder it becomes, the ___ clothes we wear. (추울수록 옷을 더 많이 입는다)",
            "options": [
              "much",
              "many",
              "more",
              "most"
            ],
            "answer": 2,
            "explain": "셀 수 있는 명사 clothes 앞이므로 many의 비교급 more를 쓴다."
          },
          {
            "q": "다음 문장에서 어법상 옳은 것은?",
            "options": [
              "The more expensive it is, the better it is.",
              "The expensiver it is, the better it is.",
              "The more expensiver it is, the better it is.",
              "The most expensive it is, the better it is."
            ],
            "answer": 0,
            "explain": "expensive는 긴 형용사이므로 more expensive로 비교급을 만든다. -er을 붙이거나 more를 이중으로 쓰면 틀린다."
          },
          {
            "q": "The harder you study, the ___ grades you get. (열심히 공부할수록 더 좋은 점수)",
            "options": [
              "good",
              "well",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "명사 grades를 꾸미는 good의 비교급 better가 정답이다."
          },
          {
            "q": "The longer you sleep, the ___ you feel. (오래 잘수록 더 상쾌하다)",
            "options": [
              "fresh",
              "fresher",
              "freshest",
              "more fresh"
            ],
            "answer": 1,
            "explain": "fresh는 1음절 단어로 -er을 붙여 fresher가 된다."
          },
          {
            "q": "___ we practice, the better we become. 빈칸에 알맞은 것은?",
            "options": [
              "The more",
              "More",
              "The much",
              "Most"
            ],
            "answer": 0,
            "explain": "앞 절은 「The + 비교급」으로 시작한다. much의 비교급 more에 the를 붙인 The more가 정답이다."
          },
          {
            "q": "The busier she is, the ___ she looks. (바쁠수록 더 행복해 보인다)",
            "options": [
              "happy",
              "happier",
              "happiest",
              "more happy"
            ],
            "answer": 1,
            "explain": "happy는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 happier가 된다."
          },
          {
            "q": "다음 중 빈칸에 more가 들어갈 수 없는 것은?",
            "options": [
              "The ___ you smile, the happier you feel.",
              "The ___ difficult it is, the more careful you must be.",
              "The ___ you eat, the fuller you feel.",
              "The higher it is, the ___ it is."
            ],
            "answer": 3,
            "explain": "4번은 cold의 비교급 colder가 들어가야 하므로 more가 들어갈 수 없다."
          },
          {
            "q": "The more slowly you speak, the ___ people understand you. (천천히 말할수록 더 잘 이해한다)",
            "options": [
              "good",
              "well",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "동사 understand를 꾸미는 well의 비교급 better가 정답이다."
          },
          {
            "q": "우리말에 맞게 빈칸을 완성할 때 알맞은 것은? '하늘이 어두울수록 별이 더 밝다.' The darker the sky is, the ___ the stars are.",
            "options": [
              "bright",
              "brighter",
              "brightest",
              "more bright"
            ],
            "answer": 1,
            "explain": "bright는 1음절 단어로 -er을 붙여 brighter가 된다."
          },
          {
            "q": "The ___ the road is, the more dangerous it becomes. (길이 좁을수록 더 위험하다)",
            "options": [
              "narrow",
              "narrower",
              "narrowest",
              "more narrow"
            ],
            "answer": 1,
            "explain": "narrow는 -er을 붙여 narrower로 비교급을 만든다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 말은? The ___ you give, the ___ you receive. (많이 줄수록 많이 받는다)",
            "options": [
              "more, more",
              "much, much",
              "many, many",
              "most, most"
            ],
            "answer": 0,
            "explain": "much의 비교급 more가 두 절 모두에 들어간다. 앞뒤 the more, the more가 자연스럽다."
          },
          {
            "q": "The faster you drive, the ___ it is. (빨리 운전할수록 더 위험하다)",
            "options": [
              "dangerous",
              "dangerouser",
              "more dangerous",
              "most dangerous"
            ],
            "answer": 2,
            "explain": "dangerous는 긴 형용사이므로 more dangerous로 비교급을 만든다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것은? '많이 웃을수록 더 행복해진다.'",
            "options": [
              "The more you smile, the happier you become.",
              "The much you smile, the happy you become.",
              "More you smile, happier you become.",
              "The more you smile, the more happy you become."
            ],
            "answer": 0,
            "explain": "smile은 more로, happy는 happier로 비교급을 만들고 각각 the를 붙인다."
          },
          {
            "q": "The ___ we wait, the angrier she will be. (오래 기다릴수록 더 화낼 것이다)",
            "options": [
              "long",
              "longer",
              "longest",
              "more long"
            ],
            "answer": 1,
            "explain": "long은 1음절 단어로 -er을 붙여 longer가 된다."
          },
          {
            "q": "밑줄 친 부분을 바르게 고친 것은? The more you try, the good you get. → the good을 ___",
            "options": [
              "good",
              "gooder",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "good의 비교급은 불규칙형 better이다. 두 번째 절도 비교급을 써야 한다."
          },
          {
            "q": "The bigger the city is, the ___ people live there. (도시가 클수록 더 많은 사람이 산다)",
            "options": [
              "much",
              "many",
              "more",
              "most"
            ],
            "answer": 2,
            "explain": "셀 수 있는 명사 people 앞이므로 many의 비교급 more를 쓴다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "The more you know, the more you want to know.",
              "The hotter it gets, the more water we drink.",
              "The more fast you run, the sooner you finish.",
              "The louder the music is, the more excited we feel."
            ],
            "answer": 2,
            "explain": "fast의 비교급은 faster이다. 'the more fast'가 아니라 'the faster'로 써야 한다."
          },
          {
            "q": "The ___ you climb, the thinner the air becomes. (높이 오를수록 공기가 더 희박하다)",
            "options": [
              "high",
              "higher",
              "highest",
              "more high"
            ],
            "answer": 1,
            "explain": "high는 1음절 단어로 -er을 붙여 higher가 된다."
          },
          {
            "q": "The more careful you are, the ___ mistakes you make. (조심할수록 실수를 덜 한다)",
            "options": [
              "few",
              "fewer",
              "less",
              "little"
            ],
            "answer": 1,
            "explain": "셀 수 있는 명사 mistakes 앞에서는 few의 비교급 fewer를 쓴다. '더 적은 실수'를 뜻한다."
          },
          {
            "q": "The deeper the water is, the ___ it looks. (물이 깊을수록 더 어둡게 보인다)",
            "options": [
              "dark",
              "darker",
              "darkest",
              "more dark"
            ],
            "answer": 1,
            "explain": "dark는 1음절 단어로 -er을 붙여 darker가 된다."
          }
        ],
        "sa": [
          {
            "q": "빈칸을 채우세요: The more you practice, ___ better you become. (연습할수록 더 잘한다)",
            "answers": [
              "the"
            ],
            "explain": "두 번째 절도 「the + 비교급」이므로 the가 들어간다."
          },
          {
            "q": "high의 비교급을 쓰세요: The ___ it is, the colder it is.",
            "answers": [
              "higher",
              "the higher"
            ],
            "explain": "high는 1음절 단어로 -er을 붙여 higher가 된다."
          },
          {
            "q": "good의 비교급 한 단어를 쓰세요: The more we practice, the ___ we play.",
            "answers": [
              "better",
              "the better"
            ],
            "explain": "good/well의 불규칙 비교급은 better이다."
          },
          {
            "q": "much의 비교급을 넣으세요: The ___ you read, the more you know. (많이 읽을수록)",
            "answers": [
              "more",
              "the more"
            ],
            "explain": "much의 비교급은 more이다. 앞 절도 the more로 쓴다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The longer you wait, the ___ she will be. (angry)",
            "answers": [
              "angrier",
              "the angrier"
            ],
            "explain": "angry는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 angrier가 된다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The faster you walk, the ___ you arrive. (early)",
            "answers": [
              "earlier",
              "the earlier"
            ],
            "explain": "early는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 earlier가 된다."
          },
          {
            "q": "빈칸을 채우세요: ___ harder you try, the stronger you become. (앞 절 시작 부분)",
            "answers": [
              "the"
            ],
            "explain": "「the 비교급, the 비교급」 구문은 앞 절도 The로 시작한다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The more nervous, the ___ mistakes you make. (many, '더 많은')",
            "answers": [
              "more",
              "the more"
            ],
            "explain": "many의 비교급은 more이다."
          },
          {
            "q": "little의 비교급 한 단어를 쓰세요: The ___ you sleep, the more tired you feel. (적게 잘수록)",
            "answers": [
              "less",
              "the less"
            ],
            "explain": "little의 불규칙 비교급은 less이다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The more expensive it is, the ___ it is. (good)",
            "answers": [
              "better",
              "the better"
            ],
            "explain": "good의 비교급은 불규칙형 better이다."
          }
        ]
      },
      {
        "id": "2-B-U3",
        "unit": 3,
        "title": "주어–동사 수 일치",
        "concept": "주어가 단수인지 복수인지 확인해 동사를 일치시킨다(-thing/each/every·단수, A and B·복수, 수식어구에 속지 않기).",
        "mc": [
          {
            "q": "Every child ___ love.",
            "options": [
              "need",
              "needs",
              "are needing",
              "do need"
            ],
            "answer": 1,
            "explain": "「every+단수명사」는 단수 취급이므로 동사에 -s를 붙여 needs."
          },
          {
            "q": "Tom and Jerry ___ together every afternoon.",
            "options": [
              "plays",
              "play",
              "is playing",
              "has played"
            ],
            "answer": 1,
            "explain": "「A and B」는 복수 주어이므로 동사원형 play."
          },
          {
            "q": "The students ___ in the classroom.",
            "options": [
              "is",
              "am",
              "are",
              "be"
            ],
            "answer": 2,
            "explain": "복수 주어 The students에는 복수형 be동사 are."
          },
          {
            "q": "The news ___ surprising.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "news는 형태는 -s로 끝나지만 단수 취급이므로 is."
          },
          {
            "q": "Each of the boys ___ a bike.",
            "options": [
              "have",
              "has",
              "are",
              "do"
            ],
            "answer": 1,
            "explain": "「each of+복수명사」의 핵심 주어는 each(단수) → has."
          },
          {
            "q": "Water ___ at 100°C.",
            "options": [
              "boil",
              "are boiling",
              "boils",
              "boiled"
            ],
            "answer": 2,
            "explain": "물질명사 Water는 단수 취급, 현재의 일반적 사실 → boils."
          },
          {
            "q": "My friends ___ lunch at noon.",
            "options": [
              "has",
              "haves",
              "have",
              "is having"
            ],
            "answer": 2,
            "explain": "복수 주어 My friends에는 동사원형 have."
          },
          {
            "q": "Everybody ___ summer vacation.",
            "options": [
              "like",
              "likes",
              "are liking",
              "do like"
            ],
            "answer": 1,
            "explain": "-body로 끝나는 대명사(Everybody)는 단수 취급 → likes."
          },
          {
            "q": "Something ___ wrong with my phone.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "-thing으로 끝나는 대명사(Something)는 단수 취급 → is."
          },
          {
            "q": "Everyone in my class ___ a smartphone.",
            "options": [
              "have",
              "has",
              "are having",
              "do have"
            ],
            "answer": 1,
            "explain": "주어는 Everyone(단수), in my class는 수식어구이므로 has."
          },
          {
            "q": "The boys on the team ___ tall.",
            "options": [
              "is",
              "are",
              "was",
              "has"
            ],
            "answer": 1,
            "explain": "주어는 The boys(복수), on the team은 수식어구이므로 are."
          },
          {
            "q": "A number of people ___ waiting outside.",
            "options": [
              "is",
              "was",
              "are",
              "has"
            ],
            "answer": 2,
            "explain": "「a number of+복수명사」는 '많은 ~'로 복수 취급 → are."
          },
          {
            "q": "The number of students ___ growing.",
            "options": [
              "are",
              "is",
              "were",
              "have"
            ],
            "answer": 1,
            "explain": "「the number of ~」는 '~의 수'로 단수 취급 → is."
          },
          {
            "q": "Every morning, my father ___ coffee.",
            "options": [
              "drink",
              "drinks",
              "are drinking",
              "do drink"
            ],
            "answer": 1,
            "explain": "주어 my father(3인칭 단수) → drinks."
          },
          {
            "q": "My parents ___ in a hospital.",
            "options": [
              "works",
              "work",
              "is working",
              "has worked"
            ],
            "answer": 1,
            "explain": "복수 주어 My parents에는 동사원형 work."
          },
          {
            "q": "Math ___ my favorite subject.",
            "options": [
              "are",
              "is",
              "were",
              "have"
            ],
            "answer": 1,
            "explain": "과목명 Math는 단수 취급 → is."
          },
          {
            "q": "These books ___ interesting.",
            "options": [
              "looks",
              "look",
              "is looking",
              "looks like"
            ],
            "answer": 1,
            "explain": "복수 주어 These books에는 동사원형 look."
          },
          {
            "q": "Each student ___ a locker.",
            "options": [
              "have",
              "are having",
              "has",
              "do have"
            ],
            "answer": 2,
            "explain": "「each+단수명사」는 단수 취급 → has."
          },
          {
            "q": "Everything ___ ready for the party.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "-thing으로 끝나는 Everything은 단수 취급 → is."
          },
          {
            "q": "Apples and oranges ___ my favorite fruits.",
            "options": [
              "is",
              "are",
              "was",
              "has"
            ],
            "answer": 1,
            "explain": "「A and B」는 복수 주어이므로 are."
          },
          {
            "q": "My sister and I ___ good friends.",
            "options": [
              "is",
              "am",
              "are",
              "was"
            ],
            "answer": 2,
            "explain": "「A and I」는 복수(we) 취급이므로 are."
          },
          {
            "q": "Nobody ___ the answer.",
            "options": [
              "know",
              "knows",
              "are knowing",
              "do know"
            ],
            "answer": 1,
            "explain": "-body로 끝나는 Nobody는 단수 취급 → knows."
          },
          {
            "q": "One of my friends ___ from Canada.",
            "options": [
              "are",
              "come",
              "comes",
              "do come"
            ],
            "answer": 2,
            "explain": "「one of+복수명사」의 핵심 주어는 one(단수) → comes."
          },
          {
            "q": "The girl with the red bags ___ my cousin.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "주어는 The girl(단수), with the red bags는 수식어구 → is."
          },
          {
            "q": "Every student in the classes ___ a name tag.",
            "options": [
              "have",
              "has",
              "are",
              "do"
            ],
            "answer": 1,
            "explain": "주어는 Every student(단수), in the classes는 수식어구 → has."
          },
          {
            "q": "The children ___ very noisy.",
            "options": [
              "is",
              "was",
              "are",
              "has"
            ],
            "answer": 2,
            "explain": "child의 복수형 children은 복수 취급 → are."
          },
          {
            "q": "My dog and my cat ___ every morning.",
            "options": [
              "fights",
              "fight",
              "is fighting",
              "fights each"
            ],
            "answer": 1,
            "explain": "「A and B」는 복수 주어이므로 동사원형 fight."
          },
          {
            "q": "Each of us ___ a different opinion.",
            "options": [
              "have",
              "has",
              "are having",
              "do have"
            ],
            "answer": 1,
            "explain": "「each of+복수」의 핵심 주어는 each(단수) → has."
          },
          {
            "q": "The information ___ useful.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "information은 셀 수 없는 명사로 단수 취급 → is."
          },
          {
            "q": "Both of the boys ___ soccer.",
            "options": [
              "likes",
              "like",
              "is liking",
              "does like"
            ],
            "answer": 1,
            "explain": "「both of ~」는 '둘 다'로 복수 취급 → like."
          },
          {
            "q": "There ___ many books on the desk.",
            "options": [
              "is",
              "was",
              "are",
              "has"
            ],
            "answer": 2,
            "explain": "There is/are 구문은 뒤의 주어에 일치, many books(복수) → are."
          },
          {
            "q": "There ___ a cat under the table.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "There is/are 구문에서 뒤의 주어 a cat(단수) → is."
          },
          {
            "q": "Everybody ___ to be happy.",
            "options": [
              "want",
              "wants",
              "are wanting",
              "do want"
            ],
            "answer": 1,
            "explain": "-body로 끝나는 Everybody는 단수 취급 → wants."
          },
          {
            "q": "A: What does your brother do at night?  B: He ___ TV every night.",
            "options": [
              "watch",
              "watches",
              "are watching",
              "do watch"
            ],
            "answer": 1,
            "explain": "주어 He(3인칭 단수)의 일반동사 현재형 → watches."
          },
          {
            "q": "The students and the teacher ___ in the gym.",
            "options": [
              "is",
              "are",
              "was",
              "has"
            ],
            "answer": 1,
            "explain": "「A and B」는 복수 주어이므로 are."
          },
          {
            "q": "Someone ___ knocking at the door.",
            "options": [
              "are",
              "is",
              "were",
              "have"
            ],
            "answer": 1,
            "explain": "-one으로 끝나는 Someone은 단수 취급 → is."
          },
          {
            "q": "Each country ___ its own flag.",
            "options": [
              "have",
              "has",
              "are",
              "do"
            ],
            "answer": 1,
            "explain": "「each+단수명사」는 단수 취급 → has."
          },
          {
            "q": "A number of cars ___ parked here.",
            "options": [
              "is",
              "are",
              "was",
              "has"
            ],
            "answer": 1,
            "explain": "「a number of+복수명사」는 복수 취급 → are."
          },
          {
            "q": "The people in the room ___ quiet.",
            "options": [
              "is",
              "was",
              "are",
              "has"
            ],
            "answer": 2,
            "explain": "people은 복수 취급, in the room은 수식어구 → are."
          },
          {
            "q": "My teacher, as well as the students, ___ excited.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "「A as well as B」는 A(My teacher, 단수)에 일치 → is."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"The students ___ in the classroom.\"",
            "answers": [
              "are"
            ],
            "explain": "복수 주어 The students → are."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Every child ___ (need) love.\"",
            "answers": [
              "needs"
            ],
            "explain": "「every+단수명사」는 단수 취급 → needs."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Each of the boys ___ (have) a bike.\"",
            "answers": [
              "has"
            ],
            "explain": "「each of+복수」의 핵심 주어는 each(단수) → has."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Tom and Jerry ___ (play) together.\"",
            "answers": [
              "play"
            ],
            "explain": "「A and B」는 복수 주어 → play."
          },
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"The news ___ surprising.\"",
            "answers": [
              "is"
            ],
            "explain": "news는 단수 취급 → is."
          },
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"A number of students ___ absent today.\"",
            "answers": [
              "are"
            ],
            "explain": "「a number of+복수」는 복수 취급 → are."
          },
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"The number of cars ___ increasing.\"",
            "answers": [
              "is"
            ],
            "explain": "「the number of ~」는 단수 취급 → is."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Everybody ___ (like) summer vacation.\"",
            "answers": [
              "likes"
            ],
            "explain": "-body로 끝나는 Everybody는 단수 취급 → likes."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Everyone in my class ___ (have) a phone.\"",
            "answers": [
              "has"
            ],
            "explain": "주어는 Everyone(단수), in my class는 수식어구 → has."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"My parents ___ (work) in a hospital.\"",
            "answers": [
              "work"
            ],
            "explain": "복수 주어 My parents → work."
          }
        ]
      },
      {
        "id": "2-B-U4",
        "unit": 4,
        "title": "지각동사",
        "concept": "지각동사(see, watch, hear, listen to, feel, smell 등)의 목적격보어로는 to부정사가 아니라 동사원형 또는 -ing(진행·생생함)를 쓴다.",
        "mc": [
          {
            "q": "I saw him ___ fast toward the bus stop.",
            "options": [
              "to run",
              "run",
              "ran",
              "runs"
            ],
            "answer": 1,
            "explain": "지각동사 saw의 목적격보어는 동사원형 run을 쓴다. to run(X), ran(X), runs(X)."
          },
          {
            "q": "She heard the baby ___ in the next room.",
            "options": [
              "cry",
              "to cry",
              "cried",
              "cries"
            ],
            "answer": 0,
            "explain": "지각동사 heard 뒤 목적격보어는 동사원형 cry 또는 crying. to cry는 틀린 함정이다."
          },
          {
            "q": "We watched them ___ on the stage all night.",
            "options": [
              "to dance",
              "danced",
              "dance",
              "dances"
            ],
            "answer": 2,
            "explain": "지각동사 watched의 목적격보어는 동사원형 dance(또는 dancing). to dance는 쓰지 않는다."
          },
          {
            "q": "다음 중 밑줄 친 부분이 어법상 옳은 것은?",
            "options": [
              "I felt something to move.",
              "I felt something move.",
              "I felt something moves.",
              "I felt something to moving."
            ],
            "answer": 1,
            "explain": "지각동사 felt 뒤에는 동사원형 move나 moving을 쓴다. to move·moves·to moving 모두 틀리다."
          },
          {
            "q": "He saw the sun ___ over the sea this morning.",
            "options": [
              "rise",
              "to rise",
              "rose",
              "to rising"
            ],
            "answer": 0,
            "explain": "지각동사 saw의 목적격보어로 동사원형 rise가 알맞다. rising도 가능하지만 rose·to rise는 안 된다."
          },
          {
            "q": "They heard a dog ___ loudly outside.",
            "options": [
              "to bark",
              "barks",
              "bark",
              "to barking"
            ],
            "answer": 2,
            "explain": "지각동사 heard 뒤 목적격보어는 동사원형 bark(또는 barking). to bark는 틀리다."
          },
          {
            "q": "다음 빈칸에 들어갈 수 없는 것은?  I watched him ___ .",
            "options": [
              "swim",
              "swimming",
              "to swim",
              "jump"
            ],
            "answer": 2,
            "explain": "지각동사 watched의 목적격보어로는 동사원형이나 -ing만 가능하다. to swim은 쓸 수 없다."
          },
          {
            "q": "I noticed her ___ at me from across the street.",
            "options": [
              "to smile",
              "smile",
              "smiled",
              "to smiling"
            ],
            "answer": 1,
            "explain": "notice도 지각동사처럼 목적격보어에 동사원형 smile(또는 smiling)을 쓴다. to smile은 틀리다."
          },
          {
            "q": "We saw the players ___ across the field.",
            "options": [
              "ran",
              "to run",
              "running",
              "runs"
            ],
            "answer": 2,
            "explain": "지각동사 saw 뒤에는 동사원형 run 또는 -ing running을 쓴다. running이 정답이다."
          },
          {
            "q": "I saw a bird ___ over the lake.",
            "options": [
              "fly",
              "to fly",
              "flew",
              "to flying"
            ],
            "answer": 0,
            "explain": "지각동사 saw의 목적격보어는 동사원형 fly(또는 flying). flew·to fly는 안 된다."
          },
          {
            "q": "She heard someone ___ her name.",
            "options": [
              "to call",
              "called",
              "call",
              "to calling"
            ],
            "answer": 2,
            "explain": "지각동사 heard 뒤 목적격보어는 동사원형 call(또는 calling). to call은 틀리다."
          },
          {
            "q": "We watched the sun slowly ___ behind the hills.",
            "options": [
              "set",
              "to set",
              "sets",
              "to setting"
            ],
            "answer": 0,
            "explain": "지각동사 watched의 목적격보어로 동사원형 set이 알맞다. to set·sets는 안 된다."
          },
          {
            "q": "He felt the ground ___ during the earthquake.",
            "options": [
              "to shake",
              "shakes",
              "shake",
              "to shaking"
            ],
            "answer": 2,
            "explain": "지각동사 felt 뒤에는 동사원형 shake(또는 shaking)를 쓴다. to shake는 틀리다."
          },
          {
            "q": "I saw the children ___ soccer in the park.",
            "options": [
              "played",
              "playing",
              "to play",
              "plays"
            ],
            "answer": 1,
            "explain": "지각동사 saw의 목적격보어로 동사원형 play나 -ing playing을 쓴다. playing이 정답이다."
          },
          {
            "q": "They heard the rain ___ on the roof.",
            "options": [
              "to fall",
              "fall",
              "fell",
              "to falling"
            ],
            "answer": 1,
            "explain": "지각동사 heard 뒤 목적격보어는 동사원형 fall(또는 falling). to fall·fell은 안 된다."
          },
          {
            "q": "She noticed him ___ the room quietly.",
            "options": [
              "enter",
              "to enter",
              "entered",
              "enters"
            ],
            "answer": 0,
            "explain": "지각동사처럼 쓰인 notice의 목적격보어는 동사원형 enter(또는 entering). to enter는 틀리다."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "I heard him to sing.",
              "I heard him sing.",
              "I heard him sings.",
              "I heard him to singing."
            ],
            "answer": 1,
            "explain": "지각동사 heard의 목적격보어는 동사원형 sing이나 singing이다. to sing·sings·to singing은 모두 틀리다."
          },
          {
            "q": "We saw the baby ___ for the first time.",
            "options": [
              "to cry",
              "cries",
              "cry",
              "to crying"
            ],
            "answer": 2,
            "explain": "지각동사 saw 뒤 목적격보어는 동사원형 cry(또는 crying). to cry는 틀리다."
          },
          {
            "q": "She felt the door ___ behind her.",
            "options": [
              "open",
              "to open",
              "opened",
              "opens"
            ],
            "answer": 0,
            "explain": "지각동사 felt의 목적격보어로 동사원형 open(또는 opening)이 알맞다. to open은 안 된다."
          },
          {
            "q": "They heard the birds ___ in the trees.",
            "options": [
              "to chirp",
              "chirped",
              "chirping",
              "chirps"
            ],
            "answer": 2,
            "explain": "지각동사 heard 뒤에는 동사원형 chirp나 -ing chirping을 쓴다. chirping이 정답이다."
          },
          {
            "q": "I watched him ___ the street carefully.",
            "options": [
              "crossed",
              "to cross",
              "cross",
              "crosses"
            ],
            "answer": 2,
            "explain": "지각동사 watched의 목적격보어는 동사원형 cross(또는 crossing). to cross·crossed는 틀리다."
          },
          {
            "q": "We felt the whole house ___ .",
            "options": [
              "shake",
              "to shake",
              "shook",
              "shakes"
            ],
            "answer": 0,
            "explain": "지각동사 felt 뒤 목적격보어는 동사원형 shake(또는 shaking). to shake·shook은 안 된다."
          },
          {
            "q": "He heard someone ___ in the hallway.",
            "options": [
              "to laugh",
              "laughing",
              "laughed",
              "laughs"
            ],
            "answer": 1,
            "explain": "지각동사 heard의 목적격보어로 동사원형 laugh나 -ing laughing을 쓴다. laughing이 정답이다."
          },
          {
            "q": "I saw her ___ on the stage right now.",
            "options": [
              "to dance",
              "danced",
              "dancing",
              "dances"
            ],
            "answer": 2,
            "explain": "지금 진행 중인 생생한 동작이므로 -ing dancing이 자연스럽다. to dance는 틀리다."
          },
          {
            "q": "I heard him ___ the piano beautifully.",
            "options": [
              "play",
              "to play",
              "played",
              "plays"
            ],
            "answer": 0,
            "explain": "지각동사 heard의 목적격보어는 동사원형 play(또는 playing). to play·played는 안 된다."
          },
          {
            "q": "We saw a star ___ from the sky.",
            "options": [
              "to fall",
              "fell",
              "fall",
              "to falling"
            ],
            "answer": 2,
            "explain": "지각동사 saw 뒤 목적격보어는 동사원형 fall(또는 falling). to fall·fell은 틀리다."
          },
          {
            "q": "She watched the children ___ in the yard.",
            "options": [
              "to play",
              "played",
              "play",
              "plays"
            ],
            "answer": 2,
            "explain": "지각동사 watched의 목적격보어는 동사원형 play(또는 playing). to play·played는 안 된다."
          },
          {
            "q": "I felt the wind ___ against my face.",
            "options": [
              "blew",
              "to blow",
              "blow",
              "blows"
            ],
            "answer": 2,
            "explain": "지각동사 felt 뒤에는 동사원형 blow(또는 blowing). to blow·blew는 틀리다."
          },
          {
            "q": "They saw the train ___ into the station.",
            "options": [
              "to come",
              "came",
              "come",
              "to coming"
            ],
            "answer": 2,
            "explain": "지각동사 saw의 목적격보어는 동사원형 come(또는 coming). to come·came은 안 된다."
          },
          {
            "q": "다음 중 밑줄 친 부분을 잘못 고친 것은?  I saw him to open the box.",
            "options": [
              "to open → open",
              "to open → opening",
              "to open → opened",
              "밑줄은 open으로 고쳐야 한다"
            ],
            "answer": 2,
            "explain": "지각동사 뒤 목적격보어는 open(동사원형)이나 opening(-ing)으로 고쳐야 한다. opened(과거형)로는 고칠 수 없다."
          },
          {
            "q": "We saw the rain ___ hard outside the window.",
            "options": [
              "to fall",
              "falling",
              "fell",
              "falls"
            ],
            "answer": 1,
            "explain": "지각동사 saw의 목적격보어로 동사원형 fall이나 -ing falling을 쓴다. falling이 정답이다."
          },
          {
            "q": "Listen! Can you hear the phone ___ ?",
            "options": [
              "to ring",
              "rings",
              "ring",
              "to ringing"
            ],
            "answer": 2,
            "explain": "지각동사 hear의 목적격보어는 동사원형 ring(또는 ringing). to ring·rings는 안 된다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I watched them dance.",
              "I watched them dancing.",
              "I watched them to dance.",
              "I watched them run."
            ],
            "answer": 2,
            "explain": "지각동사 watched 뒤에는 동사원형이나 -ing만 온다. to dance는 틀린 문장이다."
          },
          {
            "q": "I smelled something ___ in the kitchen.",
            "options": [
              "to burn",
              "burned",
              "burning",
              "burns"
            ],
            "answer": 2,
            "explain": "smell도 지각동사로, 목적격보어에 동사원형 burn이나 -ing burning을 쓴다. burning이 정답이다."
          },
          {
            "q": "다음 빈칸에 알맞은 것은?  We ___ him climb the wall.",
            "options": [
              "wanted",
              "watched",
              "told",
              "asked"
            ],
            "answer": 1,
            "explain": "목적격보어로 동사원형 climb이 왔으므로 지각동사 watched가 알맞다. want·tell·ask는 to부정사를 취한다."
          },
          {
            "q": "She listened to him ___ a song.",
            "options": [
              "to sing",
              "sang",
              "sing",
              "sings"
            ],
            "answer": 2,
            "explain": "listen to도 지각동사로, 목적격보어에 동사원형 sing(또는 singing)을 쓴다. to sing은 틀리다."
          },
          {
            "q": "다음 중 지각동사가 아닌 것은?",
            "options": [
              "watch",
              "hear",
              "want",
              "feel"
            ],
            "answer": 2,
            "explain": "watch·hear·feel은 지각동사이지만 want는 to부정사를 목적격보어로 취하는 동사이다."
          },
          {
            "q": "I saw him ___ and ___ to the music.",
            "options": [
              "to jump / to move",
              "jump / move",
              "jumped / moved",
              "jumps / moves"
            ],
            "answer": 1,
            "explain": "지각동사 saw의 목적격보어는 두 개 모두 동사원형 jump·move를 쓴다. to부정사·과거형은 안 된다."
          },
          {
            "q": "다음 우리말을 영어로 옳게 옮긴 것은?  '나는 그가 춤추는 것을 보았다.'",
            "options": [
              "I saw him to dance.",
              "I saw him dance.",
              "I saw him danced.",
              "I saw him dances."
            ],
            "answer": 1,
            "explain": "지각동사 saw의 목적격보어는 동사원형 dance(또는 dancing). to dance·danced·dances는 틀리다."
          },
          {
            "q": "Everyone felt the bridge ___ in the strong wind.",
            "options": [
              "moving",
              "to move",
              "moved",
              "to moving"
            ],
            "answer": 0,
            "explain": "지각동사 felt의 목적격보어로 동사원형 move나 -ing moving을 쓴다. moving이 정답이다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  She heard the baby ___ .  (cry)",
            "answers": [
              "cry",
              "crying"
            ],
            "explain": "지각동사 heard의 목적격보어는 동사원형 cry 또는 -ing crying. to cry는 틀리다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  We watched them ___ on the stage.  (dance)",
            "answers": [
              "dance",
              "dancing"
            ],
            "explain": "지각동사 watched의 목적격보어는 동사원형 dance 또는 -ing dancing."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  I saw a bird ___ over the lake.  (fly)",
            "answers": [
              "fly",
              "flying"
            ],
            "explain": "지각동사 saw의 목적격보어는 동사원형 fly 또는 -ing flying."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  He felt the ground ___ .  (shake)",
            "answers": [
              "shake",
              "shaking"
            ],
            "explain": "지각동사 felt의 목적격보어는 동사원형 shake 또는 -ing shaking."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  I heard him ___ the piano.  (play)",
            "answers": [
              "play",
              "playing"
            ],
            "explain": "지각동사 heard의 목적격보어는 동사원형 play 또는 -ing playing."
          },
          {
            "q": "밑줄 친 틀린 부분을 바르게 고치세요.  I saw him to run fast.  →  I saw him ___ fast.",
            "answers": [
              "run",
              "running"
            ],
            "explain": "지각동사 뒤 목적격보어는 to run(X)이 아니라 동사원형 run 또는 running으로 고친다."
          },
          {
            "q": "밑줄 친 틀린 부분을 바르게 고치세요.  She heard someone to call her name.  →  She heard someone ___ her name.",
            "answers": [
              "call",
              "calling"
            ],
            "explain": "지각동사 heard의 목적격보어는 to call(X)이 아니라 동사원형 call 또는 calling."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  They heard a dog ___ loudly.  (bark)",
            "answers": [
              "bark",
              "barking"
            ],
            "explain": "지각동사 heard의 목적격보어는 동사원형 bark 또는 -ing barking."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.  We saw the sun ___ behind the hills.  (set)",
            "answers": [
              "set",
              "setting"
            ],
            "explain": "지각동사 saw의 목적격보어는 동사원형 set 또는 -ing setting."
          },
          {
            "q": "밑줄 친 틀린 부분을 바르게 고치세요.  I felt the wind to blow.  →  I felt the wind ___ .",
            "answers": [
              "blow",
              "blowing"
            ],
            "explain": "지각동사 felt의 목적격보어는 to blow(X)가 아니라 동사원형 blow 또는 blowing."
          }
        ]
      },
      {
        "id": "2-B-U5",
        "unit": 5,
        "title": "목적격 관계대명사",
        "concept": "목적격 관계대명사는 사람이면 who(m)/that, 사물이면 which/that을 쓰고 뒤에 '주어+동사'가 오며 생략할 수 있다.",
        "mc": [
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThis is the book ___ I bought yesterday.",
            "options": [
              "who",
              "which",
              "whose",
              "what"
            ],
            "answer": 1,
            "explain": "선행사 the book이 사물이고 목적격이므로 which(또는 that)를 쓴다. 뒤에 'I bought(주어+동사)'가 온다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nShe is the girl ___ I met at the party.",
            "options": [
              "which",
              "whom",
              "whose",
              "it"
            ],
            "answer": 1,
            "explain": "선행사 the girl이 사람이고 목적격이므로 whom(또는 who/that)을 쓴다. 뒤에 'I met'이 온다."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것을 고르시오.\nThat is the movie ___ we watched last night.",
            "options": [
              "which",
              "that",
              "who",
              "생략"
            ],
            "answer": 2,
            "explain": "선행사 the movie는 사물이므로 which/that을 쓰거나 목적격이라 생략할 수 있다. 사람에 쓰는 who는 올 수 없다."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것을 고르시오.\nHe is the singer ___ everyone loves.",
            "options": [
              "whom",
              "who",
              "that",
              "which"
            ],
            "answer": 3,
            "explain": "선행사 the singer는 사람이므로 who(m)/that을 쓴다. 사물에 쓰는 which는 올 수 없다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르시오.",
            "options": [
              "This is the cake which my mom made it.",
              "This is the cake which my mom made.",
              "This is the cake who my mom made.",
              "This is the cake which made my mom."
            ],
            "answer": 1,
            "explain": "목적격 관계대명사 which 뒤의 동사 made의 목적어 자리는 비어야 한다. it을 다시 쓰면 안 되고, 사물이므로 who도 틀리다."
          },
          {
            "q": "두 문장을 하나로 바르게 연결한 것을 고르시오.\nHere is the pen. You lost it.",
            "options": [
              "Here is the pen who you lost.",
              "Here is the pen which you lost it.",
              "Here is the pen that you lost.",
              "Here is the pen that lost you."
            ],
            "answer": 2,
            "explain": "the pen은 사물이고 lost의 목적어이므로 that/which를 쓰고, 대명사 it은 삭제한다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe bag ___ you bought looks nice.",
            "options": [
              "who",
              "whom",
              "that",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 the bag은 사물이고 목적격이므로 that(또는 which)을 쓴다. 뒤에 'you bought'가 온다."
          },
          {
            "q": "밑줄 친 관계대명사를 생략할 수 있는 문장을 고르시오.",
            "options": [
              "I have a friend who lives in Busan.",
              "The book which is on the desk is mine.",
              "This is the song that I like.",
              "The boy who broke the window ran away."
            ],
            "answer": 2,
            "explain": "목적격 관계대명사(that I like)는 생략할 수 있다. 나머지는 모두 주격이라 생략할 수 없다."
          },
          {
            "q": "빈칸에 which를 쓸 수 있는 문장을 고르시오.",
            "options": [
              "She is the teacher ___ I respect.",
              "The food ___ he cooked was delicious.",
              "They are the friends ___ I trust.",
              "He is the boy ___ I met."
            ],
            "answer": 1,
            "explain": "which는 사물 선행사에 쓴다. the food만 사물이고 나머지는 모두 사람이다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것을 고르시오.\nThe people ___ we met were kind.",
            "options": [
              "which",
              "whom",
              "whose",
              "it"
            ],
            "answer": 1,
            "explain": "선행사 the people은 사람이고 목적격이므로 whom(또는 who/that)을 쓴다."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 것을 고르시오.",
            "options": [
              "This is the house that they built.",
              "The song which I love is popular.",
              "She is the girl whom I like.",
              "That is the movie which we saw it."
            ],
            "answer": 3,
            "explain": "목적격 관계대명사 which 뒤에는 목적어 it을 다시 쓰지 않는다. 'which we saw'가 옳다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 수 있는 것을 고르시오.\nThe man ___ I saw was tall.\nThe car ___ I saw was red.",
            "options": [
              "who",
              "which",
              "that",
              "whom"
            ],
            "answer": 2,
            "explain": "that은 사람과 사물 선행사에 모두 쓸 수 있다. who는 사물에, which는 사람에 쓸 수 없다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르시오.\n'그가 요리한 그 음식은 맛있었다.'",
            "options": [
              "The food who he cooked was delicious.",
              "The food which he cooked was delicious.",
              "The food which cooked he was delicious.",
              "The food which he cooked it was delicious."
            ],
            "answer": 1,
            "explain": "the food는 사물이므로 which를 쓰고 뒤에 'he cooked(주어+동사)'가 온다. it은 반복하지 않는다."
          },
          {
            "q": "다음 중 주격 관계대명사가 쓰인 문장을 고르시오.",
            "options": [
              "This is the book that I read.",
              "The dog that runs fast is mine.",
              "She is the girl whom I met.",
              "The cake which mom made was sweet."
            ],
            "answer": 1,
            "explain": "'that runs fast'는 뒤에 동사가 바로 와서 주격이다. 나머지는 뒤에 '주어+동사'가 오는 목적격이다."
          },
          {
            "q": "다음 중 목적격 관계대명사가 쓰인 문장을 고르시오.",
            "options": [
              "I know a boy who plays soccer.",
              "The girl who is singing is my sister.",
              "The pen which you lost is here.",
              "The bird which sings is beautiful."
            ],
            "answer": 2,
            "explain": "'which you lost'는 뒤에 '주어(you)+동사(lost)'가 와서 목적격이다. 나머지는 뒤에 동사가 바로 오는 주격이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오.\nThat is the house ___ they built.",
            "options": [
              "who",
              "whom",
              "that",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 the house는 사물이고 목적격이므로 that(또는 which)을 쓴다."
          },
          {
            "q": "다음 문장에서 생략된 관계대명사가 들어갈 위치를 고르시오.\nThis is (①) the (②) picture (③) you (④) drew.",
            "options": [
              "①",
              "②",
              "③",
              "④"
            ],
            "answer": 2,
            "explain": "선행사 the picture 바로 뒤(③)에 목적격 관계대명사가 생략되었다. 'the picture (that) you drew'"
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe teacher ___ I respect is strict.",
            "options": [
              "which",
              "whom",
              "whose",
              "what"
            ],
            "answer": 1,
            "explain": "선행사 the teacher는 사람이고 목적격이므로 whom(또는 who/that)을 쓴다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르시오.\nA: Which book do you want?\nB: I want the book ___ you recommended.",
            "options": [
              "who",
              "that",
              "whose",
              "what"
            ],
            "answer": 1,
            "explain": "선행사 the book은 사물이고 목적격이므로 that(또는 which)을 쓴다. 뒤에 'you recommended'가 온다."
          },
          {
            "q": "다음 중 어법상 옳지 않은 문장을 고르시오.",
            "options": [
              "She is the girl I like.",
              "This is the cake I made.",
              "The boy which I met is kind.",
              "The song I heard was nice."
            ],
            "answer": 2,
            "explain": "the boy는 사람이므로 which를 쓸 수 없다. who(m)/that을 써야 한다. 나머지는 목적격 관계대명사가 생략된 옳은 문장이다."
          },
          {
            "q": "두 문장을 하나로 바르게 연결한 것을 고르시오.\nShe is the girl. I met her yesterday.",
            "options": [
              "She is the girl which I met yesterday.",
              "She is the girl whom I met yesterday.",
              "She is the girl whom I met her yesterday.",
              "She is the girl who met I yesterday."
            ],
            "answer": 1,
            "explain": "the girl은 사람이고 met의 목적어이므로 whom(who/that)을 쓰고, 대명사 her는 삭제한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오.\nThe information ___ we need is on the website.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 the information은 사물이고 목적격이므로 which(또는 that)를 쓴다."
          },
          {
            "q": "다음 중 관계대명사를 생략할 수 없는 문장을 고르시오.",
            "options": [
              "This is the bike that I want.",
              "The girl who knows the answer is smart.",
              "The letter which he wrote is long.",
              "The guests whom I invited came."
            ],
            "answer": 1,
            "explain": "'who knows'는 주격 관계대명사라서 생략할 수 없다. 나머지는 모두 목적격이라 생략할 수 있다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르시오.\n'이것은 그가 쓴 편지다.'",
            "options": [
              "This is the letter who he wrote.",
              "This is the letter which he wrote.",
              "This is the letter which wrote he.",
              "This is the letter he wrote it."
            ],
            "answer": 1,
            "explain": "the letter는 사물이므로 which(또는 that, 생략)를 쓰고 뒤에 'he wrote'가 온다. it은 반복하지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오.\nHe is the friend ___ I trust the most.",
            "options": [
              "which",
              "whom",
              "whose",
              "what"
            ],
            "answer": 1,
            "explain": "선행사 the friend는 사람이고 목적격이므로 whom(또는 who/that)을 쓴다."
          },
          {
            "q": "다음 두 문장을 연결할 때 생략할 수 있는 관계대명사가 쓰인 것을 고르시오.\nThat is the picture. You drew it.",
            "options": [
              "That is the picture who drew you.",
              "That is the picture that you drew.",
              "That is the picture what you drew.",
              "That is the picture drew you that."
            ],
            "answer": 1,
            "explain": "목적격 관계대명사 that(=which)이 쓰였고, 목적격이라 'That is the picture you drew.'처럼 생략도 가능하다."
          },
          {
            "q": "다음 문장에서 어법상 어색한 부분을 고르시오.\nThe guests ①whom ②I ③invited ④them came late.",
            "options": [
              "①whom",
              "②I",
              "③invited",
              "④them"
            ],
            "answer": 3,
            "explain": "목적격 관계대명사 whom이 목적어 역할을 하므로 목적어 them을 다시 쓰면 안 된다. them을 삭제해야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오.\nThe bike ___ I want is expensive.",
            "options": [
              "who",
              "whom",
              "that",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 the bike는 사물이고 목적격이므로 that(또는 which)을 쓴다."
          },
          {
            "q": "다음 중 밑줄 친 that의 쓰임이 나머지와 다른 것을 고르시오.",
            "options": [
              "This is the book that I read.",
              "She is the girl that I like.",
              "The dog that barks is loud.",
              "That is the cake that mom made."
            ],
            "answer": 2,
            "explain": "'that barks'는 주격 관계대명사이고, 나머지는 뒤에 '주어+동사'가 오는 목적격 관계대명사이다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르시오.\nA: Who are they?\nB: They are the friends ___ I trust.",
            "options": [
              "which",
              "whom",
              "whose",
              "it"
            ],
            "answer": 1,
            "explain": "선행사 the friends는 사람이고 목적격이므로 whom(또는 who/that)을 쓴다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르시오.\n'그녀는 우리가 아는 소녀다.'",
            "options": [
              "She is the girl which we know.",
              "She is the girl whom we know.",
              "She is the girl whom we know her.",
              "She is the girl whom knows we."
            ],
            "answer": 1,
            "explain": "the girl은 사람이고 know의 목적어이므로 whom(who/that)을 쓰고 뒤에 'we know'가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오.\nThe song ___ I like is popular.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 the song은 사물이고 목적격이므로 which(또는 that)를 쓴다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르시오.",
            "options": [
              "The people who we met were kind.",
              "The people which we met were kind.",
              "The people we met them were kind.",
              "The people whom met we were kind."
            ],
            "answer": 0,
            "explain": "사람 선행사에 목적격으로 who(m)/that을 쓰고 뒤에 '주어+동사(we met)'가 온다. 사물용 which와 목적어 them 반복은 틀리다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르시오.\n( she / is / the girl / whom / I / met )",
            "options": [
              "She is the girl whom met I.",
              "She is the girl whom I met.",
              "She is whom the girl I met.",
              "She whom is the girl I met."
            ],
            "answer": 1,
            "explain": "'선행사(the girl) + 목적격 관계대명사(whom) + 주어(I) + 동사(met)' 순서로 배열한다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞지 않은 것을 고르시오.\nThis is the cake ___ my mom made.",
            "options": [
              "which",
              "that",
              "생략",
              "whom"
            ],
            "answer": 3,
            "explain": "the cake는 사물이므로 which/that을 쓰거나 목적격이라 생략할 수 있다. 사람에 쓰는 whom은 쓸 수 없다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르시오.\nA: Which pen is yours?\nB: It is the pen ___ I bought yesterday.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 the pen은 사물이고 목적격이므로 which(또는 that)를 쓴다."
          },
          {
            "q": "다음 중 목적격 관계대명사가 생략된 문장을 고르시오.",
            "options": [
              "The man who called me is my uncle.",
              "This is the movie we watched.",
              "The bird which flies high is free.",
              "The boy who is running is fast."
            ],
            "answer": 1,
            "explain": "'the movie (which/that) we watched'에서 목적격 관계대명사가 생략되었다. 나머지는 주격이라 생략할 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르시오.\nThose are the guests ___ I invited to the party.",
            "options": [
              "which",
              "whom",
              "whose",
              "what"
            ],
            "answer": 1,
            "explain": "선행사 the guests는 사람이고 목적격이므로 whom(또는 who/that)을 쓴다."
          },
          {
            "q": "다음 문장을 목적격 관계대명사를 생략하여 바르게 쓴 것을 고르시오.\nThat is the house that they built.",
            "options": [
              "That is the house they built.",
              "That is the house built they.",
              "That is house they built.",
              "That is the they house built."
            ],
            "answer": 0,
            "explain": "목적격 관계대명사 that을 생략하면 'That is the house they built.'가 된다. 어순은 그대로 유지한다."
          },
          {
            "q": "다음 중 빈칸에 that만 쓸 수 있고 who는 쓸 수 없는 것을 고르시오.",
            "options": [
              "She is the woman ___ I love.",
              "He is the man ___ I met.",
              "The car ___ I drive is new.",
              "The boy ___ I saw is tall."
            ],
            "answer": 2,
            "explain": "the car는 사물이므로 which/that만 가능하고 사람용 who(m)은 쓸 수 없다. 나머지는 사람이라 who(m)/that 모두 가능하다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사물, 한 단어)\nThis is the book ___ I bought.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사 the book은 사물이고 목적격이므로 which 또는 that을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. 사람·사물에 모두 쓸 수 있는 한 단어로 쓰시오.\nHere is the pen ___ you lost.",
            "answers": [
              "that"
            ],
            "explain": "that은 사람과 사물 선행사에 모두 쓸 수 있는 목적격 관계대명사이다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사람, m으로 끝나는 목적격 형태)\nShe is the girl ___ I met yesterday.",
            "answers": [
              "whom"
            ],
            "explain": "선행사 the girl은 사람이고 목적격이므로 목적격 전용 형태인 whom을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사물, 한 단어)\nThe food ___ he cooked was delicious.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사 the food는 사물이고 목적격이므로 which 또는 that을 쓴다."
          },
          {
            "q": "다음 문장에서 생략할 수 있는 한 단어를 쓰시오.\nThis is the song that I like.",
            "answers": [
              "that"
            ],
            "explain": "목적격 관계대명사 that은 생략할 수 있다. 'This is the song I like.'도 옳다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사람, 한 단어)\nHe is the singer ___ everyone loves.",
            "answers": [
              "whom",
              "who",
              "that"
            ],
            "explain": "선행사 the singer는 사람이고 목적격이므로 whom, who, that을 쓸 수 있다."
          },
          {
            "q": "다음 밑줄 친 관계대명사가 '주격'이면 S, '목적격'이면 O를 쓰시오.\nThe dog which barks loudly is mine.",
            "answers": [
              "S",
              "주격"
            ],
            "explain": "which 뒤에 동사(barks)가 바로 오므로 주격 관계대명사이다."
          },
          {
            "q": "다음 밑줄 친 관계대명사가 '주격'이면 S, '목적격'이면 O를 쓰시오.\nThat is the movie which we watched.",
            "answers": [
              "O",
              "목적격"
            ],
            "explain": "which 뒤에 '주어(we)+동사(watched)'가 오므로 목적격 관계대명사이다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사물, 한 단어)\nThe bag ___ you bought looks nice.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사 the bag은 사물이고 목적격이므로 which 또는 that을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사람, 한 단어)\nThe teacher ___ I respect is strict.",
            "answers": [
              "whom",
              "who",
              "that"
            ],
            "explain": "선행사 the teacher는 사람이고 목적격이므로 whom, who, that을 쓸 수 있다."
          }
        ]
      },
      {
        "id": "2-B-U6",
        "unit": 6,
        "title": "접속사 although",
        "concept": "although + 주어 + 동사 = '비록 ~이지만'; but과 함께 쓰지 않고, 전치사 despite/in spite of + 명사와 구별한다.",
        "mc": [
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ it was raining, we went out.",
            "options": [
              "Although",
              "Despite",
              "Because",
              "But"
            ],
            "answer": 0,
            "explain": "'비록 비가 왔지만'이라는 양보의 뜻이고 뒤에 '주어+동사(it was raining)'가 오므로 접속사 Although가 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ he was tired, he kept working.",
            "options": [
              "Although",
              "Despite",
              "So",
              "During"
            ],
            "answer": 0,
            "explain": "뒤에 '주어+동사(he was tired)'가 있으므로 접속사 Although가 알맞다. Despite/During은 전치사이다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 그녀는 어리지만 매우 현명하다.\n___ she is young, she is very wise.",
            "options": [
              "Although",
              "Because",
              "If",
              "When"
            ],
            "answer": 0,
            "explain": "'비록 ~이지만'의 양보를 나타내므로 Although가 맞다. Because는 이유(때문에)라서 뜻이 반대이다."
          },
          {
            "q": "어법상 어색한 문장을 고르세요.",
            "options": [
              "Although it was cold, they went swimming.",
              "Although he studied hard, but he failed.",
              "Although we were busy, we helped them.",
              "Although the food was expensive, it tasted bad."
            ],
            "answer": 1,
            "explain": "although와 but을 한 문장에 함께 쓰지 않는다 (Although ~, but ✕). but을 빼야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the test was hard, I passed it.",
            "options": [
              "Although",
              "Despite",
              "Because of",
              "In spite of"
            ],
            "answer": 0,
            "explain": "뒤에 '주어+동사(the test was hard)'가 오므로 접속사 Although가 알맞다. 나머지는 뒤에 명사가 온다."
          },
          {
            "q": "빈칸에 들어갈 수 <보기>와 바꿔 쓸 수 있는 말을 고르세요.\n___ she was sick, she went to school. (= Even though she was sick, ...)",
            "options": [
              "Although",
              "Despite",
              "Because",
              "So"
            ],
            "answer": 0,
            "explain": "even though와 바꿔 쓸 수 있는 접속사는 although이다. 둘 다 '비록 ~이지만'의 뜻이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ his hard work, he made a mistake.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Even though"
            ],
            "answer": 0,
            "explain": "뒤에 명사구(his hard work)가 오므로 전치사 Despite가 알맞다. Although/Even though는 뒤에 '주어+동사'가 온다."
          },
          {
            "q": "다음 문장에서 although의 우리말 뜻으로 알맞은 것을 고르세요.\nAlthough I was scared, I tried it.",
            "options": [
              "비록 ~이지만",
              "~ 때문에",
              "만약 ~라면",
              "~할 때"
            ],
            "answer": 0,
            "explain": "although는 양보를 나타내는 접속사로 '비록 ~이지만'의 뜻이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ they are twins, they look different.",
            "options": [
              "Although",
              "Because",
              "So",
              "Before"
            ],
            "answer": 0,
            "explain": "쌍둥이지만 다르게 생겼다는 대조(양보)이므로 Although가 알맞다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "Although it was raining, we went out.",
              "Although it was raining, but we went out.",
              "Despite it was raining, we went out.",
              "Although of the rain, we went out."
            ],
            "answer": 0,
            "explain": "Although 뒤에는 '주어+동사'가 오고 but과 함께 쓰지 않는다. Despite는 뒤에 명사가 와야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the long road, the trip was enjoyable.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Even though"
            ],
            "answer": 0,
            "explain": "뒤에 명사구(the long road)가 오므로 전치사 Despite가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ he is rich, he is not happy.",
            "options": [
              "Although",
              "Because",
              "Since",
              "So"
            ],
            "answer": 0,
            "explain": "부자지만 행복하지 않다는 대조이므로 Although가 맞다. Because/Since는 이유라서 뜻이 맞지 않는다."
          },
          {
            "q": "밑줄 친 부분을 바르게 고친 것을 고르세요.\nAlthough she was late, but she kept reading.",
            "options": [
              "but을 삭제한다",
              "Although를 Despite로 바꾼다",
              "was를 is로 바꾼다",
              "reading을 read로 바꾼다"
            ],
            "answer": 0,
            "explain": "Although와 but을 함께 쓸 수 없으므로 but을 삭제해야 한다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 우리는 졌지만 최선을 다했다.\n___ we lost, we did our best.",
            "options": [
              "Although",
              "Because",
              "If",
              "So"
            ],
            "answer": 0,
            "explain": "'비록 졌지만'의 양보이므로 Although가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the weather was bad, the trip was fun.",
            "options": [
              "Although",
              "Despite",
              "Because of",
              "In spite of"
            ],
            "answer": 0,
            "explain": "뒤에 '주어+동사(the weather was bad)'가 오므로 접속사 Although가 알맞다."
          },
          {
            "q": "빈칸에 <보기>와 같은 뜻의 접속사가 들어갈 수 없는 것을 고르세요.\n___ he was tired, he smiled.",
            "options": [
              "Because",
              "Although",
              "Though",
              "Even though"
            ],
            "answer": 0,
            "explain": "although = though = even though(비록 ~이지만)로 같은 뜻이다. Because(때문에)는 뜻이 다르다."
          },
          {
            "q": "다음 두 문장을 although로 바르게 연결한 것을 고르세요.\nIt was cold. They played outside.",
            "options": [
              "Although it was cold, they played outside.",
              "Although it was cold, but they played outside.",
              "It was cold although they played outside so.",
              "Although of cold, they played outside."
            ],
            "answer": 0,
            "explain": "「Although + 주어 + 동사, 주어 + 동사」 형태가 맞고 but을 함께 쓰지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ being poor, they were kind to everyone.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Even though"
            ],
            "answer": 0,
            "explain": "뒤에 동명사구(being poor, 명사 역할)가 오므로 전치사 Despite가 알맞다. Although는 '주어+동사'가 필요하다."
          },
          {
            "q": "다음 중 빈칸에 Although가 들어갈 수 없는 것을 고르세요.",
            "options": [
              "___ his illness, he came to the party.",
              "___ he was sick, he came to the party.",
              "___ she was young, she was brave.",
              "___ it was late, she kept reading."
            ],
            "answer": 0,
            "explain": "1번은 뒤에 명사(his illness)가 오므로 Although가 아닌 Despite를 써야 한다. 나머지는 '주어+동사'가 온다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 그는 열심히 공부했지만 실수를 했다.\n___ he studied hard, he made a mistake.",
            "options": [
              "Although",
              "Because",
              "When",
              "So"
            ],
            "answer": 0,
            "explain": "열심히 공부했음에도 실수했다는 대조이므로 Although가 알맞다."
          },
          {
            "q": "어법상 옳은 문장을 고르세요.",
            "options": [
              "Although the food was expensive, it tasted bad.",
              "Although the food expensive, it tasted bad.",
              "Although expensive the food, it tasted bad.",
              "Although but the food was expensive, it tasted bad."
            ],
            "answer": 0,
            "explain": "Although 뒤에는 반드시 '주어(the food) + 동사(was)'가 완전한 형태로 와야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe helped them ___ we were busy.",
            "options": [
              "although",
              "because of",
              "despite",
              "so"
            ],
            "answer": 0,
            "explain": "although는 문장 중간에도 올 수 있고 뒤에 '주어+동사(we were busy)'가 온다. 바빴지만 도왔다는 양보이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ her illness, she went to school.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Though"
            ],
            "answer": 0,
            "explain": "뒤에 명사구(her illness)가 오므로 전치사 Despite가 알맞다."
          },
          {
            "q": "다음 문장의 뜻으로 알맞은 것을 고르세요.\nAlthough it was expensive, he bought it.",
            "options": [
              "비록 그것은 비쌌지만 그는 그것을 샀다.",
              "그것이 비쌌기 때문에 그는 그것을 샀다.",
              "그것이 비싸지면 그는 그것을 살 것이다.",
              "그것이 비쌀 때 그는 그것을 샀다."
            ],
            "answer": 0,
            "explain": "although는 '비록 ~이지만'의 양보를 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ she practiced a lot, she didn't win.",
            "options": [
              "Although",
              "Because",
              "Since",
              "As"
            ],
            "answer": 0,
            "explain": "많이 연습했지만 이기지 못했다는 대조이므로 Although가 알맞다."
          },
          {
            "q": "다음 중 although의 쓰임이 어색한 문장을 고르세요.",
            "options": [
              "Although the cold weather, we walked.",
              "Although the weather was cold, we walked.",
              "Although it was cold, we walked.",
              "Although we were cold, we walked."
            ],
            "answer": 0,
            "explain": "although 뒤에는 '주어+동사'가 와야 한다. 'the cold weather'는 명사구라서 Despite를 써야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ we were lost, we stayed calm.",
            "options": [
              "Although",
              "Because",
              "So",
              "During"
            ],
            "answer": 0,
            "explain": "길을 잃었지만 침착했다는 양보이므로 Although가 알맞다."
          },
          {
            "q": "다음 문장을 despite를 사용해 바꿀 때 빈칸에 알맞은 것을 고르세요.\nAlthough it was raining, we went out. = ___ the rain, we went out.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Even though"
            ],
            "answer": 0,
            "explain": "although(접속사) + 주어+동사 = despite(전치사) + 명사. 뒤에 명사(the rain)가 오므로 Despite가 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ they trained hard, they lost the game.",
            "options": [
              "Although",
              "Because",
              "If",
              "When"
            ],
            "answer": 0,
            "explain": "열심히 훈련했지만 졌다는 대조이므로 Although가 알맞다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "Although she was young, she was wise.",
              "Despite she was young, she was wise.",
              "Although she was young, but she was wise.",
              "Because she was young, but she was wise."
            ],
            "answer": 0,
            "explain": "Although 뒤에는 '주어+동사'가 오고 but과 함께 쓰지 않는다. Despite는 뒤에 명사가 와야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the noise, the baby slept well.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Even though"
            ],
            "answer": 0,
            "explain": "뒤에 명사구(the noise)가 오므로 전치사 Despite가 알맞다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 그는 피곤했지만 계속 뛰었다.\n___ he was tired, he kept running.",
            "options": [
              "Although",
              "Because",
              "So",
              "When"
            ],
            "answer": 0,
            "explain": "피곤했지만 계속 뛰었다는 양보이므로 Although가 알맞다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 수 있는 말을 고르세요.\n___ it was late, she kept reading.\n___ he was rich, he was not happy.",
            "options": [
              "Although",
              "Despite",
              "Because",
              "So"
            ],
            "answer": 0,
            "explain": "두 문장 모두 뒤에 '주어+동사'가 오는 양보의 뜻이므로 Although가 공통으로 알맞다."
          },
          {
            "q": "다음 문장에서 밑줄 친 although 대신 쓸 수 없는 것을 고르세요.\nAlthough she was tired, she smiled.",
            "options": [
              "Despite",
              "Though",
              "Even though",
              "Although"
            ],
            "answer": 0,
            "explain": "though, even though는 although와 바꿔 쓸 수 있다. Despite는 전치사라서 뒤에 '주어+동사'가 오면 쓸 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ we were busy, we finished the project.",
            "options": [
              "Although",
              "Because",
              "If",
              "So"
            ],
            "answer": 0,
            "explain": "바빴지만 끝냈다는 양보이므로 Although가 알맞다."
          },
          {
            "q": "다음 두 문장의 의미 차이를 바르게 설명한 것을 고르세요.\n(a) Although he was tired, he ran.  (b) Because he was tired, he ran.",
            "options": [
              "(a)는 '피곤했지만', (b)는 '피곤해서'라는 뜻이다.",
              "(a)와 (b)는 같은 뜻이다.",
              "(a)는 '피곤해서', (b)는 '피곤했지만'이라는 뜻이다.",
              "둘 다 '만약 피곤하면'이라는 뜻이다."
            ],
            "answer": 0,
            "explain": "although는 '비록 ~이지만'(양보), because는 '~때문에'(이유)로 뜻이 반대이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ his young age, he is very responsible.",
            "options": [
              "Despite",
              "Although",
              "Because",
              "Even though"
            ],
            "answer": 0,
            "explain": "뒤에 명사구(his young age)가 오므로 전치사 Despite가 알맞다."
          },
          {
            "q": "다음 중 빈칸에 들어갈 말이 나머지와 다른 하나를 고르세요.",
            "options": [
              "___ the heavy rain, the game continued.",
              "___ it rained, the game continued.",
              "___ she was sick, she smiled.",
              "___ we were tired, we kept going."
            ],
            "answer": 0,
            "explain": "1번은 뒤에 명사(the heavy rain)가 와서 Despite, 나머지는 '주어+동사'가 와서 Although가 들어간다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 늦었지만 그녀는 계속 일했다.\n___ she was late, she kept working.",
            "options": [
              "Although",
              "Despite",
              "Because",
              "So"
            ],
            "answer": 0,
            "explain": "뒤에 '주어+동사(she was late)'가 오는 양보의 뜻이므로 Although가 알맞다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: Did you go out in the rain?\nB: Yes, ___ it was raining, I went out.",
            "options": [
              "although",
              "despite",
              "because of",
              "so"
            ],
            "answer": 0,
            "explain": "뒤에 '주어+동사(it was raining)'가 오므로 접속사 although가 알맞다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰세요. (비록 ~이지만)\n___ he was tired, he kept working.",
            "answers": [
              "Although",
              "although"
            ],
            "explain": "뒤에 '주어+동사'가 오는 양보의 접속사는 although이다."
          },
          {
            "q": "빈칸에 알맞은 전치사 한 단어를 쓰세요. (뒤에 명사가 옴)\n___ the rain, we went out.",
            "answers": [
              "Despite",
              "despite"
            ],
            "explain": "뒤에 명사(the rain)가 오는 양보의 전치사는 despite이다."
          },
          {
            "q": "although와 바꿔 쓸 수 있는 한 단어를 쓰세요. (even ___)\neven ___ = although",
            "answers": [
              "though"
            ],
            "explain": "even though는 although와 같은 뜻이다."
          },
          {
            "q": "다음 문장에서 삭제해야 할 한 단어를 쓰세요.\nAlthough she was late, but she kept reading.",
            "answers": [
              "but"
            ],
            "explain": "although와 but을 함께 쓸 수 없으므로 but을 삭제한다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰세요.\n___ she is young, she is very wise.",
            "answers": [
              "Although",
              "although",
              "Though",
              "though"
            ],
            "explain": "'비록 어리지만'의 양보이므로 although(=though)가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 전치사 한 단어를 쓰세요. (뒤에 명사구가 옴)\n___ his illness, he came to school.",
            "answers": [
              "Despite",
              "despite"
            ],
            "explain": "뒤에 명사구(his illness)가 오므로 전치사 despite가 알맞다."
          },
          {
            "q": "우리말과 같도록 빈칸에 접속사 한 단어를 쓰세요.\n비록 그는 부자지만 행복하지 않다.\n___ he is rich, he is not happy.",
            "answers": [
              "Although",
              "although",
              "Though",
              "though"
            ],
            "explain": "부자지만 행복하지 않다는 양보이므로 although(=though)가 알맞다."
          },
          {
            "q": "빈칸에 although와 뜻이 반대인 '이유'의 접속사 한 단어를 쓰세요.\n___ he was tired, he went to bed early. (피곤했기 때문에)",
            "answers": [
              "Because",
              "because",
              "Since",
              "since",
              "As",
              "as"
            ],
            "explain": "'~때문에'라는 이유의 접속사는 because(=since, as)이다. although와 뜻이 반대이다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰세요.\n___ they are twins, they look different.",
            "answers": [
              "Although",
              "although",
              "Though",
              "though"
            ],
            "explain": "쌍둥이지만 다르게 생겼다는 양보이므로 although(=though)가 알맞다."
          },
          {
            "q": "빈칸에 in spite ___ 형태를 완성하는 한 단어를 쓰세요.\nin spite ___ the rain, we went out.",
            "answers": [
              "of"
            ],
            "explain": "in spite of + 명사 = despite + 명사(비록 ~에도 불구하고)이다. 빈칸에는 of가 온다."
          }
        ]
      },
      {
        "id": "2-B-U7",
        "unit": 7,
        "title": "의문사 + to부정사",
        "concept": "「의문사 + 주어 + should + 동사」는 「의문사 + to부정사」로 줄여 쓸 수 있으며, what/how/where/when/who(m)와 함께 쓰지만 why + to부정사는 쓰지 않는다.",
        "mc": [
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI don't know ___ do first.",
            "options": [
              "what to",
              "what should",
              "to what",
              "what do"
            ],
            "answer": 0,
            "explain": "「의문사 + to부정사」 형태이므로 what to do가 맞습니다. '무엇을 먼저 할지'라는 뜻입니다."
          },
          {
            "q": "다음 문장과 뜻이 같은 것을 고르세요.\nTell me how I should get there.",
            "options": [
              "Tell me how to get there.",
              "Tell me how getting there.",
              "Tell me how get there.",
              "Tell me how should get there."
            ],
            "answer": 0,
            "explain": "「의문사 + 주어 + should + 동사」는 「의문사 + to부정사」로 줄일 수 있으므로 how I should get → how to get 입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe learned ___ swim.",
            "options": [
              "how to",
              "what to",
              "when to",
              "why to"
            ],
            "answer": 0,
            "explain": "'수영하는 법(어떻게 수영할지)'은 how to swim입니다."
          },
          {
            "q": "어법상 어색한 것을 고르세요.",
            "options": [
              "I know why to leave.",
              "I know what to do.",
              "I know where to go.",
              "I know when to start."
            ],
            "answer": 0,
            "explain": "why는 to부정사와 함께 쓰지 않습니다. why to leave는 틀린 표현입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe decided ___ leave for the trip.",
            "options": [
              "when to",
              "how to",
              "what to",
              "why to"
            ],
            "answer": 0,
            "explain": "'언제 떠날지'는 when to leave입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요.\n(어디서 표를 살지) → I know ___ buy tickets.",
            "options": [
              "where to",
              "when to",
              "what to",
              "who to"
            ],
            "answer": 0,
            "explain": "'어디서 ~할지'는 where to이므로 where to buy가 맞습니다."
          },
          {
            "q": "다음 문장을 바르게 줄인 것을 고르세요.\nI'm not sure what I should say.",
            "options": [
              "I'm not sure what to say.",
              "I'm not sure to what say.",
              "I'm not sure what saying.",
              "I'm not sure what say to."
            ],
            "answer": 0,
            "explain": "what I should say → what to say로 줄여 씁니다."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것을 고르세요.\nHe doesn't know ___ do.",
            "options": [
              "why to",
              "what to",
              "how to",
              "when to"
            ],
            "answer": 0,
            "explain": "why는 to부정사와 함께 쓰지 않으므로 why to do는 쓸 수 없습니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nPlease show me ___ use this app.",
            "options": [
              "how to",
              "what to",
              "where to",
              "who to"
            ],
            "answer": 0,
            "explain": "'어떻게 사용하는지(사용하는 법)'는 how to use입니다."
          },
          {
            "q": "다음 중 문법적으로 올바른 문장을 고르세요.",
            "options": [
              "I can't decide what to wear.",
              "I can't decide what wear to.",
              "I can't decide to what wear.",
              "I can't decide what wearing."
            ],
            "answer": 0,
            "explain": "「의문사 + to부정사」는 what to wear 순서로 씁니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThey are talking about ___ buy for the party.",
            "options": [
              "what to",
              "how to",
              "why to",
              "when should"
            ],
            "answer": 0,
            "explain": "'무엇을 살지'는 what to buy입니다."
          },
          {
            "q": "다음 문장과 뜻이 같은 것을 고르세요.\nShe asked where she should go.",
            "options": [
              "She asked where to go.",
              "She asked to where go.",
              "She asked where going.",
              "She asked where she go."
            ],
            "answer": 0,
            "explain": "where she should go → where to go로 줄여 씁니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI don't know ___ ask for help.",
            "options": [
              "who to",
              "why to",
              "what to",
              "when to"
            ],
            "answer": 0,
            "explain": "'누구에게 도움을 청할지'는 who(m) to ask입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nCan you tell me ___ start?",
            "options": [
              "when to",
              "who to",
              "why to",
              "what should"
            ],
            "answer": 0,
            "explain": "'언제 시작할지'는 when to start입니다."
          },
          {
            "q": "어법상 옳지 않은 것을 고르세요.",
            "options": [
              "Show me why to fix it.",
              "Show me how to fix it.",
              "Show me what to fix.",
              "Show me where to fix it."
            ],
            "answer": 0,
            "explain": "why + to부정사는 쓰지 않으므로 why to fix는 틀립니다."
          },
          {
            "q": "다음 문장을 바르게 줄인 것을 고르세요.\nWe decided when we should leave.",
            "options": [
              "We decided when to leave.",
              "We decided when leave to.",
              "We decided when leaving.",
              "We decided to when leave."
            ],
            "answer": 0,
            "explain": "when we should leave → when to leave로 줄입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI'm not sure ___ sit at the concert.",
            "options": [
              "where to",
              "what to",
              "why to",
              "who to"
            ],
            "answer": 0,
            "explain": "'어디에 앉을지'는 where to sit입니다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르세요.\n나는 무엇을 요리할지 모른다.",
            "options": [
              "I don't know what to cook.",
              "I don't know to cook what.",
              "I don't know what cook to.",
              "I don't know why to cook."
            ],
            "answer": 0,
            "explain": "'무엇을 요리할지'는 what to cook입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nHe learned ___ open the box.",
            "options": [
              "how to",
              "what to",
              "when to",
              "why to"
            ],
            "answer": 0,
            "explain": "'어떻게 여는지'는 how to open입니다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: I'm hungry.\nB: Let's decide ___ eat.",
            "options": [
              "what to",
              "why to",
              "who to",
              "how should"
            ],
            "answer": 0,
            "explain": "'무엇을 먹을지'는 what to eat입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nDo you know ___ meet them tomorrow?",
            "options": [
              "where to",
              "why to",
              "what should",
              "how should"
            ],
            "answer": 0,
            "explain": "'어디서 만날지'는 where to meet입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분을 바르게 줄인 것을 고르세요.\nHe learned how he should swim.",
            "options": [
              "how to swim",
              "how swim to",
              "how swimming",
              "to how swim"
            ],
            "answer": 0,
            "explain": "how he should swim → how to swim으로 줄입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI can't decide ___ put my bag.",
            "options": [
              "where to",
              "what to",
              "when to",
              "why to"
            ],
            "answer": 0,
            "explain": "'어디에 둘지'는 where to put입니다."
          },
          {
            "q": "다음 중 어색한 문장을 고르세요.",
            "options": [
              "Tell me why to go home early.",
              "Tell me how to go home.",
              "Tell me when to go home.",
              "Tell me what to bring home."
            ],
            "answer": 0,
            "explain": "why + to부정사는 쓰지 않으므로 why to go는 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nAsk him ___ start the game.",
            "options": [
              "how to",
              "why to",
              "who to",
              "what should"
            ],
            "answer": 0,
            "explain": "'어떻게 시작하는지'는 how to start입니다."
          },
          {
            "q": "다음 문장과 뜻이 같은 것을 고르세요.\nThey wonder where they should stay.",
            "options": [
              "They wonder where to stay.",
              "They wonder where stay to.",
              "They wonder to where stay.",
              "They wonder where staying."
            ],
            "answer": 0,
            "explain": "where they should stay → where to stay로 줄입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nTell me ___ bring to the picnic.",
            "options": [
              "what to",
              "when to",
              "why to",
              "who should"
            ],
            "answer": 0,
            "explain": "'무엇을 가져올지'는 what to bring입니다."
          },
          {
            "q": "다음 단어를 바르게 배열한 것을 고르세요.\n( she / knows / when / to / call )",
            "options": [
              "She knows when to call.",
              "She knows to when call.",
              "She knows when call to.",
              "She when knows to call."
            ],
            "answer": 0,
            "explain": "「주어 + 동사 + 의문사 + to부정사」 순서로 She knows when to call입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe have to decide ___ leave the house.",
            "options": [
              "when to",
              "what to",
              "who to",
              "why to"
            ],
            "answer": 0,
            "explain": "'언제 떠날지'는 when to leave입니다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르세요.\n그에게 어떻게 시작하는지 물어봐.",
            "options": [
              "Ask him how to start.",
              "Ask him to how start.",
              "Ask him how start to.",
              "Ask him why to start."
            ],
            "answer": 0,
            "explain": "'어떻게 시작하는지'는 how to start입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI learned ___ ride a bike last summer.",
            "options": [
              "how to",
              "what to",
              "where to",
              "why to"
            ],
            "answer": 0,
            "explain": "'자전거 타는 법'은 how to ride입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분이 잘못된 문장을 고르세요.",
            "options": [
              "I don't know why to answer.",
              "I don't know what to answer.",
              "I don't know how to answer.",
              "I don't know when to answer."
            ],
            "answer": 0,
            "explain": "why + to부정사는 쓰지 않으므로 why to answer는 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe map shows us ___ go next.",
            "options": [
              "where to",
              "what to",
              "who to",
              "why to"
            ],
            "answer": 0,
            "explain": "'어디로 갈지'는 where to go입니다."
          },
          {
            "q": "다음 문장을 바르게 줄인 것을 고르세요.\nShow me how I can use it.",
            "options": [
              "Show me how to use it.",
              "Show me how using it.",
              "Show me to how use it.",
              "Show me how use it to."
            ],
            "answer": 0,
            "explain": "how I can use it → how to use it로 줄입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI'll teach you ___ swim this weekend.",
            "options": [
              "how to",
              "what to",
              "when to",
              "why to"
            ],
            "answer": 0,
            "explain": "'수영하는 법'은 how to swim입니다."
          },
          {
            "q": "다음 중 문법적으로 올바른 문장을 고르세요.",
            "options": [
              "She decided where to eat lunch.",
              "She decided where eat to lunch.",
              "She decided to where eat lunch.",
              "She decided where lunch to eat."
            ],
            "answer": 0,
            "explain": "「의문사 + to부정사」는 where to eat 순서입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nHe doesn't know ___ stop playing games.",
            "options": [
              "when to",
              "what to",
              "where to",
              "why to"
            ],
            "answer": 0,
            "explain": "'언제 멈출지'는 when to stop입니다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르세요.\n나에게 무엇을 가져올지 말해줘.",
            "options": [
              "Tell me what to bring.",
              "Tell me to what bring.",
              "Tell me what bring to.",
              "Tell me why to bring."
            ],
            "answer": 0,
            "explain": "'무엇을 가져올지'는 what to bring입니다."
          },
          {
            "q": "다음 문장을 바르게 줄인 것을 고르세요.\nI'm not sure what I should wear today.",
            "options": [
              "I'm not sure what to wear today.",
              "I'm not sure to wear what today.",
              "I'm not sure what wear today.",
              "I'm not sure what wearing today."
            ],
            "answer": 0,
            "explain": "what I should wear → what to wear로 줄입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe talked about ___ go on vacation.",
            "options": [
              "where to",
              "why to",
              "who to",
              "what should"
            ],
            "answer": 0,
            "explain": "'어디로 갈지'는 where to go입니다."
          }
        ],
        "sa": [
          {
            "q": "다음 문장을 「의문사 + to부정사」로 바꿀 때 빈칸에 알맞은 두 단어를 쓰세요.\nTell me how I can get there. → Tell me ___ get there.",
            "answers": [
              "how to"
            ],
            "explain": "how I can get → how to get으로 줄입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n나는 점심으로 무엇을 먹을지 모르겠다.\nI don't know ___ eat for lunch.",
            "answers": [
              "what to"
            ],
            "explain": "'무엇을 먹을지'는 what to eat입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n그녀는 어디서 표를 살지 알게 되었다.\nShe learned ___ buy tickets.",
            "answers": [
              "where to"
            ],
            "explain": "'어디서 살지'는 where to buy입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n우리는 언제 시작할지 정하지 않았다.\nWe didn't decide ___ start.",
            "answers": [
              "when to"
            ],
            "explain": "'언제 시작할지'는 when to start입니다."
          },
          {
            "q": "다음 문장을 「의문사 + to부정사」로 바꿀 때 빈칸에 알맞은 두 단어를 쓰세요.\nShe asked where she should go. → She asked ___ go.",
            "answers": [
              "where to"
            ],
            "explain": "where she should go → where to go로 줄입니다."
          },
          {
            "q": "다음 문장에서 어법상 틀린 한 단어를 바르게 고쳐, 밑줄 부분을 두 단어로 다시 쓰세요.\nI don't know why to do. → I don't know ___ do.",
            "answers": [
              "what to"
            ],
            "explain": "why는 to부정사와 쓰지 않습니다. 문맥상 '무엇을 할지'인 what to do가 자연스럽습니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n나에게 이것을 어떻게 쓰는지 알려줘.\nTell me ___ use this.",
            "answers": [
              "how to"
            ],
            "explain": "'어떻게 쓰는지(쓰는 법)'는 how to use입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n나는 누구에게 물어볼지 모르겠다.\nI don't know ___ ask.",
            "answers": [
              "who to",
              "whom to"
            ],
            "explain": "'누구에게 물어볼지'는 who(m) to ask입니다. who to, whom to 모두 가능합니다."
          },
          {
            "q": "다음 문장을 「의문사 + to부정사」로 바꿀 때 빈칸에 알맞은 두 단어를 쓰세요.\nHe learned how he should swim. → He learned ___ swim.",
            "answers": [
              "how to"
            ],
            "explain": "how he should swim → how to swim으로 줄입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n그는 언제 멈출지 모른다.\nHe doesn't know ___ stop.",
            "answers": [
              "when to"
            ],
            "explain": "'언제 멈출지'는 when to stop입니다."
          }
        ]
      },
      {
        "id": "2-B-U8",
        "unit": 8,
        "title": "so ~ that …",
        "concept": "「so+형용사/부사+that+주어+동사」= 너무 ~해서 …하다 (so vs such 구별, so~that ↔ too~to 전환 포함)",
        "mc": [
          {
            "q": "It was ___ hot that we couldn't play outside.",
            "options": [
              "so",
              "such",
              "very",
              "too"
            ],
            "answer": 0,
            "explain": "「so+형용사(hot)+that+주어+동사」구조이므로 빈칸에는 so가 알맞다."
          },
          {
            "q": "He is so tall ___ he can touch the ceiling.",
            "options": [
              "so",
              "that",
              "to",
              "which"
            ],
            "answer": 1,
            "explain": "「so+형용사+that+주어+동사」에서 결과절을 이끄는 접속사는 that이다."
          },
          {
            "q": "The box was so heavy ___ I couldn't lift it.",
            "options": [
              "that",
              "than",
              "then",
              "as"
            ],
            "answer": 0,
            "explain": "so ~ that 구문의 결과절은 that으로 연결한다. than(비교)·then(그때)과 혼동하지 않는다."
          },
          {
            "q": "다음 중 빈칸에 알맞은 것은?  She was ___ tired that she fell asleep.",
            "options": [
              "such",
              "so",
              "much",
              "too"
            ],
            "answer": 1,
            "explain": "형용사 tired 앞이므로 so를 쓴다. such는 명사(구) 앞에 쓴다."
          },
          {
            "q": "It was such ___ that everyone loved it.",
            "options": [
              "a good movie",
              "good movie",
              "good",
              "well"
            ],
            "answer": 0,
            "explain": "「such+a(n)+형용사+명사」구조이므로 such a good movie가 알맞다."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "It was so a hot day that we stayed home.",
              "It was such a hot day that we stayed home.",
              "It was such hot day that we stayed home.",
              "It was so hot day that we stayed home."
            ],
            "answer": 1,
            "explain": "「such+a+형용사+명사」가 올바르다. so는 명사 앞에 관사와 함께 쓰지 않는다."
          },
          {
            "q": "The soup was so hot ___ I burned my tongue.",
            "options": [
              "that",
              "so",
              "and",
              "but"
            ],
            "answer": 0,
            "explain": "so + 형용사 + that + 주어 + 동사. 결과를 나타내는 that이 필요하다."
          },
          {
            "q": "He ran ___ fast that nobody could catch him.  (fast는 부사)",
            "options": [
              "such",
              "so",
              "very much",
              "too"
            ],
            "answer": 1,
            "explain": "부사 fast 앞에도 so를 쓴다. so는 형용사·부사 앞, such는 명사 앞."
          },
          {
            "q": "다음 문장과 뜻이 같은 것은?  The tea was so hot that I couldn't drink it.",
            "options": [
              "The tea was too hot to drink.",
              "The tea was hot enough to drink.",
              "The tea was too hot to drink it.",
              "The tea was so hot to drink."
            ],
            "answer": 0,
            "explain": "「so+형용사+that+주어+can't+동사」=「too+형용사+to부정사」. to부정사의 목적어(it)는 주어와 같으므로 생략한다."
          },
          {
            "q": "다음을 too ~ to로 바르게 바꾼 것은?  The box was so heavy that I couldn't lift it.",
            "options": [
              "The box was too heavy to lift it.",
              "The box was too heavy to lift.",
              "The box was so heavy to lift.",
              "The box was heavy enough to lift."
            ],
            "answer": 1,
            "explain": "so heavy that I couldn't lift it → too heavy to lift. 반복되는 목적어 it은 쓰지 않는다."
          },
          {
            "q": "The problem was too difficult to solve. 와 뜻이 같은 문장은?",
            "options": [
              "The problem was so difficult that we could solve it.",
              "The problem was so difficult that we couldn't solve it.",
              "The problem was such difficult that we couldn't solve it.",
              "The problem was so difficult to solve it."
            ],
            "answer": 1,
            "explain": "too ~ to = so ~ that + 주어 + can't/couldn't. 부정의 뜻이 that절에 나타난다."
          },
          {
            "q": "빈칸에 공통으로 알맞은 말은?  He is ___ kind that everyone likes him. / It was ___ dark that I couldn't see.",
            "options": [
              "such",
              "so",
              "too",
              "very"
            ],
            "answer": 1,
            "explain": "두 문장 모두 형용사(kind, dark) 앞이므로 so가 들어간다."
          },
          {
            "q": "다음 중 빈칸에 so를 쓸 수 없는 것은?",
            "options": [
              "It was ___ cold that we stayed home.",
              "She spoke ___ quietly that I couldn't hear.",
              "It was ___ a long movie that we got bored.",
              "He is ___ funny that we always laugh."
            ],
            "answer": 2,
            "explain": "「a+형용사+명사(long movie)」앞에는 such를 써야 한다. 나머지는 형용사·부사 앞이라 so가 맞다."
          },
          {
            "q": "The music was so loud ___ we couldn't talk.",
            "options": [
              "that",
              "what",
              "where",
              "who"
            ],
            "answer": 0,
            "explain": "결과를 나타내는 접속사 that이 알맞다."
          },
          {
            "q": "I was so busy ___ I skipped lunch.",
            "options": [
              "so",
              "that",
              "for",
              "to"
            ],
            "answer": 1,
            "explain": "so + 형용사(busy) + that + 주어 + 동사 구조."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "The story was so sad that we cried.",
              "The bag was so heavy that she dropped it.",
              "It was so funny that we laughed a lot.",
              "She was so a tired that she slept."
            ],
            "answer": 3,
            "explain": "so 다음에는 관사(a)를 쓰지 않고 형용사만 온다. 'so a tired'는 틀린 표현이다."
          },
          {
            "q": "The joke was so funny that we ___ a lot.",
            "options": [
              "laughed",
              "laugh",
              "laughing",
              "to laugh"
            ],
            "answer": 0,
            "explain": "that절은 「주어+동사」로 완전한 절이다. 과거 상황이므로 laughed가 알맞다."
          },
          {
            "q": "우리말에 맞게 빈칸을 채울 때 알맞은 것은?  그는 너무 빨리 달려서 아무도 그를 잡을 수 없었다.  He ran so fast that nobody ___ catch him.",
            "options": [
              "could",
              "couldn't",
              "so",
              "such"
            ],
            "answer": 0,
            "explain": "부정 주어 nobody가 이미 '아무도 ~않다'를 나타내므로 뒤에는 could를 쓴다. nobody could catch him = 아무도 그를 잡을 수 없었다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 바르게 연결한 것은?  She was very tired. She fell asleep.",
            "options": [
              "She was too tired that she fell asleep.",
              "She was so tired that she fell asleep.",
              "She was such tired that she fell asleep.",
              "She was so tired to fall asleep."
            ],
            "answer": 1,
            "explain": "very를 so로 바꾸고 두 문장을 that으로 연결한다. so+형용사+that+주어+동사."
          },
          {
            "q": "다음 두 문장을 「so ~ that」으로 연결하시오.  The movie was very long. We got bored.",
            "options": [
              "The movie was so long that we got bored.",
              "The movie was such long that we got bored.",
              "The movie was too long that we got bored.",
              "The movie was so long so we got bored."
            ],
            "answer": 0,
            "explain": "so + long(형용사) + that + we got bored(주어+동사)."
          },
          {
            "q": "빈칸에 알맞은 것은?  It was ___ interesting a book that I read it twice.",
            "options": [
              "so",
              "such",
              "very",
              "too"
            ],
            "answer": 0,
            "explain": "「so+형용사+a+명사」어순도 가능하다: so interesting a book. such는 「such+a+형용사+명사」어순."
          },
          {
            "q": "다음 중 밑줄 친 부분이 어법상 옳은 것은?",
            "options": [
              "It was such cold that we stayed inside.",
              "It was so a cold day that we stayed inside.",
              "It was such a cold day that we stayed inside.",
              "It was so cold day that we stayed inside."
            ],
            "answer": 2,
            "explain": "「such+a+형용사+명사(a cold day)」가 올바른 어순이다."
          },
          {
            "q": "The bag was so heavy ___ she dropped it.",
            "options": [
              "so",
              "that",
              "than",
              "as"
            ],
            "answer": 1,
            "explain": "so ~ that 구문. 결과절을 that으로 연결한다."
          },
          {
            "q": "다음 문장을 too ~ to로 바꿀 때 빈칸에 알맞은 것은?  It was so dark that I couldn't see. → It was too dark ___.",
            "options": [
              "to see",
              "to see it",
              "seeing",
              "for see"
            ],
            "answer": 0,
            "explain": "so dark that I couldn't see → too dark to see. 목적어가 없으므로 to see로 끝난다."
          },
          {
            "q": "다음 중 「so ~ that」 구문이 바르게 쓰인 것은?",
            "options": [
              "He is so a tall that he can touch the ceiling.",
              "He is so tall that he can touch the ceiling.",
              "He is such tall that he can touch the ceiling.",
              "He is so tall so he can touch the ceiling."
            ],
            "answer": 1,
            "explain": "so + 형용사(tall) + that + 주어 + 동사. so 뒤에는 관사가 오지 않는다."
          },
          {
            "q": "빈칸에 알맞은 말은?  The story was ___ sad that everyone cried.",
            "options": [
              "such",
              "so",
              "too",
              "enough"
            ],
            "answer": 1,
            "explain": "형용사 sad 앞이므로 so."
          },
          {
            "q": "다음 중 뜻이 나머지와 다른 하나는?",
            "options": [
              "The tea was too hot to drink.",
              "The tea was so hot that I couldn't drink it.",
              "The tea was so hot that I could drink it.",
              "The tea was too hot for me to drink."
            ],
            "answer": 2,
            "explain": "①②④는 '너무 뜨거워서 마실 수 없었다'는 뜻이지만, ③은 '마실 수 있었다'로 뜻이 반대다."
          },
          {
            "q": "It was such ___ that we couldn't sleep.",
            "options": [
              "loud music",
              "a loud music",
              "loud",
              "so loud"
            ],
            "answer": 0,
            "explain": "music은 셀 수 없는 명사라 관사 a를 쓰지 않는다: such loud music."
          },
          {
            "q": "빈칸에 알맞은 것은?  He spoke ___ slowly that everyone understood him.  (slowly는 부사)",
            "options": [
              "such",
              "so",
              "such a",
              "very much"
            ],
            "answer": 1,
            "explain": "부사 slowly 앞에는 so를 쓴다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞지 않은 것은?  The room was ___ that we felt cold.",
            "options": [
              "so cold",
              "very cold",
              "such cold",
              "cold"
            ],
            "answer": 2,
            "explain": "such는 명사 없이 형용사만 앞에서 꾸밀 수 없다. 'such cold'는 틀리고 'so cold'가 맞다."
          },
          {
            "q": "Which is correct?  '그 문제는 너무 어려워서 아무도 풀 수 없었다.'",
            "options": [
              "The problem was so difficult that nobody could solve it.",
              "The problem was such difficult that nobody could solve it.",
              "The problem was so difficult to solve it.",
              "The problem was too difficult that nobody could solve it."
            ],
            "answer": 0,
            "explain": "so + difficult + that + nobody + could solve it. so~that 구문이 올바르다."
          },
          {
            "q": "다음 문장을 so ~ that으로 바꿀 때 알맞은 것은?  The coffee was too hot to drink.",
            "options": [
              "The coffee was so hot that I drank it.",
              "The coffee was so hot that I couldn't drink it.",
              "The coffee was such hot that I couldn't drink it.",
              "The coffee was so hot to drink it."
            ],
            "answer": 1,
            "explain": "too ~ to = so ~ that + 주어 + couldn't. 부정의 의미가 that절로 온다."
          },
          {
            "q": "빈칸에 알맞은 것은?  I was ___ hungry that I ate everything.",
            "options": [
              "so",
              "such",
              "such a",
              "too"
            ],
            "answer": 0,
            "explain": "형용사 hungry 앞이므로 so."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "She was so busy that she skip lunch.",
              "She was so busy that she skipped lunch.",
              "She was so busy to skip lunch.",
              "She was such busy that she skipped lunch."
            ],
            "answer": 1,
            "explain": "that절에는 「주어+동사」가 오며, 과거이므로 skipped. so는 형용사 busy 앞에 쓴다."
          },
          {
            "q": "The teacher spoke ___ clearly that we all understood.",
            "options": [
              "such",
              "so",
              "such a",
              "much"
            ],
            "answer": 1,
            "explain": "부사 clearly 앞에는 so를 쓴다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?  He had ___ many books that his bag was heavy.",
            "options": [
              "so",
              "such",
              "such a",
              "too"
            ],
            "answer": 0,
            "explain": "「so many/much/few/little + 명사」는 so를 쓴다. so many books가 맞다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?  She has ___ a kind heart that everyone loves her.",
            "options": [
              "so",
              "such",
              "very",
              "too"
            ],
            "answer": 1,
            "explain": "「such+a+형용사+명사(a kind heart)」구조이므로 such."
          },
          {
            "q": "다음 중 우리말 뜻이 바르게 옮겨진 것은?  '날씨가 너무 좋아서 우리는 소풍을 갔다.'",
            "options": [
              "The weather was so nice that we went on a picnic.",
              "The weather was such nice that we went on a picnic.",
              "The weather was so nice to go on a picnic.",
              "The weather was too nice that we went on a picnic."
            ],
            "answer": 0,
            "explain": "so + nice(형용사) + that + we went ~ 구조가 올바르다."
          },
          {
            "q": "빈칸에 알맞은 것은?  The show was ___ boring that many people left.",
            "options": [
              "so",
              "such",
              "such a",
              "enough"
            ],
            "answer": 0,
            "explain": "형용사 boring 앞이므로 so."
          },
          {
            "q": "다음 문장을 too ~ to로 바꾼 것으로 알맞은 것은?  He was so weak that he couldn't walk.",
            "options": [
              "He was too weak to walk.",
              "He was too weak to walk it.",
              "He was so weak to walk.",
              "He was such weak to walk."
            ],
            "answer": 0,
            "explain": "so weak that he couldn't walk → too weak to walk. 자동사라 목적어가 없다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰시오.  It was ___ hot that we couldn't play. (너무 ~해서)",
            "answers": [
              "so"
            ],
            "explain": "so + 형용사 + that: so가 정답."
          },
          {
            "q": "빈칸에 알맞은 접속사를 쓰시오.  He is so tall ___ he can touch the ceiling.",
            "answers": [
              "that"
            ],
            "explain": "결과절을 이끄는 접속사 that."
          },
          {
            "q": "빈칸에 so 또는 such 중 알맞은 말을 쓰시오.  It was ___ a long movie that we got bored.",
            "answers": [
              "such"
            ],
            "explain": "「such+a+형용사+명사(a long movie)」이므로 such."
          },
          {
            "q": "빈칸에 so 또는 such 중 알맞은 말을 쓰시오.  She was ___ tired that she fell asleep.",
            "answers": [
              "so"
            ],
            "explain": "형용사 tired 앞이므로 so."
          },
          {
            "q": "다음 문장을 too ~ to로 바꿀 때 빈칸에 알맞은 두 단어를 쓰시오.  The box was so heavy that I couldn't lift it. → The box was ___ heavy to lift.",
            "answers": [
              "too"
            ],
            "explain": "so ~ that + couldn't = too ~ to. 빈칸에는 too."
          },
          {
            "q": "다음을 so ~ that으로 바꿀 때 빈칸에 알맞은 한 단어를 쓰시오.  The tea was too hot to drink. → The tea was so hot that I ___ drink it.",
            "answers": [
              "couldn't",
              "could not",
              "cannot",
              "can't"
            ],
            "explain": "too ~ to = so ~ that + couldn't. 부정어 couldn't가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰시오. (한 단어)  The music was ___ loud that we couldn't talk.",
            "answers": [
              "so"
            ],
            "explain": "형용사 loud 앞이므로 so."
          },
          {
            "q": "우리말에 맞게 빈칸을 채우시오. (두 단어)  나는 너무 바빠서 …  I was ___ ___ that I skipped lunch.",
            "answers": [
              "so busy"
            ],
            "explain": "so + busy(형용사): so busy."
          },
          {
            "q": "빈칸에 so 또는 such 중 알맞은 말을 쓰시오.  He had ___ many books that his bag was heavy.",
            "answers": [
              "so"
            ],
            "explain": "「so many + 명사」는 so를 쓴다."
          },
          {
            "q": "다음 문장을 too ~ to로 바꿀 때 밑줄에 알맞은 세 단어를 쓰시오.  It was so dark that I couldn't see. → It was ___ ___ ___.",
            "answers": [
              "too dark to see"
            ],
            "explain": "so dark that I couldn't see → too dark to see."
          }
        ]
      }
    ]
  }
]
