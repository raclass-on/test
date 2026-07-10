// ============================================================================
//  문법 문제 데이터 (TOEIC Part 5 스타일 · 문법검수 완료 · 정답위치 균형)
//  courses: 반(1-B / 2-B)별 8유닛, 각 유닛 = 객관식(mc) 40 + 주관식(sa) 10
//    mc: { q, options[4], answer(정답 인덱스 0-3), explain }
//    sa: { q, answers[](정답 후보), explain }
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
            "q": "빈칸에 알맞은 것을 고르세요.\nMy older sister wants ___ a doctor, so she studies biology every night.",
            "options": [
              "become",
              "becoming",
              "becomes",
              "to become"
            ],
            "answer": 3,
            "explain": "want는 to부정사를 목적어로 취하므로 to become이 맞다. becoming(동명사)·become(원형)·becomes는 want 뒤에 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nAfter a long week at school, I really enjoy ___ movies with my family on Saturday.",
            "options": [
              "watched",
              "watch",
              "to watch",
              "watching"
            ],
            "answer": 3,
            "explain": "enjoy는 동명사만 목적어로 취하므로 watching이 맞다. enjoy 뒤에 to부정사(to watch)는 쓸 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nBecause it started raining hard, we finally decided ___ the picnic and go home.",
            "options": [
              "to cancel",
              "canceled",
              "cancel",
              "canceling"
            ],
            "answer": 0,
            "explain": "decide는 to부정사를 취하므로 to cancel이 맞다. canceling(동명사)은 decide의 목적어가 될 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe students didn't leave until they finished ___ the classroom after the party.",
            "options": [
              "clean",
              "cleaning",
              "to clean",
              "cleaned"
            ],
            "answer": 1,
            "explain": "finish는 동명사만 취하므로 cleaning이 맞다. finish 뒤에 to부정사(to clean)는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI hope ___ you again next summer when I visit my grandparents' town.",
            "options": [
              "to see",
              "saw",
              "see",
              "seeing"
            ],
            "answer": 0,
            "explain": "hope는 to부정사를 취하므로 to see가 맞다. seeing(동명사)·saw(과거)·see(원형)는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nTo stay healthy, my coach told us to avoid ___ too much fast food.",
            "options": [
              "eat",
              "eats",
              "eating",
              "to eat"
            ],
            "answer": 2,
            "explain": "avoid는 동명사만 취하므로 eating이 맞다. avoid 뒤에 to eat은 쓸 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe club members plan ___ a small concert at the end of the semester.",
            "options": [
              "to hold",
              "holding",
              "hold",
              "held"
            ],
            "answer": 0,
            "explain": "plan은 to부정사를 취하므로 to hold가 맞다. holding(동명사)·hold(원형)는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWould you mind ___ the window? It's a little cold in here.",
            "options": [
              "closing",
              "closed",
              "to close",
              "close"
            ],
            "answer": 0,
            "explain": "mind는 동명사만 취하므로 closing이 맞다. 'Would you mind to close'는 틀린 표현이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy brother promised ___ me with my math homework after dinner tonight.",
            "options": [
              "help",
              "helping",
              "to help",
              "helped"
            ],
            "answer": 2,
            "explain": "promise는 to부정사를 취하므로 to help가 맞다. helping·help·helped는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEven though she was tired, she kept ___ until she reached the finish line.",
            "options": [
              "running",
              "ran",
              "to run",
              "run"
            ],
            "answer": 0,
            "explain": "keep은 동명사를 취해 '계속 ~하다'가 되므로 running이 맞다. keep 뒤에 to run은 쓸 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe little boy refused ___ his vegetables, so his mom was upset.",
            "options": [
              "eat",
              "to eat",
              "ate",
              "eating"
            ],
            "answer": 1,
            "explain": "refuse는 to부정사를 취하므로 to eat이 맞다. eating(동명사)은 refuse의 목적어가 될 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nAfter a long talk, both teams agreed ___ the rules of the new game.",
            "options": [
              "followed",
              "follow",
              "to follow",
              "following"
            ],
            "answer": 2,
            "explain": "agree는 to부정사를 취하므로 to follow가 맞다. following·follow·followed는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe expect ___ at the airport around noon, so please wait for us there.",
            "options": [
              "arrived",
              "arrive",
              "arriving",
              "to arrive"
            ],
            "answer": 3,
            "explain": "expect는 to부정사를 취하므로 to arrive가 맞다. arriving·arrive·arrived는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nYou look really pale; I think you need ___ some rest right now.",
            "options": [
              "get",
              "got",
              "to get",
              "getting"
            ],
            "answer": 2,
            "explain": "need는 to부정사를 취하므로 to get이 맞다. getting·get·got는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe customer wished ___ to the manager about the broken product.",
            "options": [
              "speaking",
              "to speak",
              "spoke",
              "speak"
            ],
            "answer": 1,
            "explain": "wish는 to부정사를 취하므로 to speak이 맞다. speaking·speak·spoke는 올 수 없다."
          },
          {
            "q": "어법상 옳은 문장을 고르세요.",
            "options": [
              "My friend wants join the drama club.",
              "My friend want to join the drama club.",
              "My friend wants joining the drama club.",
              "My friend wants to join the drama club."
            ],
            "answer": 3,
            "explain": "주어 My friend에 맞춰 wants를 쓰고, want는 to부정사를 취하므로 'wants to join'이 옳다."
          },
          {
            "q": "어법상 틀린 문장을 고르세요.",
            "options": [
              "They decided to save more money.",
              "We planned to meet at the library.",
              "He enjoys to play basketball after school.",
              "She hopes to travel around the world."
            ],
            "answer": 2,
            "explain": "enjoy는 동명사만 취하므로 'enjoys to play'는 틀렸다. 'enjoys playing'이 되어야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe children want ___ to the amusement park this weekend.",
            "options": [
              "to go",
              "go",
              "to going",
              "going"
            ],
            "answer": 0,
            "explain": "want 뒤에는 to부정사가 오고 to 다음에는 동사원형이 오므로 to go가 맞다. 'to going'은 틀린 형태이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nOur teacher decided ___ the test until next Monday.",
            "options": [
              "postponed",
              "postpone",
              "to postpone",
              "postponing"
            ],
            "answer": 2,
            "explain": "decide는 to부정사를 취하므로 to postpone이 맞다. postponing(동명사)은 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy grandfather enjoys ___ in the garden every morning before breakfast.",
            "options": [
              "to work",
              "working",
              "work",
              "works"
            ],
            "answer": 1,
            "explain": "enjoy는 동명사만 취하므로 working이 맞다. 'enjoys to work'는 틀린 표현이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nDon't worry, you don't need ___ so early tomorrow; the trip starts at noon.",
            "options": [
              "to wake up",
              "wake up",
              "woke up",
              "waking up"
            ],
            "answer": 0,
            "explain": "need는 to부정사를 취하므로 to wake up이 맞다. waking up·wake up·woke up은 올 수 없다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.\n( to / we / hope / visit / the museum )",
            "options": [
              "We hope to visit the museum.",
              "We visit hope to the museum.",
              "We hope visit to the museum.",
              "We to hope visit the museum."
            ],
            "answer": 0,
            "explain": "hope + to visit의 어순으로 'We hope to visit the museum.'이 맞다."
          },
          {
            "q": "단어를 바르게 배열한 것을 고르세요.\n( refused / he / to / answer / the question )",
            "options": [
              "He refused to answer the question.",
              "He answer refused to the question.",
              "He to refused answer the question.",
              "He refused answer to the question."
            ],
            "answer": 0,
            "explain": "refuse + to answer의 어순으로 'He refused to answer the question.'이 맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe promised to ___ on time from now on.",
            "options": [
              "arrives",
              "arrived",
              "arriving",
              "arrive"
            ],
            "answer": 3,
            "explain": "to 뒤에는 동사원형이 오므로 arrive가 맞다. arriving·arrives·arrived는 to부정사 형태로 쓸 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nA: What are you going to do this vacation? B: I plan ___ swimming every day.",
            "options": [
              "go",
              "to go",
              "going",
              "went"
            ],
            "answer": 1,
            "explain": "plan은 to부정사를 취하므로 to go가 맞다('go swimming'은 '수영하러 가다'). going·go·went는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe weather report says we can expect ___ some snow tonight.",
            "options": [
              "to see",
              "saw",
              "seeing",
              "see"
            ],
            "answer": 0,
            "explain": "expect는 to부정사를 취하므로 to see가 맞다. seeing·see·saw는 올 수 없다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI want to ___ a foreign language, so I signed up for a Spanish class.",
            "options": [
              "drink",
              "watch",
              "listen",
              "learn"
            ],
            "answer": 3,
            "explain": "언어는 '배우다(learn)'가 자연스럽다. listen/watch/drink는 language와 의미상 어울리지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe hopes to ___ the first prize in the science contest this year.",
            "options": [
              "lose",
              "sell",
              "win",
              "buy"
            ],
            "answer": 2,
            "explain": "대회에서 상은 '타다(win)'가 맞다. lose/buy/sell은 prize와 의미상 맞지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe decided to ___ money every month to buy a new computer.",
            "options": [
              "borrow",
              "save",
              "waste",
              "spend"
            ],
            "answer": 1,
            "explain": "컴퓨터를 사려면 매달 돈을 '모으다(save)'가 자연스럽다. waste/spend/borrow는 문맥에 맞지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe firefighters refused to ___ until everyone was safely out of the building.",
            "options": [
              "leave",
              "stay",
              "arrive",
              "sleep"
            ],
            "answer": 0,
            "explain": "모두 나올 때까지 '떠나기(leave)'를 거부한 것이 자연스럽다. stay/arrive/sleep은 문맥에 맞지 않는다."
          }
        ],
        "sa": [
          {
            "q": "빈칸을 채우세요. (동사 read 이용)\nI want ___ comics.",
            "ko": "나는 만화를 읽고 싶다.",
            "answers": [
              "to read"
            ],
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to read이다."
          },
          {
            "q": "빈칸을 채우세요. (동사 meet 이용)\nI hope ___ my cousin.",
            "ko": "나는 내 사촌을 만나기를 바란다.",
            "answers": [
              "to meet"
            ],
            "explain": "hope 뒤에는 to meet이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 clean 이용)\nWe decided ___ the classroom.",
            "ko": "우리는 교실을 청소하기로 결정했다.",
            "answers": [
              "to clean"
            ],
            "explain": "decide 뒤에는 to clean이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 open 이용)\nThey plan ___ a bakery.",
            "ko": "그들은 빵집을 열 계획이다.",
            "answers": [
              "to open"
            ],
            "explain": "plan 뒤에는 to open이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 be 이용)\nI want ___ a cook.",
            "ko": "나는 요리사가 되고 싶다.",
            "answers": [
              "to be"
            ],
            "explain": "want 뒤에는 to be가 오고 to 뒤에는 동사원형 be가 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 speak 이용)\nI want ___ English fluently.",
            "ko": "나는 영어를 유창하게 말하고 싶다.",
            "answers": [
              "to speak"
            ],
            "explain": "want 뒤에는 to speak이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 climb 이용)\nWe hope ___ the mountain.",
            "ko": "우리는 그 산을 오르기를 바란다.",
            "answers": [
              "to climb"
            ],
            "explain": "hope 뒤에는 to climb이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 wash 이용)\nHe needs ___ his hands.",
            "ko": "그는 손을 씻어야 한다.",
            "answers": [
              "to wash"
            ],
            "explain": "need 뒤에는 to wash가 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 travel 이용)\nI plan ___ to Europe this summer.",
            "ko": "나는 이번 여름에 유럽으로 여행 갈 계획이다.",
            "answers": [
              "to travel"
            ],
            "explain": "plan 뒤에는 to travel이 온다."
          },
          {
            "q": "빈칸을 채우세요. (동사 join 이용)\nI decided ___ the film club.",
            "ko": "나는 영화 동아리에 가입하기로 결정했다.",
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
            "q": "Look outside! ___ is snowing very hard, so take your warm coat with you.",
            "options": [
              "They",
              "It",
              "There",
              "This"
            ],
            "answer": 1,
            "explain": "눈이 오는 날씨를 나타낼 때 비인칭 주어 It을 쓴다. There/This/They는 날씨 표현의 주어가 될 수 없다."
          },
          {
            "q": "Hurry up, everyone! ___ is already seven o'clock and the bus leaves soon.",
            "options": [
              "There",
              "It",
              "He",
              "This"
            ],
            "answer": 1,
            "explain": "시각을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "The library is crowded today because ___ are many students studying for the exam.",
            "options": [
              "they",
              "there",
              "this",
              "it"
            ],
            "answer": 1,
            "explain": "'~가 있다'는 존재를 나타낼 때는 There is/are를 쓴다. 복수 명사(many students)이므로 There are가 맞다. 비인칭 It과 혼동하지 않도록 주의."
          },
          {
            "q": "Don't make plans for tomorrow because ___ is Sunday and the shop will be closed.",
            "options": [
              "It",
              "That",
              "They",
              "There"
            ],
            "answer": 0,
            "explain": "요일을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "My aunt lives in Busan, and ___ is about 300 kilometers from Seoul to her home.",
            "options": [
              "This",
              "It",
              "They",
              "There"
            ],
            "answer": 1,
            "explain": "거리를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "Let's find a place to study; ___ is a nice coffee shop right next to the bookstore.",
            "options": [
              "This",
              "It",
              "Here",
              "There"
            ],
            "answer": 3,
            "explain": "새로운 대상의 존재를 처음 소개할 때는 There is를 쓴다. 'There is a nice coffee shop'가 자연스럽다. 비인칭 It과 구별해야 한다."
          },
          {
            "q": "The leaves are turning red and falling down, so you can tell ___ is autumn now.",
            "options": [
              "It",
              "There",
              "He",
              "This"
            ],
            "answer": 0,
            "explain": "계절을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "Please turn on the lamp because ___ is too dark to read my book here.",
            "options": [
              "This",
              "It",
              "There",
              "That"
            ],
            "answer": 1,
            "explain": "명암(어두움)을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "Everyone is wearing thick coats this week because ___ is very cold outside.",
            "options": [
              "They",
              "It",
              "There",
              "This"
            ],
            "answer": 1,
            "explain": "온도(추움)를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "밑줄 친 It의 쓰임이 나머지 셋과 다른 것을 고르세요.",
            "options": [
              "It is snowing outside.",
              "It is my little brother's toy.",
              "It is almost midnight now.",
              "It is very windy today."
            ],
            "answer": 1,
            "explain": "2번의 It은 '그것'을 뜻하는 대명사이고, 나머지는 날씨·시간을 나타내는 비인칭 It이다."
          },
          {
            "q": "A: Why did you bring an umbrella today?\nB: Because ___ raining outside right now.",
            "options": [
              "there's",
              "this is",
              "he's",
              "it's"
            ],
            "answer": 3,
            "explain": "날씨를 말할 때는 It's를 쓴다. 'It's raining.'이 자연스럽다."
          },
          {
            "q": "___ was so foggy this morning that the drivers could not see the road well.",
            "options": [
              "Those",
              "They",
              "There",
              "It"
            ],
            "answer": 3,
            "explain": "안개 낀 날씨를 나타낼 때는 비인칭 주어 It을 쓴다. 과거이므로 It was를 쓴다."
          },
          {
            "q": "I looked everywhere, but ___ is nothing to eat in the refrigerator.",
            "options": [
              "there",
              "that",
              "this",
              "it"
            ],
            "answer": 0,
            "explain": "'아무것도 없다'는 존재를 나타내므로 There is nothing이 맞다. 비인칭 It과 구별해야 한다."
          },
          {
            "q": "Happy birthday! ___ is May 5th today, and you are finally a teenager.",
            "options": [
              "This",
              "They",
              "It",
              "That"
            ],
            "answer": 2,
            "explain": "날짜를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "This is windy and cold today.",
              "There windy and cold today.",
              "They are windy today.",
              "It's windy and cold today."
            ],
            "answer": 3,
            "explain": "날씨는 It's + 형용사로 나타낸다. 'It's windy and cold today.'가 옳다."
          },
          {
            "q": "다음 중 어법상 틀린 문장을 고르세요.",
            "options": [
              "It's summer in Korea.",
              "It's Monday today.",
              "There is 8 o'clock now.",
              "It's snowy outside."
            ],
            "answer": 2,
            "explain": "시각을 나타낼 때 주어는 It이어야 한다. 'There is 8 o'clock'은 틀리고 'It's 8 o'clock now.'가 옳다."
          },
          {
            "q": "In the middle of summer, ___ is so hot in this city that we go swimming every day.",
            "options": [
              "It",
              "They",
              "There",
              "This"
            ],
            "answer": 0,
            "explain": "온도(더움)를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "A: Is the airport close to here?\nB: No, ___ quite far from the city center.",
            "options": [
              "it's",
              "there's",
              "this is",
              "they're"
            ],
            "answer": 0,
            "explain": "거리를 말할 때는 It's를 쓴다. 'It's far.'가 맞다."
          },
          {
            "q": "다음 중 밑줄 친 It이 비인칭 주어인 문장을 고르세요.",
            "options": [
              "It is on the top shelf.",
              "It is getting dark outside.",
              "I found it under the bed.",
              "It is a birthday present for you."
            ],
            "answer": 1,
            "explain": "'It is getting dark outside.'의 It만 명암을 나타내는 비인칭 It이고, 나머지는 '그것'을 가리키는 대명사이다."
          },
          {
            "q": "밑줄 친 It이 '그것'으로 해석되는 문장을 고르세요.",
            "options": [
              "It's nearly noon now.",
              "It's very cold in winter.",
              "It's a present from my mom.",
              "It's cloudy and grey today."
            ],
            "answer": 2,
            "explain": "'It's a present from my mom.'의 It만 '그것'을 뜻하는 대명사이고, 나머지는 날씨·시간·계절을 나타내는 비인칭 It이다."
          },
          {
            "q": "A: What time is it right now?\nB: ___ a quarter past six, so dinner is almost ready.",
            "options": [
              "That's",
              "There's",
              "This is",
              "It's"
            ],
            "answer": 3,
            "explain": "시각을 말할 때는 It's를 쓴다. 'It's a quarter past six.'는 6시 15분을 뜻한다."
          },
          {
            "q": "두 문장의 빈칸에 공통으로 들어갈 말을 고르세요.\n___ is very cloudy today.\n___ is a long way to the mountain top.",
            "options": [
              "There",
              "It",
              "They",
              "This"
            ],
            "answer": 1,
            "explain": "날씨와 거리를 나타낼 때 모두 비인칭 주어 It을 쓴다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "This is spring, and it are flowers.",
              "It's spring, and there are flowers everywhere.",
              "It are two apples on the table.",
              "There is very sunny today."
            ],
            "answer": 1,
            "explain": "계절은 It's로, 사물의 존재는 There are로 나타낸다. 'It's spring, and there are flowers everywhere.'가 옳다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( getting / it's / dark / outside )",
            "options": [
              "It's getting dark outside.",
              "It's dark getting outside.",
              "Dark it's getting outside.",
              "Outside it's dark getting."
            ],
            "answer": 0,
            "explain": "'It's getting dark outside.'가 올바른 어순이다."
          },
          {
            "q": "___ isn't sunny today; instead, it is cloudy and a little cool.",
            "options": [
              "There",
              "This",
              "It",
              "They"
            ],
            "answer": 2,
            "explain": "날씨를 나타내는 문장의 주어는 비인칭 It이다. 'It isn't sunny today.'가 맞다."
          },
          {
            "q": "Be careful when you walk today because ___ is a lot of ice on the road.",
            "options": [
              "There",
              "It",
              "He",
              "This"
            ],
            "answer": 0,
            "explain": "'얼음이 많이 있다'는 존재를 나타내므로 There is a lot of ice가 맞다. 비인칭 It과 구별해야 한다."
          },
          {
            "q": "You should wear your sunglasses today because it's very ___ and the sun is really strong.",
            "options": [
              "snowy",
              "rainy",
              "cloudy",
              "sunny"
            ],
            "answer": 3,
            "explain": "해가 강한 날씨는 sunny(맑은, 화창한)이다. 나머지는 문맥과 맞지 않는다."
          },
          {
            "q": "The drivers turned on their lights because it was ___ and they could not see far ahead.",
            "options": [
              "foggy",
              "bright",
              "sunny",
              "warm"
            ],
            "answer": 0,
            "explain": "앞이 잘 안 보이는 날씨는 foggy(안개 낀)이다."
          },
          {
            "q": "My house is right beside the school, so it's very ___ and I can walk there in a minute.",
            "options": [
              "high",
              "near",
              "long",
              "far"
            ],
            "answer": 1,
            "explain": "'가깝다'는 near이다. 학교 바로 옆이므로 near가 맞다. far(먼)와 혼동하지 않도록 주의."
          },
          {
            "q": "Hold onto your hat! It's so ___ today that the leaves are flying everywhere.",
            "options": [
              "rainy",
              "windy",
              "sunny",
              "quiet"
            ],
            "answer": 1,
            "explain": "바람이 부는 날씨는 windy이다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (날씨)\n___ is sunny today.",
            "ko": "오늘은 날씨가 화창하다.",
            "answers": [
              "It"
            ],
            "explain": "날씨를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (시간)\n___ is 9 o'clock now.",
            "ko": "지금은 9시이다.",
            "answers": [
              "It"
            ],
            "explain": "시간을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. (줄임말, 요일)\n___ Wednesday today. (It is를 줄여서)",
            "ko": "오늘은 수요일이다.",
            "answers": [
              "It's"
            ],
            "explain": "It is의 줄임말은 It's이다. 요일은 It's로 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (거리)\n___ is 1 km to the park.",
            "ko": "공원까지는 1킬로미터이다.",
            "answers": [
              "It"
            ],
            "explain": "거리를 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (명암)\n___ is very dark outside.",
            "ko": "밖은 매우 어둡다.",
            "answers": [
              "It"
            ],
            "explain": "명암을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. (줄임말)\nA: What time is it now?  B: ___ 8:30. (It is를 줄여서)",
            "ko": "지금은 8시 30분이다.",
            "answers": [
              "It's"
            ],
            "explain": "시간을 답할 때 It's를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (계절)\n___ is summer now.",
            "ko": "지금은 여름이다.",
            "answers": [
              "It"
            ],
            "explain": "계절을 나타낼 때는 비인칭 주어 It을 쓴다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 한 단어를 쓰세요.\n여기서 역까지 멀다.  It's ___ from here to the station.",
            "ko": "여기서 역까지는 멀다.",
            "answers": [
              "far"
            ],
            "explain": "'멀다'는 far로 나타낸다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 한 단어를 쓰세요.\n방 안이 밝다.  It's ___ in the room.",
            "ko": "방 안이 밝다.",
            "answers": [
              "bright"
            ],
            "explain": "'밝다'는 bright로 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 한 단어를 쓰세요. (요일)\n___ is Thursday today.",
            "ko": "오늘은 목요일이다.",
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
            "q": "After running all morning at the sports festival, the twins looked completely ___ when they got home.",
            "options": [
              "exhaustion",
              "exhausted",
              "to exhaust",
              "exhaustedly"
            ],
            "answer": 1,
            "explain": "감각동사 look 뒤에는 형용사가 와요. 부사 exhaustedly나 명사 exhaustion이 아니라 형용사 exhausted가 정답이에요."
          },
          {
            "q": "During the science class, the students listened ___ to the teacher's interesting story.",
            "options": [
              "quietness",
              "quiet",
              "quieter",
              "quietly"
            ],
            "answer": 3,
            "explain": "listen은 일반동사라서 뒤에 부사가 와요. 감각동사가 아니므로 형용사 quiet가 아니라 부사 quietly가 맞아요."
          },
          {
            "q": "The fresh cookies from the bakery smelled so ___ that everyone wanted one.",
            "options": [
              "wonderfully",
              "wonderful",
              "wonderfulness",
              "to wonderful"
            ],
            "answer": 1,
            "explain": "감각동사 smell 뒤에는 형용사가 와요. 부사 wonderfully가 아니라 형용사 wonderful이 정답이에요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The stew tastes deliciously.",
              "The stew tastes delicious.",
              "The stew taste delicious.",
              "The stew tastes a delicious."
            ],
            "answer": 1,
            "explain": "감각동사 taste 뒤에는 형용사 delicious가 와요. 부사 deliciously는 틀리고, 주어가 단수라 tastes가 맞아요."
          },
          {
            "q": "With that black cap on, my little brother looks ___ a real baseball player.",
            "options": [
              "as",
              "very",
              "likely",
              "like"
            ],
            "answer": 3,
            "explain": "뒤에 명사(a real baseball player)가 오므로 'look like + 명사'를 써요. 빈칸에는 like가 정답이에요."
          },
          {
            "q": "When I touched the sleeping cat, its fur felt very ___ and warm.",
            "options": [
              "to smooth",
              "smooth",
              "smoothly",
              "smoothness"
            ],
            "answer": 1,
            "explain": "감각동사 feel 뒤에는 형용사가 와요. 부사 smoothly가 아니라 형용사 smooth가 맞아요."
          },
          {
            "q": "My sister sang the song so ___ that the whole audience clapped for a long time.",
            "options": [
              "beauty",
              "beautifully",
              "beautiful",
              "to beautiful"
            ],
            "answer": 1,
            "explain": "sing은 일반동사라서 뒤에 부사가 와요. 감각동사가 아니므로 형용사 beautiful이 아니라 부사 beautifully가 맞아요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The apples on the table looks fresh.",
              "The apples on the table look fresh.",
              "The apples on the table look freshly.",
              "The apples on the table looking fresh."
            ],
            "answer": 1,
            "explain": "감각동사 look 뒤에는 형용사 fresh가 와요. 주어가 복수(apples)라 look이 맞고, 부사 freshly는 틀려요."
          },
          {
            "q": "Your plan to help the old man cross the road sounds really ___.",
            "options": [
              "kindness",
              "to kind",
              "kind",
              "kindly"
            ],
            "answer": 2,
            "explain": "감각동사 sound 뒤에는 형용사가 와요. 부사 kindly가 아니라 형용사 kind가 정답이에요."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것은?\nThe milk in the fridge smells ___.",
            "options": [
              "strangely",
              "fresh",
              "sour",
              "bad"
            ],
            "answer": 0,
            "explain": "감각동사 smell 뒤에는 형용사만 올 수 있어요. strangely는 부사라서 들어갈 수 없어요. (strange로 써야 함)"
          },
          {
            "q": "The old wooden bridge looked ___, so we decided not to walk across it.",
            "options": [
              "danger",
              "dangerous",
              "to dangerous",
              "dangerously"
            ],
            "answer": 1,
            "explain": "감각동사 look 뒤에는 형용사가 와요. 부사 dangerously나 명사 danger가 아니라 형용사 dangerous가 맞아요."
          },
          {
            "q": "He opened the door ___ so that he would not wake the sleeping baby.",
            "options": [
              "quieter",
              "quiet",
              "quietness",
              "quietly"
            ],
            "answer": 3,
            "explain": "open은 일반동사라서 동작을 꾸미는 부사가 와요. 형용사 quiet가 아니라 부사 quietly가 맞아요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "She looks like a movie star.",
              "She look like a movie star.",
              "She looks likely a movie star.",
              "She looks a movie star."
            ],
            "answer": 0,
            "explain": "뒤에 명사(a movie star)가 오면 look like를 써요. look 뒤에 바로 명사는 올 수 없고, 주어가 She라 looks가 맞아요."
          },
          {
            "q": "The homemade lemonade tasted a little ___, so I added some sugar.",
            "options": [
              "to sour",
              "sourly",
              "sour",
              "sourness"
            ],
            "answer": 2,
            "explain": "감각동사 taste 뒤에는 형용사가 와요. 부사 sourly가 아니라 형용사 sour가 정답이에요."
          },
          {
            "q": "After cleaning her whole room all afternoon, Mina felt ___ but happy.",
            "options": [
              "tiredly",
              "tiredness",
              "to tired",
              "tired"
            ],
            "answer": 3,
            "explain": "감각동사 feel 뒤에는 형용사가 와요. 부사 tiredly가 아니라 형용사 tired가 맞아요."
          },
          {
            "q": "다음 중 밑줄 친 부분이 틀린 문장은?",
            "options": [
              "The baby's skin feels soft.",
              "The baby's skin feels nice.",
              "The baby's skin feels smoothly.",
              "The baby's skin feels warm."
            ],
            "answer": 2,
            "explain": "감각동사 feel 뒤에는 형용사가 와야 하므로 부사 smoothly는 틀려요. 형용사 smooth로 고쳐야 해요."
          },
          {
            "q": "The thunder last night sounded so ___ that my dog hid under the bed.",
            "options": [
              "loudness",
              "loud",
              "loudly",
              "to loud"
            ],
            "answer": 1,
            "explain": "감각동사 sound 뒤에는 형용사가 와요. 부사 loudly가 아니라 형용사 loud가 정답이에요."
          },
          {
            "q": "The whole team worked ___ to finish the class project before the deadline.",
            "options": [
              "harder",
              "hardness",
              "hard",
              "hardly"
            ],
            "answer": 2,
            "explain": "work를 꾸며 '열심히'라는 뜻일 때는 hard가 부사예요. hardly는 '거의 ~않다'라는 다른 뜻이라 문맥에 안 맞아요."
          },
          {
            "q": "This soup looks a bit ___, but it actually tastes very good.",
            "options": [
              "strangeness",
              "to strange",
              "strange",
              "strangely"
            ],
            "answer": 2,
            "explain": "감각동사 look 뒤에는 형용사가 와요. 부사 strangely가 아니라 형용사 strange가 맞아요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The flowers smell sweet.",
              "The flowers smells sweet.",
              "The flowers smell sweetly.",
              "The flowers smell a sweet."
            ],
            "answer": 0,
            "explain": "감각동사 smell 뒤에는 형용사 sweet가 와요. 주어가 복수(flowers)라 smell이 맞고, 부사 sweetly는 틀려요."
          },
          {
            "q": "Everyone at the school festival looked ___ in their colorful costumes.",
            "options": [
              "greatness",
              "great",
              "to great",
              "greatly"
            ],
            "answer": 1,
            "explain": "감각동사 look 뒤에는 형용사가 와요. 부사 greatly가 아니라 형용사 great가 정답이에요."
          },
          {
            "q": "The singer's new song sounds ___, so I listen to it every single day.",
            "options": [
              "to amazing",
              "amazement",
              "amazingly",
              "amazing"
            ],
            "answer": 3,
            "explain": "감각동사 sound 뒤에는 형용사가 와요. 부사 amazingly가 아니라 형용사 amazing이 맞아요."
          },
          {
            "q": "The fast runner moved ___ across the finish line and won the race.",
            "options": [
              "quickness",
              "quick",
              "quickly",
              "to quick"
            ],
            "answer": 2,
            "explain": "move는 일반동사라서 동작을 꾸미는 부사가 와요. 감각동사가 아니므로 형용사 quick이 아니라 부사 quickly가 맞아요."
          },
          {
            "q": "That big white cloud in the sky looks ___ a fluffy rabbit.",
            "options": [
              "likely",
              "like",
              "to",
              "as"
            ],
            "answer": 1,
            "explain": "뒤에 명사(a fluffy rabbit)가 오므로 look like를 써요. 빈칸에는 like가 정답이에요."
          },
          {
            "q": "The medicine tasted so ___ that the little child did not want to take it.",
            "options": [
              "bitter",
              "bitterly",
              "to bitter",
              "bitterness"
            ],
            "answer": 0,
            "explain": "감각동사 taste 뒤에는 형용사가 와요. 부사 bitterly가 아니라 형용사 bitter가 정답이에요."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "My grandfather look healthy.",
              "My grandfather looks healthy.",
              "My grandfather looks a healthy.",
              "My grandfather looks healthily."
            ],
            "answer": 1,
            "explain": "감각동사 look 뒤에는 형용사 healthy가 와요. 부사 healthily는 틀리고, 주어가 단수라 looks가 맞아요."
          },
          {
            "q": "The ice cream just came out of the freezer, so it felt very ___ in my hand.",
            "options": [
              "bright",
              "cold",
              "loud",
              "sour"
            ],
            "answer": 1,
            "explain": "감각동사 feel 뒤 형용사 중 문맥(냉동실에서 막 꺼낸 아이스크림)에 맞는 건 '차가운' cold예요. 나머지는 촉감과 안 맞아요."
          },
          {
            "q": "Be careful! The stove was just on, so the metal pan feels really ___.",
            "options": [
              "dark",
              "hot",
              "quiet",
              "sweet"
            ],
            "answer": 1,
            "explain": "방금 켰던 가스레인지의 팬이므로 촉감은 '뜨거운' hot이 맞아요. quiet, sweet, dark는 의미상 어울리지 않아요."
          },
          {
            "q": "I forgot to add any sugar, so my coffee tasted really ___ this morning.",
            "options": [
              "bright",
              "soft",
              "loud",
              "bitter"
            ],
            "answer": 3,
            "explain": "설탕을 안 넣은 커피 맛은 '쓴' bitter가 자연스러워요. soft, loud, bright는 맛을 나타내지 못해요."
          },
          {
            "q": "The garbage had been outside for days, so it smelled absolutely ___.",
            "options": [
              "fresh",
              "sweet",
              "soft",
              "terrible"
            ],
            "answer": 3,
            "explain": "며칠 밖에 둔 쓰레기 냄새는 '지독한' terrible이 맞아요. sweet, fresh는 반대 의미라 문맥에 안 맞아요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.\nThis juice tastes ___.  (이 주스는 단맛이 난다.)",
            "ko": "이 주스는 단맛이 난다.",
            "answers": [
              "sweet"
            ],
            "explain": "taste 뒤에는 형용사가 와요. '단맛이 난다'는 tastes sweet이에요."
          },
          {
            "q": "괄호 안의 부사를 알맞은 형태(형용사)로 고쳐 쓰세요.\nThe music sounds (loudly).  →  The music sounds ___.",
            "ko": "그 음악은 시끄럽게 들린다.",
            "answers": [
              "loud"
            ],
            "explain": "sound 뒤에는 형용사가 와요. 부사 loudly를 형용사 loud로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.\nYou look ___ today.  (너는 오늘 행복해 보인다.)",
            "ko": "너는 오늘 행복해 보인다.",
            "answers": [
              "happy"
            ],
            "explain": "look 뒤에는 형용사가 와요. '행복해 보인다'는 look happy예요."
          },
          {
            "q": "괄호 안의 단어를 알맞은 형태로 고쳐 쓰세요.\nThe bread smells (freshly).  →  The bread smells ___.",
            "ko": "그 빵은 신선한 냄새가 난다.",
            "answers": [
              "fresh"
            ],
            "explain": "smell 뒤에는 형용사가 와요. 부사 freshly를 형용사 fresh로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.\nThis towel feels ___.  (이 수건은 따뜻하게 느껴진다.)",
            "ko": "이 수건은 따뜻하게 느껴진다.",
            "answers": [
              "warm"
            ],
            "explain": "feel 뒤에는 형용사가 와요. '따뜻하게 느껴진다'는 feels warm이에요."
          },
          {
            "q": "괄호 안의 단어를 알맞은 형태로 고쳐 쓰세요.\nThis lemon tastes (sourly).  →  This lemon tastes ___.",
            "ko": "이 레몬은 신맛이 난다.",
            "answers": [
              "sour"
            ],
            "explain": "taste 뒤에는 형용사가 와요. 부사 sourly를 형용사 sour로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 두 단어를 쓰세요.\nYou ___ ___ your father.  (너는 너의 아빠처럼 보인다.)",
            "ko": "너는 너의 아빠처럼 보인다.",
            "answers": [
              "look like",
              "looklike"
            ],
            "explain": "'~처럼 보이다'는 뒤에 명사가 오므로 look like를 써요."
          },
          {
            "q": "다음 문장에서 틀린 한 단어를 바르게 고쳐 쓰세요.\nHe looks tiredly today.  →  He looks ___ today.",
            "ko": "그는 오늘 피곤해 보인다.",
            "answers": [
              "tired"
            ],
            "explain": "look 뒤에는 형용사가 와야 해요. 부사 tiredly를 형용사 tired로 고쳐야 해요."
          },
          {
            "q": "빈칸에 알맞은 형용사 한 단어를 쓰세요.\nThe pillow feels ___.  (그 베개는 부드럽게 느껴진다.)",
            "ko": "그 베개는 부드럽게 느껴진다.",
            "answers": [
              "soft"
            ],
            "explain": "feel 뒤에는 형용사가 와요. '부드럽게 느껴진다'는 feels soft예요."
          },
          {
            "q": "괄호 안의 단어를 알맞은 형태로 고쳐 쓰세요.\nYour voice sounds (greatly).  →  Your voice sounds ___.",
            "ko": "너의 목소리는 멋지게 들린다.",
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
            "q": "My little brother really enjoys ___ cartoons on Saturday mornings.",
            "options": [
              "to watch",
              "watches",
              "watching",
              "watch"
            ],
            "answer": 2,
            "explain": "enjoy 뒤에는 동명사를 쓰므로 watching이 정답이고, 동사원형·현재형·to부정사는 올 수 없다."
          },
          {
            "q": "I want ___ a new smartphone, but it is much too expensive for me now.",
            "options": [
              "buys",
              "buy",
              "to buy",
              "buying"
            ],
            "answer": 2,
            "explain": "want는 목적어로 to부정사를 쓰는 동사이므로 to buy가 정답이다. 동명사 buying을 쓰지 않는 점을 구분해야 한다."
          },
          {
            "q": "She finished ___ her science project late last night.",
            "options": [
              "write",
              "wrote",
              "to write",
              "writing"
            ],
            "answer": 3,
            "explain": "finish 뒤에는 동명사를 쓰고 write는 e를 빼고 writing이 되므로 정답은 writing이다."
          },
          {
            "q": "You should always turn off the lights before ___ the classroom.",
            "options": [
              "leaves",
              "leave",
              "to leave",
              "leaving"
            ],
            "answer": 3,
            "explain": "전치사 before 뒤에는 동명사가 오므로 leaving이 정답이다. 전치사 뒤에는 to부정사를 쓸 수 없다."
          },
          {
            "q": "We decided ___ a surprise party for our homeroom teacher.",
            "options": [
              "having",
              "has",
              "to have",
              "have"
            ],
            "answer": 2,
            "explain": "decide는 to부정사를 목적어로 취하는 동사이므로 to have가 정답이다. 동명사 having과 혼동하지 않아야 한다."
          },
          {
            "q": "Would you mind ___ me the salt, please?",
            "options": [
              "to pass",
              "passing",
              "pass",
              "passes"
            ],
            "answer": 1,
            "explain": "mind 뒤에는 동명사를 쓰므로 passing이 정답이고 to부정사나 동사원형은 올 수 없다."
          },
          {
            "q": "The doctor told him to avoid ___ too much salty food.",
            "options": [
              "eating",
              "to eat",
              "eat",
              "ate"
            ],
            "answer": 0,
            "explain": "avoid 뒤에는 동명사를 쓰므로 eating이 정답이다. to eat은 avoid의 목적어가 될 수 없다."
          },
          {
            "q": "My parents hope ___ Jeju Island together next summer.",
            "options": [
              "visits",
              "visit",
              "visiting",
              "to visit"
            ],
            "answer": 3,
            "explain": "hope는 to부정사를 목적어로 쓰는 동사이므로 to visit이 정답이다. 동명사 visiting을 쓰지 않는다."
          },
          {
            "q": "___ books in bed is my favorite way to relax after school. (침대에서 책 읽기)",
            "options": [
              "To reads",
              "Reads",
              "Read",
              "Reading"
            ],
            "answer": 3,
            "explain": "문장의 주어 자리에는 동명사가 올 수 있으므로 Reading이 정답이다. To reads는 어법상 틀린 형태이다."
          },
          {
            "q": "Even after the rain started, the players kept ___ on the field.",
            "options": [
              "run",
              "running",
              "ran",
              "to run"
            ],
            "answer": 1,
            "explain": "keep 뒤에는 동명사를 쓰고 run은 n을 하나 더 써서 running이 되므로 정답은 running이다."
          },
          {
            "q": "He gave up ___ the guitar because he had no free time.",
            "options": [
              "to learn",
              "learns",
              "learn",
              "learning"
            ],
            "answer": 3,
            "explain": "give up 뒤에는 동명사를 쓰므로 learning이 정답이고 to learn은 쓸 수 없다."
          },
          {
            "q": "How about ___ a movie together this weekend?",
            "options": [
              "watch",
              "watching",
              "to watch",
              "watches"
            ],
            "answer": 1,
            "explain": "How about은 전치사 about을 포함하므로 뒤에 동명사 watching이 온다. to부정사는 올 수 없다."
          },
          {
            "q": "Our team practices ___ soccer on the playground every day.",
            "options": [
              "playing",
              "plays",
              "to play",
              "play"
            ],
            "answer": 0,
            "explain": "practice 뒤에는 동명사를 쓰므로 playing이 정답이다."
          },
          {
            "q": "My sister planned ___ her friends at the shopping mall.",
            "options": [
              "meet",
              "to meet",
              "meets",
              "meeting"
            ],
            "answer": 1,
            "explain": "plan은 to부정사를 목적어로 쓰는 동사이므로 to meet이 정답이다. 동명사 meeting과 구분해야 한다."
          },
          {
            "q": "My cousin is really good at ___ delicious cookies for us.",
            "options": [
              "baking",
              "bakes",
              "to bake",
              "bake"
            ],
            "answer": 0,
            "explain": "전치사 at 뒤에는 동명사를 쓰고 bake는 e를 빼고 baking이 되므로 정답은 baking이다."
          },
          {
            "q": "Thank you so much for ___ my birthday party this special.",
            "options": [
              "making",
              "make",
              "to make",
              "makes"
            ],
            "answer": 0,
            "explain": "전치사 for 뒤에는 동명사를 쓰고 make는 e를 빼고 making이 되므로 정답은 making이다."
          },
          {
            "q": "My shy friend is afraid of ___ in front of many people.",
            "options": [
              "speaks",
              "speak",
              "speaking",
              "to speak"
            ],
            "answer": 2,
            "explain": "전치사 of 뒤에는 동명사를 쓰므로 speaking이 정답이다. to부정사는 전치사 뒤에 올 수 없다."
          },
          {
            "q": "He is very proud of ___ first prize in the singing contest.",
            "options": [
              "wins",
              "win",
              "winning",
              "to win"
            ],
            "answer": 2,
            "explain": "전치사 of 뒤에는 동명사를 쓰고 win은 n을 하나 더 써서 winning이 되므로 정답은 winning이다."
          },
          {
            "q": "My biggest dream is ___ around the whole world someday.",
            "options": [
              "to traveling",
              "travel",
              "traveling",
              "travels"
            ],
            "answer": 2,
            "explain": "be동사 뒤 보어 자리에 동명사가 올 수 있으므로 traveling이 정답이다. to traveling은 어법상 틀린 형태이다."
          },
          {
            "q": "다음 중 밑줄 친 부분이 어법상 틀린 것은?",
            "options": [
              "I enjoy playing tennis.",
              "She wants to go home.",
              "He finished to read the book.",
              "They keep smiling."
            ],
            "answer": 2,
            "explain": "finish 뒤에는 동명사를 써야 하므로 to read가 아니라 reading이 되어야 한다. 따라서 3번이 틀렸다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "She avoided answer the question.",
              "They finished to eat lunch.",
              "He is good at drawing.",
              "I enjoy to swim in summer."
            ],
            "answer": 2,
            "explain": "전치사 at 뒤에는 동명사가 오므로 He is good at drawing이 올바르다. 나머지는 enjoy·avoid·finish 뒤에 동명사를 써야 한다."
          },
          {
            "q": "다음 중 빈칸에 동명사(-ing)가 들어가는 것은?",
            "options": [
              "I hope ___ you again soon.",
              "We decided ___ early today.",
              "She enjoys ___ comic books.",
              "He wants ___ some cold juice."
            ],
            "answer": 2,
            "explain": "hope·decide·want 뒤에는 to부정사를, enjoy 뒤에는 동명사를 쓴다. 따라서 동명사가 들어가는 것은 3번이다."
          },
          {
            "q": "Please wash your hands well before ___ lunch in the cafeteria.",
            "options": [
              "eats",
              "eat",
              "eating",
              "to eat"
            ],
            "answer": 2,
            "explain": "전치사 before 뒤에는 동명사가 오므로 eating이 정답이다."
          },
          {
            "q": "I am not good at ___ pictures, but I really like art class.",
            "options": [
              "draw",
              "draws",
              "to draw",
              "drawing"
            ],
            "answer": 3,
            "explain": "전치사 at 뒤에는 동명사를 쓰므로 drawing이 정답이다."
          },
          {
            "q": "Our whole class hopes ___ the soccer match this Sunday.",
            "options": [
              "wins",
              "winning",
              "to win",
              "win"
            ],
            "answer": 2,
            "explain": "hope는 to부정사를 목적어로 쓰는 동사이므로 to win이 정답이다. 동명사 winning과 구분해야 한다."
          },
          {
            "q": "___ hard every single day helped me become a better dancer. (매일 열심히 연습하기)",
            "options": [
              "Practice",
              "Practices",
              "To practices",
              "Practicing"
            ],
            "answer": 3,
            "explain": "주어 자리에는 동명사가 올 수 있으므로 Practicing이 정답이다. To practices는 어법상 틀린 형태이다."
          },
          {
            "q": "My grandmother enjoys ___ beautiful flowers in her garden every spring.",
            "options": [
              "growing",
              "singing",
              "cooking",
              "driving"
            ],
            "answer": 0,
            "explain": "정원에서 꽃을 '기르다'라는 의미이므로 growing이 알맞다. cooking·driving·singing은 문맥상 어색하다."
          },
          {
            "q": "Before ___ the test, please read all of the questions carefully.",
            "options": [
              "eating",
              "sleeping",
              "cleaning",
              "starting"
            ],
            "answer": 3,
            "explain": "시험을 '시작하기' 전에 문제를 읽으라는 뜻이므로 starting이 알맞다. 나머지는 의미가 맞지 않는다."
          },
          {
            "q": "He is very good at ___ difficult problems in math class.",
            "options": [
              "solving",
              "washing",
              "dancing",
              "cooking"
            ],
            "answer": 0,
            "explain": "문제를 '풀다'라는 의미이므로 solving이 알맞다. washing·dancing·cooking은 문맥에 맞지 않는다."
          },
          {
            "q": "We should avoid ___ too much junk food to stay healthy.",
            "options": [
              "singing",
              "reading",
              "writing",
              "eating"
            ],
            "answer": 3,
            "explain": "정크푸드를 '먹는 것'을 피해야 한다는 의미이므로 eating이 알맞다. 나머지는 의미상 맞지 않는다."
          }
        ],
        "sa": [
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. I enjoy ___ (draw) cartoons.",
            "ko": "나는 만화 그리는 것을 즐긴다.",
            "answers": [
              "drawing"
            ],
            "explain": "enjoy 뒤에는 동명사를 쓴다. draw → drawing."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. He finished ___ (clean) his room.",
            "ko": "그는 방 청소하는 것을 끝냈다.",
            "answers": [
              "cleaning"
            ],
            "explain": "finish 뒤에는 동명사를 쓴다. clean → cleaning."
          },
          {
            "q": "동명사 철자 규칙에 맞게 쓰세요. make의 동명사 형태는?",
            "ko": "make의 동명사 형태는 making이다.",
            "answers": [
              "making"
            ],
            "explain": "-e로 끝나는 동사는 e를 빼고 -ing를 붙인다. make → making."
          },
          {
            "q": "동명사 철자 규칙에 맞게 쓰세요. run의 동명사 형태는?",
            "ko": "run의 동명사 형태는 running이다.",
            "answers": [
              "running"
            ],
            "explain": "'단모음+단자음'으로 끝나면 자음을 하나 더 쓰고 -ing를 붙인다. run → running."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. She is good at ___ (swim).",
            "ko": "그녀는 수영하는 것을 잘한다.",
            "answers": [
              "swimming"
            ],
            "explain": "전치사 at 뒤에는 동명사를 쓰고 swim은 m을 하나 더 써서 swimming이 된다."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. Thank you for ___ (help) me.",
            "ko": "나를 도와줘서 고마워.",
            "answers": [
              "helping"
            ],
            "explain": "전치사 for 뒤에는 동명사를 쓴다. help → helping."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. They keep ___ (talk) in class.",
            "ko": "그들은 수업 중에 계속 이야기한다.",
            "answers": [
              "talking"
            ],
            "explain": "keep 뒤에는 동명사를 쓴다. talk → talking."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. My hobby is ___ (write) stories.",
            "ko": "나의 취미는 이야기를 쓰는 것이다.",
            "answers": [
              "writing"
            ],
            "explain": "보어 자리에 동명사가 오고 write는 e를 빼고 writing이 된다."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. We avoid ___ (sit) too long.",
            "ko": "우리는 너무 오래 앉아 있는 것을 피한다.",
            "answers": [
              "sitting"
            ],
            "explain": "avoid 뒤에는 동명사를 쓰고 sit은 t를 하나 더 써서 sitting이 된다."
          },
          {
            "q": "괄호 안의 동사를 동명사로 바꿔 쓰세요. He practices ___ (play) the piano every day.",
            "ko": "그는 매일 피아노 치는 것을 연습한다.",
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
            "q": "My new bike is much ______ than my old one, so I can get to school quickly.",
            "options": [
              "fast",
              "fastest",
              "faster",
              "more fast"
            ],
            "answer": 2,
            "explain": "much는 비교급을 강조하며, 짧은 단어 fast의 비교급은 faster입니다. fastest는 최상급이라 than과 함께 쓸 수 없습니다."
          },
          {
            "q": "The math test was much harder ______ the science test, so my score was low.",
            "options": [
              "then",
              "that",
              "than",
              "as"
            ],
            "answer": 2,
            "explain": "비교급 뒤에서 '~보다'는 then(그때)이 아니라 than입니다. 철자를 혼동하지 않도록 주의합니다."
          },
          {
            "q": "This tower is ______ taller than the building next to it, so you can see it from far away.",
            "options": [
              "too",
              "so",
              "very",
              "much"
            ],
            "answer": 3,
            "explain": "비교급 taller를 강조할 때는 much/far/a lot을 씁니다. very는 원급만 강조하고 비교급은 강조하지 못합니다."
          },
          {
            "q": "My backpack is as ______ as yours; they weigh exactly the same.",
            "options": [
              "heavy",
              "more heavy",
              "heaviest",
              "heavier"
            ],
            "answer": 0,
            "explain": "'as ~ as(같은 정도)' 사이에는 비교급이 아니라 원급 heavy를 씁니다."
          },
          {
            "q": "In summer, Daegu is usually ______ than Seoul, so people say it feels like an oven.",
            "options": [
              "hottest",
              "more hot",
              "hotter",
              "hot"
            ],
            "answer": 2,
            "explain": "hot은 「단모음+단자음」이라 t를 겹쳐 hotter가 되고, than과 함께 쓰는 비교급입니다. hottest는 최상급입니다."
          },
          {
            "q": "This movie is ______ than the book, so I really enjoyed watching it in the theater.",
            "options": [
              "more interesting",
              "interesting",
              "most interesting",
              "interestinger"
            ],
            "answer": 0,
            "explain": "interesting은 긴 단어라 more interesting으로 비교급을 만듭니다. most interesting은 최상급입니다."
          },
          {
            "q": "Your plan is ______ than mine, so let's follow yours for the school festival.",
            "options": [
              "better",
              "best",
              "more good",
              "gooder"
            ],
            "answer": 0,
            "explain": "good의 비교급은 불규칙 형태 better입니다. best는 최상급이라 than과 쓸 수 없습니다."
          },
          {
            "q": "Traffic this morning was ______ than usual, so the bus arrived twenty minutes late.",
            "options": [
              "worse",
              "worst",
              "badder",
              "more bad"
            ],
            "answer": 0,
            "explain": "bad의 비교급은 불규칙 형태 worse입니다. worst는 최상급입니다."
          },
          {
            "q": "The sky is much ______ today than yesterday, so we may not see the stars tonight.",
            "options": [
              "cloudyer",
              "more cloudy",
              "cloudier",
              "cloudiest"
            ],
            "answer": 2,
            "explain": "「자음+y」로 끝나는 cloudy는 y를 i로 바꿔 cloudier가 됩니다."
          },
          {
            "q": "Be careful! This river is ______ deeper than the pool at school.",
            "options": [
              "many",
              "a lot",
              "very",
              "too"
            ],
            "answer": 1,
            "explain": "비교급 deeper를 강조하는 말은 a lot(=much/far)입니다. very는 비교급을 강조하지 못합니다."
          },
          {
            "q": "There are two roads to the park. This one is ______, so let's take it to save time.",
            "options": [
              "shortest",
              "short",
              "shorter",
              "the shortest"
            ],
            "answer": 2,
            "explain": "둘 중 하나를 비교할 때는 비교급 shorter를 씁니다. 셋 이상에서 '가장 ~한'일 때만 최상급을 씁니다."
          },
          {
            "q": "For me, science is ______ interesting than history, so I study it every night.",
            "options": [
              "much more",
              "more much",
              "much most",
              "very more"
            ],
            "answer": 0,
            "explain": "긴 단어 비교급 more interesting을 강조할 때는 앞에 much를 붙여 much more interesting으로 씁니다."
          },
          {
            "q": "I read ______ books this month than last month because I had more free time.",
            "options": [
              "much",
              "more",
              "most",
              "many"
            ],
            "answer": 1,
            "explain": "셀 수 있는 명사 books 앞에서 '더 많은'은 many의 비교급 more입니다."
          },
          {
            "q": "This box is ______ than that one, so I can carry it with one hand.",
            "options": [
              "light",
              "lighter",
              "more light",
              "lightest"
            ],
            "answer": 1,
            "explain": "light는 짧은 단어라 -er을 붙여 lighter가 됩니다."
          },
          {
            "q": "The City Zoo is ______ than the Green Zoo, so it keeps many more animals.",
            "options": [
              "largeer",
              "larger",
              "largest",
              "more large"
            ],
            "answer": 1,
            "explain": "-e로 끝나는 large는 -r만 붙여 larger가 됩니다."
          },
          {
            "q": "Seoul is far ______ than my small hometown, so it has many tall buildings.",
            "options": [
              "bigger",
              "biger",
              "biggest",
              "more big"
            ],
            "answer": 0,
            "explain": "big은 「단모음+단자음」이라 g를 겹쳐 bigger가 됩니다. far는 비교급을 강조하는 말입니다."
          },
          {
            "q": "My little sister sings ______ than I do, so she always joins the school choir.",
            "options": [
              "more well",
              "better",
              "gooder",
              "weller"
            ],
            "answer": 1,
            "explain": "부사 well의 비교급도 불규칙 형태 better입니다. weller나 more well은 틀린 형태입니다."
          },
          {
            "q": "비교급 문장에서 than은 어디에 오나요? (어순)",
            "options": [
              "비교급 바로 앞에",
              "비교급 바로 뒤에",
              "주어 앞에",
              "문장 맨 끝에만"
            ],
            "answer": 1,
            "explain": "'비교급 + than + 비교 대상'의 순서로, than은 비교급 바로 뒤에 옵니다."
          },
          {
            "q": "다음 문장에서 어법상 틀린 부분은? This puzzle is very harder than that one.",
            "options": [
              "harder",
              "than that one",
              "This puzzle",
              "very"
            ],
            "answer": 3,
            "explain": "비교급 harder는 very로 강조할 수 없습니다. much/far/a lot으로 바꿔야 합니다."
          },
          {
            "q": "다음 문장에서 어법상 틀린 부분은? My phone is more cheap than yours.",
            "options": [
              "My phone",
              "than",
              "more cheap",
              "yours"
            ],
            "answer": 2,
            "explain": "cheap은 짧은 단어라 more cheap이 아니라 cheaper로 써야 합니다."
          },
          {
            "q": "The blue whale is the ______ animal on Earth, even ______ than the biggest dinosaur.",
            "options": [
              "largest / larger",
              "larger / largest",
              "large / large",
              "larger / larger"
            ],
            "answer": 0,
            "explain": "'가장 ~한'은 최상급 largest, '~보다 더 ~한'은 than과 함께 비교급 larger를 씁니다."
          },
          {
            "q": "Which subject is ______ for you, math or English? (둘 중 어느 것이 더 쉬운지)",
            "options": [
              "easiest",
              "easy",
              "easier",
              "more easy"
            ],
            "answer": 2,
            "explain": "둘을 비교하므로 easy의 비교급 easier를 씁니다. easy는 y를 i로 바꿔 easier가 됩니다."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "My room is smaller than yours.",
              "My room is more small than yours.",
              "My room is smaller then yours.",
              "My room is small than yours."
            ],
            "answer": 0,
            "explain": "small은 smaller로 만들고, '~보다'는 then이 아니라 than입니다."
          },
          {
            "q": "The actor became ______ than before after the movie won a big prize.",
            "options": [
              "famouser",
              "famousest",
              "more famous",
              "most famous"
            ],
            "answer": 2,
            "explain": "famous는 긴 단어라 more famous로 비교급을 만듭니다."
          },
          {
            "q": "My cousin is only two years ______ than me, so we play together a lot.",
            "options": [
              "more old",
              "old",
              "older",
              "oldest"
            ],
            "answer": 2,
            "explain": "old는 짧은 단어라 -er을 붙여 older가 됩니다."
          },
          {
            "q": "단어를 바르게 배열한 것은? ( than / runs / he / faster / me )",
            "options": [
              "He runs faster than me.",
              "He faster runs than me.",
              "He runs than faster me.",
              "Faster he runs than me."
            ],
            "answer": 0,
            "explain": "'주어+동사+비교급+than+비교 대상' 순서로 He runs faster than me.가 맞습니다."
          },
          {
            "q": "This chair is not as ______ as that sofa, so my back hurts when I sit here.",
            "options": [
              "comfortabler",
              "more comfortable",
              "comfortable",
              "most comfortable"
            ],
            "answer": 2,
            "explain": "'as ~ as' 사이에는 원급 comfortable을 씁니다. 비교급/최상급 형태는 쓸 수 없습니다."
          },
          {
            "q": "The homework today was ______ than yesterday's, so I finished it in ten minutes.",
            "options": [
              "more easy",
              "easier",
              "easyer",
              "easiest"
            ],
            "answer": 1,
            "explain": "「자음+y」로 끝나는 easy는 y를 i로 바꿔 easier가 됩니다."
          },
          {
            "q": "This bag is ______ than that one; it has room for all my books and my lunch box.",
            "options": [
              "more big",
              "biger",
              "biggest",
              "bigger"
            ],
            "answer": 3,
            "explain": "big은 마지막 자음을 겹쳐 bigger가 됩니다."
          },
          {
            "q": "다음 중 비교급 형태가 틀린 것은?",
            "options": [
              "more careful",
              "usefuller",
              "thinner",
              "happier"
            ],
            "answer": 1,
            "explain": "useful은 긴 단어라 more useful로 써야 합니다. usefuller는 틀린 형태입니다."
          }
        ],
        "sa": [
          {
            "q": "big의 비교급을 쓰세요. (한 단어)",
            "ko": "big의 비교급은 bigger이다.",
            "answers": [
              "bigger"
            ],
            "explain": "big은 마지막 자음 g를 한 번 더 쓰고 -er을 붙여 bigger가 됩니다."
          },
          {
            "q": "good의 비교급을 쓰세요. (한 단어)",
            "ko": "good의 비교급은 better이다.",
            "answers": [
              "better"
            ],
            "explain": "good은 불규칙 비교급으로 better가 됩니다."
          },
          {
            "q": "easy의 비교급을 쓰세요. (한 단어)",
            "ko": "easy의 비교급은 easier이다.",
            "answers": [
              "easier"
            ],
            "explain": "「자음+y」로 끝나는 easy는 y를 i로 바꿔 easier가 됩니다."
          },
          {
            "q": "beautiful의 비교급을 쓰세요. (두 단어)",
            "ko": "beautiful의 비교급은 more beautiful이다.",
            "answers": [
              "more beautiful"
            ],
            "explain": "beautiful은 긴 단어이므로 more beautiful로 씁니다."
          },
          {
            "q": "bad의 비교급을 쓰세요. (한 단어)",
            "ko": "bad의 비교급은 worse이다.",
            "answers": [
              "worse"
            ],
            "explain": "bad는 불규칙 비교급으로 worse가 됩니다."
          },
          {
            "q": "My brother is ______ than me. (내 남동생은 나보다 키가 더 크다. tall을 알맞게 고쳐 쓰세요.)",
            "ko": "내 남동생은 나보다 키가 더 크다.",
            "answers": [
              "taller"
            ],
            "explain": "tall은 짧은 단어이므로 taller로 만듭니다."
          },
          {
            "q": "Spring is ______ than winter. (봄이 겨울보다 더 따뜻하다. warm을 알맞게 고쳐 쓰세요.)",
            "ko": "봄은 겨울보다 더 따뜻하다.",
            "answers": [
              "warmer"
            ],
            "explain": "warm은 짧은 단어이므로 warmer로 만듭니다."
          },
          {
            "q": "many의 비교급을 쓰세요. (한 단어)",
            "ko": "many의 비교급은 more이다.",
            "answers": [
              "more"
            ],
            "explain": "many의 비교급은 불규칙 형태인 more입니다."
          },
          {
            "q": "This box is 2kg, that box is 5kg. → That box is ______ than this box. (heavy를 알맞게 고쳐 쓰세요.)",
            "ko": "저 상자가 이 상자보다 더 무겁다.",
            "answers": [
              "heavier"
            ],
            "explain": "「자음+y」로 끝나는 heavy는 y를 i로 바꿔 heavier가 됩니다."
          },
          {
            "q": "This cake is 5,000 won, that cake is 7,000 won. → That cake is ______ ______ than this one. (expensive를 알맞게 고쳐 쓰세요. 두 단어)",
            "ko": "저 케이크가 이 케이크보다 더 비싸다.",
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
            "q": "빈칸에 알맞은 말을 고르세요.\nThe dog barks loudly ___ someone knocks on the front door.",
            "options": [
              "when",
              "who",
              "which",
              "what"
            ],
            "answer": 0,
            "explain": "'누군가 문을 두드릴 때'라는 시간의 뜻이므로 접속사 when이 알맞습니다. what/which/who는 의미가 맞지 않습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the alarm rings early in the morning, I ___ up and get ready for school.",
            "options": [
              "sit",
              "fall",
              "wake",
              "sleep"
            ],
            "answer": 2,
            "explain": "'알람이 울릴 때 잠에서 깬다'가 자연스러우므로 wake가 알맞습니다. wake up은 '일어나다'입니다."
          },
          {
            "q": "빈칸에 알맞은 동사 형태를 고르세요.\nWhen the baby ___ hungry, she starts to cry loudly.",
            "options": [
              "gets",
              "to get",
              "getting",
              "get"
            ],
            "answer": 0,
            "explain": "주어 the baby가 3인칭 단수이고 현재의 반복적인 일이므로 gets가 알맞습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nStudents should not use their phones ___ the exam.",
            "options": [
              "during",
              "when",
              "while",
              "because"
            ],
            "answer": 0,
            "explain": "뒤에 명사(the exam)가 오므로 전치사 during이 알맞습니다. when/while은 「주어+동사」의 절을 이끄는 접속사입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nEveryone stands up ___ the national anthem plays at the ceremony.",
            "options": [
              "when",
              "where",
              "during",
              "what"
            ],
            "answer": 0,
            "explain": "뒤에 「주어(the national anthem)+동사(plays)」가 오므로 접속사 when이 알맞습니다. during 뒤에는 명사만 옵니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the weather is very hot in summer, we ___ a lot of cold water.",
            "options": [
              "drink",
              "read",
              "wear",
              "wash"
            ],
            "answer": 0,
            "explain": "'더울 때 물을 많이 마신다'가 자연스러우므로 drink가 알맞습니다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n우리는 저녁을 먹은 후에 산책을 한다.\nWe take a walk ___ we eat dinner.",
            "options": [
              "while",
              "after",
              "before",
              "when"
            ],
            "answer": 1,
            "explain": "'~한 후에'라는 뜻이므로 after가 알맞습니다. when은 '~할 때', before는 '~하기 전에'입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen you cross the busy street, you must be very ___.",
            "options": [
              "careless",
              "careful",
              "carefully",
              "care"
            ],
            "answer": 1,
            "explain": "be동사 뒤에는 형용사가 오고 '조심하는'의 뜻이 필요하므로 careful이 알맞습니다. carefully는 부사, careless는 '부주의한'입니다."
          },
          {
            "q": "다음 문장에서 콤마(,)가 들어갈 위치로 알맞은 곳을 고르세요.\nWhen ⓐ the class ⓑ is over ⓒ the students ⓓ go home.",
            "options": [
              "ⓑ",
              "ⓓ",
              "ⓒ",
              "ⓐ"
            ],
            "answer": 2,
            "explain": "when절(When the class is over)이 끝나는 자리, 즉 over 다음(ⓒ 앞)에 콤마를 씁니다."
          },
          {
            "q": "빈칸에 알맞은 동사 형태를 고르세요.\nWhen he ___ a little child, he lived in a small village.",
            "options": [
              "are",
              "was",
              "were",
              "is"
            ],
            "answer": 1,
            "explain": "과거의 일이고 주어 he가 단수이므로 was가 알맞습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the students hear the good news, they become very ___.",
            "options": [
              "excited",
              "silent",
              "sleepy",
              "bored"
            ],
            "answer": 0,
            "explain": "'좋은 소식을 들을 때'는 신이 나므로 excited가 알맞습니다."
          },
          {
            "q": "밑줄 친 when의 쓰임이 나머지와 다른 것을 고르세요.",
            "options": [
              "I stay inside when it is too hot.",
              "We clap when the show ends.",
              "When does the next train leave?",
              "She hums a song when she cooks."
            ],
            "answer": 2,
            "explain": "③은 '언제'라고 묻는 의문사 when이고, 나머지는 '~할 때'라는 접속사입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen you feel very sick, you should ___ a doctor right away.",
            "options": [
              "watch",
              "look",
              "read",
              "see"
            ],
            "answer": 3,
            "explain": "'의사에게 진찰받다'는 see a doctor로 표현하므로 see가 알맞습니다. watch/look은 의미가 맞지 않습니다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n만약 내일 비가 오면, 우리는 소풍을 취소할 것이다.\n___ it rains tomorrow, we will cancel the picnic.",
            "options": [
              "That",
              "If",
              "When",
              "What"
            ],
            "answer": 1,
            "explain": "'만약 ~라면'이라는 조건의 뜻이므로 If가 알맞습니다. When은 '~할 때'라는 뜻입니다."
          },
          {
            "q": "빈칸에 알맞은 동사 형태를 고르세요.\nWhen we ___ young, we played outside every single day.",
            "options": [
              "are",
              "were",
              "is",
              "was"
            ],
            "answer": 1,
            "explain": "과거의 일이고 주어 we가 복수이므로 were가 알맞습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen it gets dark in the evening, we ___ on the lights in the house.",
            "options": [
              "take",
              "make",
              "open",
              "turn"
            ],
            "answer": 3,
            "explain": "'불을 켜다'는 turn on the lights이므로 turn이 알맞습니다."
          },
          {
            "q": "다음 두 문장을 when으로 바르게 연결한 것을 고르세요.\nThe rain stops. + The children run outside.",
            "options": [
              "The children run outside when the rain stop.",
              "When the rain stops the children run outside.",
              "The children run outside what the rain stops.",
              "The children run outside when the rain stops."
            ],
            "answer": 3,
            "explain": "the rain은 3인칭 단수이므로 stops가 되고, when절을 뒤에 두면 콤마가 필요 없습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the concert finishes, all the people ___ their hands loudly.",
            "options": [
              "carry",
              "close",
              "clap",
              "clean"
            ],
            "answer": 2,
            "explain": "'박수를 치다'는 clap one's hands이므로 clap이 알맞습니다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "When the sun rises the birds sing.",
              "When, the sun rises the birds sing.",
              "When the sun rises, the birds sing.",
              "The birds sing when, the sun rises."
            ],
            "answer": 2,
            "explain": "when절이 앞에 오면 그 절이 끝난 뒤(rises 다음)에 콤마를 한 번 씁니다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "I feel happy, when I see my friends.",
              "I feel happy when I see my friends.",
              "I feel happy when, I see my friends.",
              "When I see my friends I feel happy."
            ],
            "answer": 1,
            "explain": "when절이 뒤에 올 때는 앞에 콤마를 쓰지 않습니다. ④는 when절이 앞에 왔는데 콤마가 빠져 틀립니다."
          },
          {
            "q": "단어를 바르게 배열한 문장을 고르세요.\n( when / arrives / the teacher / stand up / we )",
            "options": [
              "We when the teacher arrives stand up.",
              "We stand up when the teacher arrives.",
              "We stand up when arrives the teacher.",
              "When the teacher arrives we stand up."
            ],
            "answer": 1,
            "explain": "「주어(we)+동사(stand up)+when+주어(the teacher)+동사(arrives)」 순서가 자연스럽습니다. when절을 뒤에 두면 콤마가 필요 없습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen winter comes, the weather becomes very ___ and it often snows.",
            "options": [
              "kind",
              "tall",
              "cold",
              "warm"
            ],
            "answer": 2,
            "explain": "'겨울이 올 때'는 날씨가 추워지므로 cold가 알맞습니다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: ___ do you usually study English?\nB: I usually study English when I get home from school.",
            "options": [
              "What",
              "Where",
              "Which",
              "When"
            ],
            "answer": 3,
            "explain": "'언제 영어를 공부하니?'라고 묻는 의문사 When이 알맞습니다. B의 when은 '~할 때'의 접속사입니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the phone rings during dinner, my mom ___ it politely.",
            "options": [
              "talks",
              "answers",
              "asks",
              "speaks"
            ],
            "answer": 1,
            "explain": "'전화를 받다'는 answer the phone이므로 answers가 알맞습니다."
          },
          {
            "q": "빈칸에 알맞은 동사 형태를 고르세요.\nWhen the movie ___, we will take the bus home together.",
            "options": [
              "ended",
              "end",
              "ends",
              "ending"
            ],
            "answer": 2,
            "explain": "when이 이끄는 시간의 부사절에서는 미래의 일도 현재시제로 쓰므로 ends가 알맞습니다. 주어(the movie)가 단수인 점도 맞습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen the weather is warm and sunny, our family goes on a ___ in the park.",
            "options": [
              "kitchen",
              "pencil",
              "ticket",
              "picnic"
            ],
            "answer": 3,
            "explain": "'날씨가 좋을 때 공원으로 소풍을 간다'가 자연스러우므로 picnic이 알맞습니다."
          },
          {
            "q": "빈칸에 공통으로 알맞은 말을 고르세요.\n· The baby laughs ___ her father sings.\n· ___ the light turns green, we can cross.",
            "options": [
              "what / What",
              "who / Who",
              "when / When",
              "where / Where"
            ],
            "answer": 2,
            "explain": "두 문장 모두 '~할 때'라는 뜻의 접속사 when이 필요합니다. 문장 맨 앞에서는 대문자로 씁니다."
          },
          {
            "q": "밑줄 친 when이 '언제'라는 뜻의 의문사로 쓰인 것을 고르세요.",
            "options": [
              "I get nervous when I speak in front of people.",
              "When will the summer vacation begin?",
              "We go camping when the weather is nice.",
              "He always smiles when he meets his friends."
            ],
            "answer": 1,
            "explain": "②는 '언제 방학이 시작되나요?'라고 묻는 의문사 when입니다. 나머지는 '~할 때'라는 접속사입니다."
          },
          {
            "q": "우리말을 영어로 바르게 옮긴 것을 고르세요.\n비가 올 때, 나는 우산을 가져간다.",
            "options": [
              "When it rain, I take an umbrella.",
              "I take an umbrella when, it rains.",
              "When it rains I take an umbrella.",
              "When it rains, I take an umbrella."
            ],
            "answer": 3,
            "explain": "it은 3인칭 단수이므로 rains, when절이 앞에 오므로 뒤에 콤마가 필요합니다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhen we water the plants every day, they ___ well and become strong.",
            "options": [
              "fall",
              "stop",
              "break",
              "grow"
            ],
            "answer": 3,
            "explain": "'물을 줄 때 식물이 잘 자란다'가 자연스러우므로 grow가 알맞습니다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 접속사를 쓰세요. (한 단어)\nI wear a coat ___ it is cold. (추울 때)",
            "ko": "나는 추울 때 코트를 입는다.",
            "answers": [
              "when",
              "When"
            ],
            "explain": "'~할 때'라는 뜻의 접속사 when이 알맞습니다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. 문장 맨 앞이므로 대문자로 시작하세요. (한 단어)\n___ it rains, I stay home. (비가 올 때)",
            "ko": "비가 올 때 나는 집에 있는다.",
            "answers": [
              "When",
              "when"
            ],
            "explain": "문장 맨 앞에 오는 접속사이므로 첫 글자를 대문자로 써서 When이 됩니다."
          },
          {
            "q": "빈칸에 알맞은 문장 부호를 쓰세요.\nWhen the bell rings___ children laugh.",
            "ko": "종이 울리면 아이들이 웃는다.",
            "answers": [
              ","
            ],
            "explain": "when절이 문장 앞에 왔으므로 그 뒤에 콤마(,)를 씁니다."
          },
          {
            "q": "빈칸에 알맞은 동사를 보기에서 골라 알맞은 형태로 쓰세요. [ arrive ] (한 단어)\nWhen she ___ home, her dog barks.",
            "ko": "그녀가 집에 도착하면 그녀의 개가 짖는다.",
            "answers": [
              "arrives"
            ],
            "explain": "주어 she가 3인칭 단수이고 현재이므로 arrives가 됩니다."
          },
          {
            "q": "밑줄 친 when이 '접속사'이면 C, '의문사'이면 Q를 쓰세요.\nWhen do you feel sleepy?",
            "ko": "너는 언제 졸리니?",
            "answers": [
              "Q",
              "q"
            ],
            "explain": "'언제 졸리니?'라고 묻는 의문사 when이므로 Q입니다."
          },
          {
            "q": "괄호 안의 동사를 알맞은 형태로 쓰세요. (한 단어)\nWhen I ___ young, I liked candy. (be)",
            "ko": "나는 어렸을 때 사탕을 좋아했다.",
            "answers": [
              "was"
            ],
            "explain": "과거의 일이고 주어가 I이므로 be동사의 과거형 was를 씁니다."
          },
          {
            "q": "빈칸에 알맞은 접속사를 쓰세요. (한 단어)\nEveryone becomes quiet ___ she sings.",
            "ko": "그녀가 노래할 때 모두가 조용해진다.",
            "answers": [
              "when",
              "When"
            ],
            "explain": "'그녀가 노래할 때'라는 뜻이므로 접속사 when이 알맞습니다."
          },
          {
            "q": "괄호 안의 동사를 알맞은 형태로 쓰세요. (한 단어)\nWhen it ___, we play inside. (rain)",
            "ko": "비가 올 때 우리는 실내에서 논다.",
            "answers": [
              "rains"
            ],
            "explain": "it은 3인칭 단수이므로 rains가 됩니다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요. 문장 맨 앞이므로 대문자로 시작하세요. (한 단어)\n___ vacation starts, we go on a trip. (방학이 시작될 때)",
            "ko": "방학이 시작될 때 우리는 여행을 간다.",
            "answers": [
              "When",
              "when"
            ],
            "explain": "문장 맨 앞에 오는 접속사이므로 대문자 When으로 씁니다."
          },
          {
            "q": "밑줄 친 when이 '접속사'이면 C, '의문사'이면 Q를 쓰세요.\nI went to Jeju when I was ten.",
            "ko": "나는 열 살 때 제주에 갔다.",
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
            "q": "Because it was raining hard, my teacher kindly gave her umbrella ______ me after class.",
            "options": [
              "for",
              "at",
              "to",
              "of"
            ],
            "answer": 2,
            "explain": "give는 3형식에서 간접목적어 앞에 to를 써요. gave her umbrella to me. for/of/at은 give와 어울리지 않아요."
          },
          {
            "q": "For my birthday party next week, my father is going to bake a huge chocolate cake ______ all my friends.",
            "options": [
              "on",
              "for",
              "to",
              "with"
            ],
            "answer": 1,
            "explain": "bake(make류)는 3형식에서 for를 써요. bake a cake for my friends. to/with/on은 의미와 어법상 맞지 않아요."
          },
          {
            "q": "The tour guide was very helpful and showed ______ during our trip to the old palace.",
            "options": [
              "the way us",
              "the way to us to",
              "us the way",
              "to us the way"
            ],
            "answer": 2,
            "explain": "4형식은 '동사 + 사람 + 사물' 순서예요. showed us the way. 나머지는 어순이 틀렸거나 to가 중복돼요."
          },
          {
            "q": "After the long meeting, our manager sent an important email ______ every member of the team.",
            "options": [
              "about",
              "of",
              "for",
              "to"
            ],
            "answer": 3,
            "explain": "send는 3형식에서 to를 써요. sent an email to every member. for/about/of는 어법상 맞지 않아요."
          },
          {
            "q": "My grandmother is a wonderful cook, and every weekend she makes delicious soup ______ the whole family.",
            "options": [
              "to",
              "for",
              "in",
              "at"
            ],
            "answer": 1,
            "explain": "make는 3형식에서 for를 써요. makes soup for the whole family. to/at/in은 어울리지 않아요."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n지훈이는 반 친구들에게 자신의 여행 사진을 보여주었다.\nJihun showed ______ during the break.",
            "options": [
              "to the class his travel photos",
              "the class his travel photos",
              "the class to his travel photos",
              "his travel photos the class"
            ],
            "answer": 1,
            "explain": "'~에게 ~을 보여주다'는 show + 사람 + 사물. showed the class his travel photos. 나머지는 어순이 틀렸어요."
          },
          {
            "q": "I forgot my textbook at home, so my kind classmate ______ me her book during the lesson.",
            "options": [
              "received",
              "borrowed",
              "took",
              "lent"
            ],
            "answer": 3,
            "explain": "'빌려주다'는 lend예요. lent me her book. borrow(빌리다)/receive(받다)/take(가져가다)는 의미가 반대이거나 맞지 않아요."
          },
          {
            "q": "The store was closing, but the friendly clerk still ______ us a warm cup of tea while we waited.",
            "options": [
              "asked",
              "listened",
              "offered",
              "borrowed"
            ],
            "answer": 2,
            "explain": "'제공하다, 권하다'는 offer. offered us a cup of tea. ask는 뒤 의미가 다르고, borrow/listen은 수여동사 문맥에 맞지 않아요."
          },
          {
            "q": "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 것을 고르세요.\nMom cooked us a special dinner. = Mom cooked a special dinner ______ us.",
            "options": [
              "for",
              "by",
              "to",
              "with"
            ],
            "answer": 0,
            "explain": "cook은 3형식에서 for를 써요. cooked a special dinner for us. to/with/by는 맞지 않아요."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 문장을 고르세요.",
            "options": [
              "She taught us French for two years.",
              "The waiter brought us some cold water.",
              "They sent us a postcard from Paris.",
              "My uncle bought a new bike to me."
            ],
            "answer": 3,
            "explain": "buy는 3형식에서 for를 써야 해요. bought a new bike to me → bought a new bike for me."
          },
          {
            "q": "Since I did not understand the math problem, Mr. Han patiently ______ it to me one more time.",
            "options": [
              "answered",
              "spoke",
              "explained",
              "told"
            ],
            "answer": 2,
            "explain": "'설명하다'는 explain. explained it to me. answer/speak는 이 구조에 맞지 않고, tell은 뒤에 사람이 바로 와야 자연스러워요."
          },
          {
            "q": "빈칸에 알맞은 전치사끼리 바르게 짝지은 것을 고르세요.\nI sent a card ______ Grandpa and made a gift ______ him.",
            "options": [
              "to / to",
              "for / to",
              "for / for",
              "to / for"
            ],
            "answer": 3,
            "explain": "send는 to, make는 for를 써요. 따라서 to / for가 정답이에요."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n선생님은 우리에게 재미있는 옛날이야기를 들려주셨다.\nThe teacher told ______ during the class.",
            "options": [
              "to us an old story",
              "an old story us",
              "us an old story",
              "us to an old story"
            ],
            "answer": 2,
            "explain": "tell + 사람 + 사물 순서. told us an old story. 사람 앞에는 전치사를 쓰지 않아요."
          },
          {
            "q": "When the singer finished the concert, the excited fans ______ her a big bunch of flowers on the stage.",
            "options": [
              "watched",
              "wanted",
              "gave",
              "took"
            ],
            "answer": 2,
            "explain": "'주다'는 give. gave her flowers. take는 '가져가다'로 반대 의미이고, want/watch는 수여동사 문맥에 맞지 않아요."
          },
          {
            "q": "다음 문장을 3형식으로 바르게 바꾼 것을 고르세요.\nThe coach threw me the ball quickly.",
            "options": [
              "The coach threw the ball me quickly.",
              "The coach threw the ball for me quickly.",
              "The coach threw to me the ball quickly.",
              "The coach threw the ball to me quickly."
            ],
            "answer": 3,
            "explain": "throw는 3형식에서 to를 써요. threw me the ball = threw the ball to me. for나 어순 오류는 틀려요."
          },
          {
            "q": "My best friend moved to another city, so I write a long letter ______ her every month.",
            "options": [
              "to",
              "at",
              "for",
              "of"
            ],
            "answer": 0,
            "explain": "write는 3형식에서 to를 써요. write a letter to her. for/at/of는 맞지 않아요."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "Please pass to me the salt.",
              "Please pass the salt me to.",
              "Please pass the salt me.",
              "Please pass me the salt."
            ],
            "answer": 3,
            "explain": "4형식 '동사 + 사람 + 사물' 순서. pass me the salt가 올바른 어순이에요."
          },
          {
            "q": "The library will not let students take the rare books home, but it ______ them a quiet room to read in.",
            "options": [
              "offers",
              "asks",
              "buys",
              "borrows"
            ],
            "answer": 0,
            "explain": "'제공하다'는 offer. offers them a quiet room. borrow(빌리다)/ask/buy는 문맥상 의미가 맞지 않아요."
          },
          {
            "q": "다음 문장을 4형식으로 바르게 바꾼 것을 고르세요.\nMy aunt bought a warm scarf for me last winter.",
            "options": [
              "My aunt bought me a warm scarf last winter.",
              "My aunt bought a warm scarf me last winter.",
              "My aunt bought me for a warm scarf last winter.",
              "My aunt bought for me a warm scarf last winter."
            ],
            "answer": 0,
            "explain": "3형식 'buy 사물 for 사람'을 4형식으로 바꾸면 'buy 사람 사물'. bought me a warm scarf."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n삼촌이 나에게 새 자전거를 사 주셨다.\nMy uncle ______ me a new bike.",
            "options": [
              "sent",
              "showed",
              "bought",
              "told"
            ],
            "answer": 2,
            "explain": "'사 주다'는 buy의 과거형 bought. bought me a new bike. send/show/tell은 뜻이 달라요."
          },
          {
            "q": "The airline promised to deliver our lost suitcase ______ the hotel by tomorrow morning.",
            "options": [
              "for",
              "to",
              "of",
              "with"
            ],
            "answer": 1,
            "explain": "deliver는 3형식에서 to를 써요. deliver the suitcase to the hotel. for/with/of는 맞지 않아요."
          },
          {
            "q": "다음 중 빈칸에 for가 들어갈 수 없는 문장을 고르세요.",
            "options": [
              "The chef cooked a meal ______ us.",
              "My mother knitted a sweater ______ me.",
              "The teacher sent a message ______ us.",
              "My dad bought a phone ______ me."
            ],
            "answer": 2,
            "explain": "send는 to를 써요. 나머지 knit/cook/buy는 모두 for를 쓰므로, send가 for가 들어갈 수 없는 문장이에요."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: What did your homeroom teacher give you today?\nB: She gave ______ before the exam.",
            "options": [
              "us some useful advice",
              "to us some useful advice",
              "us to some useful advice",
              "some useful advice us"
            ],
            "answer": 0,
            "explain": "4형식 '동사 + 사람 + 사물'. gave us some useful advice. 사람(us)이 사물보다 먼저 와요."
          },
          {
            "q": "My little brother could not reach the shelf, so I ______ him the book he wanted.",
            "options": [
              "received",
              "handed",
              "listened",
              "borrowed"
            ],
            "answer": 1,
            "explain": "'건네주다'는 hand. handed him the book. receive(받다)/borrow(빌리다)/listen은 문맥상 맞지 않아요."
          },
          {
            "q": "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 것을 고르세요.\nThe guide gave the tourists a map. = The guide gave a map ______ the tourists.",
            "options": [
              "with",
              "at",
              "for",
              "to"
            ],
            "answer": 3,
            "explain": "give는 3형식에서 to를 써요. gave a map to the tourists."
          },
          {
            "q": "밑줄 친 부분이 어법상 옳은 문장을 고르세요.",
            "options": [
              "She teaches science to us.",
              "I sent a gift for my friend.",
              "They bought a toy to the baby.",
              "He made a sandwich to me."
            ],
            "answer": 0,
            "explain": "teach는 3형식에서 to를 써요. teaches science to us. make/buy는 for를, send는 to를 써야 하므로 나머지는 틀려요."
          },
          {
            "q": "Because our classroom was too hot, the principal ______ us a new electric fan.",
            "options": [
              "took",
              "wanted",
              "bought",
              "borrowed"
            ],
            "answer": 2,
            "explain": "'사 주다'는 buy. bought us a new fan. take(가져가다)/want/borrow(빌리다)는 문맥에 맞지 않아요."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n엄마는 매일 아침 나에게 아침을 만들어 주신다.\nMy mom ______ me breakfast every morning.",
            "options": [
              "makes",
              "tells",
              "gives",
              "sends"
            ],
            "answer": 0,
            "explain": "'만들어 주다'는 make. makes me breakfast. give/send/tell은 뜻이 달라요."
          },
          {
            "q": "다음 중 어순이 틀린 문장을 고르세요.",
            "options": [
              "The nurse gave the patient some medicine.",
              "He showed the police his ID card.",
              "I sent my grandmother it.",
              "She teaches the children English."
            ],
            "answer": 2,
            "explain": "대명사 it이 직접목적어일 때는 4형식이 어색해서 sent it to my grandmother로 써야 해요. 나머지는 모두 올바른 어순이에요."
          },
          {
            "q": "The bakery near my house ______ free bread to poor children every Friday afternoon.",
            "options": [
              "gives",
              "takes",
              "asks",
              "buys"
            ],
            "answer": 0,
            "explain": "'주다'는 give. gives free bread to children. ask/take/buy는 문맥상 의미가 맞지 않아요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nShe gave a present ______ me.",
            "ko": "그녀는 나에게 선물을 주었다.",
            "answers": [
              "to"
            ],
            "explain": "give는 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nDad bought a laptop ______ me.",
            "ko": "아빠는 나에게 노트북을 사 주셨다.",
            "answers": [
              "for"
            ],
            "explain": "buy는 3형식에서 for를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nHe sent a package ______ us.",
            "ko": "그는 우리에게 소포를 보냈다.",
            "answers": [
              "to"
            ],
            "explain": "send는 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nGrandma made rice cakes ______ us.",
            "ko": "할머니는 우리에게 떡을 만들어 주셨다.",
            "answers": [
              "for"
            ],
            "explain": "make는 3형식에서 for를 써요."
          },
          {
            "q": "다음 3형식 문장을 4형식으로 바꿀 때 밑줄에 알맞은 한 단어를 쓰세요.\nHe gave a book to me. → He gave ______ a book.",
            "ko": "그는 나에게 책을 주었다.",
            "answers": [
              "me"
            ],
            "explain": "give 사물 to 사람 → give 사람 사물. to me가 me로 바뀌어 gave me a book이 돼요."
          },
          {
            "q": "우리말에 맞게 빈칸을 채우세요. (사람 + 사물)\n그는 나에게 그의 전화번호를 주었다.\nHe gave ______ his phone number.",
            "ko": "그는 나에게 그의 전화번호를 주었다.",
            "answers": [
              "me"
            ],
            "explain": "give + 사람(me) + 사물. 사람 앞에는 전치사를 쓰지 않아요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nMs. Park teaches music ______ us.",
            "ko": "Park 선생님은 우리에게 음악을 가르치신다.",
            "answers": [
              "to"
            ],
            "explain": "teach는 3형식에서 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 전치사를 쓰세요.\nI got a ticket ______ her.",
            "ko": "나는 그녀에게 표를 구해 주었다.",
            "answers": [
              "for"
            ],
            "explain": "get은 3형식에서 for를 써요."
          },
          {
            "q": "다음 4형식 문장을 3형식으로 바꿀 때 밑줄에 들어갈 두 단어를 순서대로 쓰세요.\nShe showed me her drawing. → She showed her drawing ______ ______.",
            "ko": "그녀는 나에게 그녀의 그림을 보여 주었다.",
            "answers": [
              "to me",
              "to me."
            ],
            "explain": "show 사람 사물 → show 사물 to 사람. me 앞에 to를 붙여 to me가 돼요."
          },
          {
            "q": "우리말에 맞게 밑줄에 알맞은 말을 쓰세요. (사람 + 사물, 두 단어)\n그녀는 나에게 이메일을 보냈다.\nShe sent ______ ______.",
            "ko": "그녀는 나에게 이메일을 보냈다.",
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
            "q": "Our science teacher explained ___ the moon has a strong effect on the ocean tides, and we wrote it down in our notebooks.",
            "options": [
              "that",
              "whose",
              "what",
              "which"
            ],
            "answer": 0,
            "explain": "빈칸 뒤에 완전한 절(the moon has ...)이 오므로 명사절을 이끄는 접속사 that이 알맞다. what/which/whose는 뒤 절에 빠진 성분이 있어야 한다."
          },
          {
            "q": "Halfway through the trip, I suddenly realized ___ I had left my phone at the hotel, so I ran back to get it.",
            "options": [
              "where",
              "what",
              "that",
              "whom"
            ],
            "answer": 2,
            "explain": "뒤에 완전한 절이 이어지므로 realize의 목적어절을 이끄는 접속사 that이 알맞다. what/whom/where는 절에 빠진 성분이 있을 때 쓴다."
          },
          {
            "q": "I read the message twice, but I still don't understand ___ my friend wants me to do this weekend.",
            "options": [
              "whether",
              "that",
              "because",
              "what"
            ],
            "answer": 3,
            "explain": "do의 목적어가 비어 있으므로 선행사를 포함한 관계대명사 what이 알맞다. that은 뒤에 완전한 절이 와야 한다."
          },
          {
            "q": "My parents haven't decided ___ we will go to the beach or the mountains for our summer holiday.",
            "options": [
              "that",
              "whether",
              "which",
              "what"
            ],
            "answer": 1,
            "explain": "'~인지 (아니면 ~인지)'처럼 선택을 나타내는 명사절은 whether가 이끈다. that은 확정된 사실을 나타낼 때 쓴다."
          },
          {
            "q": "The new student asked me ___ the school library was open on Saturdays or not.",
            "options": [
              "who",
              "what",
              "that",
              "if"
            ],
            "answer": 3,
            "explain": "'~인지 아닌지'를 묻는 명사절은 if(=whether)가 이끈다. that은 사실을 전달할 때 쓴다."
          },
          {
            "q": "다음 중 밑줄 친 that의 쓰임이 나머지 셋과 다른 것은?",
            "options": [
              "We noticed that the door was open.",
              "She promised that she would call me.",
              "I heard that the concert was canceled.",
              "That backpack on the chair is mine."
            ],
            "answer": 3,
            "explain": "'That backpack'의 that은 명사를 꾸미는 지시형용사이고, 나머지는 동사 뒤에서 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "어법상 옳은 문장은?",
            "options": [
              "Everyone believes that she are a great singer.",
              "Everyone believes that she being a great singer.",
              "Everyone believes that she is a great singer.",
              "Everyone believes that she be a great singer."
            ],
            "answer": 2,
            "explain": "that절 안의 주어 she에 맞는 동사는 is이다. are/be/being은 어법상 틀리다."
          },
          {
            "q": "다음 중 밑줄 친 that을 생략할 수 있는 문장은?",
            "options": [
              "I bought that red umbrella.",
              "That is the best answer.",
              "Look at that carefully.",
              "I believe that we will succeed."
            ],
            "answer": 3,
            "explain": "목적어절을 이끄는 명사절 접속사 that만 생략할 수 있다. 나머지 that은 지시대명사/지시형용사라 생략할 수 없다."
          },
          {
            "q": "우리말과 같도록 바르게 쓴 것은? '나는 그 영화가 지루하다고 생각했다.'",
            "options": [
              "I thought the movie that was boring.",
              "That I thought the movie was boring.",
              "I thought that the movie was boring.",
              "I thought was boring that the movie."
            ],
            "answer": 2,
            "explain": "think + that + 주어(the movie) + 동사(was) 순서가 옳다."
          },
          {
            "q": "두 문장을 that으로 이을 때 알맞은 것은? I heard it. + The new library will open next month.",
            "options": [
              "I heard that the new library will open next month.",
              "I heard the new library that will open next month.",
              "I heard it that the new library will open next month.",
              "That I heard the new library will open next month."
            ],
            "answer": 0,
            "explain": "'I heard it'의 it을 that절로 바꿔 heard의 목적어 자리에 넣는다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 말은? The doctor said ___ I should rest. / I feel ___ my cold is getting better.",
            "options": [
              "if",
              "which",
              "that",
              "what"
            ],
            "answer": 2,
            "explain": "두 문장 모두 동사 뒤에서 완전한 절을 이끄는 명사절 접속사 that이 들어간다."
          },
          {
            "q": "In the sentence 'My sister hopes that she will become a doctor,' what is the role of the 'that' clause?",
            "options": [
              "hope의 목적어",
              "시간을 나타내는 부사",
              "hope의 주어",
              "sister를 꾸미는 형용사"
            ],
            "answer": 0,
            "explain": "동사 hope 뒤의 that절은 '무엇을 바라는지'를 나타내는 목적어이다."
          },
          {
            "q": "빈칸에 들어갈 수 없는 동사는? Everyone ___ that the festival was a big success.",
            "options": [
              "enjoyed",
              "felt",
              "knew",
              "agreed"
            ],
            "answer": 0,
            "explain": "agree/know/feel은 that 명사절을 목적어로 취하지만, enjoy는 that절을 목적어로 쓰지 않는다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "We think that the plan very good.",
              "I know that the store closes at nine.",
              "She hopes that everything goes well.",
              "He said that he was tired."
            ],
            "answer": 0,
            "explain": "that절 안에도 '주어+동사'가 있어야 하므로 'the plan very good'은 동사가 없어 어색하다. 'the plan is very good'이 되어야 한다."
          },
          {
            "q": "A: Why are you so happy today? B: I just heard ___ our team won the soccer match!",
            "options": [
              "than",
              "whose",
              "what",
              "that"
            ],
            "answer": 3,
            "explain": "heard 뒤에서 완전한 절을 이끄는 명사절 접속사 that이 알맞다."
          },
          {
            "q": "다음 중 밑줄 친 that이 '저것'을 뜻하는 지시대명사인 것은?",
            "options": [
              "I think that the answer is correct.",
              "That is the tallest building in our city.",
              "She knows that I am telling the truth.",
              "We hope that you can join us."
            ],
            "answer": 1,
            "explain": "②의 That은 '저것'을 뜻하는 지시대명사로 문장의 주어이다. 나머지는 명사절 접속사 that이다."
          },
          {
            "q": "다음 중 밑줄 친 that의 쓰임이 나머지와 다른 것은?",
            "options": [
              "I know that you are honest.",
              "She believes that we can win.",
              "The book that I read last night was fun.",
              "He said that it was already late."
            ],
            "answer": 2,
            "explain": "'The book that I read'의 that은 명사 book을 꾸미는 관계대명사이고, 나머지는 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "단어를 바르게 배열할 때 세 번째로 오는 단어는? ( that / believe / I / honest / is / he ) → '나는 그가 정직하다고 믿는다.'",
            "options": [
              "believe",
              "that",
              "he",
              "honest"
            ],
            "answer": 1,
            "explain": "I / believe / that / he / is / honest 순서이므로 세 번째 단어는 that이다."
          },
          {
            "q": "빈칸에 들어갈 말이 나머지 셋과 다른 것은?",
            "options": [
              "Please pass me ___ plate on the table.",
              "I think ___ the food is delicious.",
              "She knows ___ we are very hungry.",
              "He said ___ dinner is ready."
            ],
            "answer": 0,
            "explain": "①은 명사 plate를 꾸미는 지시형용사 '저 ~', 나머지는 명사절 접속사 that이다."
          },
          {
            "q": "다음 문장에서 that을 생략한 형태로 바른 것은? She said that the test would be easy.",
            "options": [
              "She the test said would be easy.",
              "She said would be easy the test.",
              "Said she the test would be easy.",
              "She said the test would be easy."
            ],
            "answer": 3,
            "explain": "명사절 접속사 that만 빼고 나머지 어순은 그대로 둔다."
          },
          {
            "q": "어법상 옳은 문장은?",
            "options": [
              "The report shows that more people recycling now.",
              "That the report shows more people are recycling now.",
              "The report shows that more people are recycling now.",
              "The report shows more people that are recycling now."
            ],
            "answer": 2,
            "explain": "show + that + 주어(more people) + 동사(are recycling) 순서가 옳다."
          },
          {
            "q": "다음 중 빈칸에 들어갈 that이 명사절 접속사가 아닌 것은?",
            "options": [
              "We agreed ___ the idea was great.",
              "Do you see ___ tall tower over there?",
              "I noticed ___ the light was still on.",
              "She feels ___ something is wrong."
            ],
            "answer": 1,
            "explain": "'저 ~'의 뜻으로 명사(tower)를 꾸미는 지시형용사이고, 나머지는 동사 뒤에서 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "빈칸에 알맞은 것은? Yesterday, my friend told me that she ___ her homework already.",
            "options": [
              "finishes",
              "finishing",
              "to finish",
              "finished"
            ],
            "answer": 3,
            "explain": "that절 안에는 '주어(she)+동사'가 필요하고, 어제 전한 내용이므로 과거형 finished가 알맞다. finishing/to finish는 본동사가 될 수 없고 finishes는 시제가 맞지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것은? I'm really glad ___ you passed the difficult exam.",
            "options": [
              "that",
              "what",
              "who",
              "which"
            ],
            "answer": 0,
            "explain": "감정을 나타내는 형용사(glad) 뒤에서 그 이유가 되는 절을 이끄는 접속사 that이 알맞다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것은? '선생님은 우리가 조용히 해야 한다고 말씀하셨다.' → The teacher said ___ we had to be quiet.",
            "options": [
              "how",
              "that",
              "what",
              "why"
            ],
            "answer": 1,
            "explain": "say 뒤에서 '~라고'의 뜻으로 완전한 절을 이끄는 명사절 접속사 that이 알맞다."
          },
          {
            "q": "다음 문장에 대한 설명으로 옳은 것은? I believe he will keep his promise.",
            "options": [
              "he는 believe의 주어이다.",
              "will은 이 문장 전체의 본동사이다.",
              "이 문장은 어법상 틀렸다.",
              "believe 뒤에 접속사 that이 생략되어 있다."
            ],
            "answer": 3,
            "explain": "'I believe (that) he will keep his promise'에서 목적어절을 이끄는 접속사 that이 생략된 올바른 문장이다."
          },
          {
            "q": "At the meeting, our club president ___ that we should hold the event outdoors, and most members liked the idea.",
            "options": [
              "doubted",
              "denied",
              "feared",
              "suggested"
            ],
            "answer": 3,
            "explain": "'제안했다'는 문맥에 맞는 동사는 suggested이다. doubt(의심하다)/deny(부인하다)/fear(두려워하다)는 의미가 맞지 않는다."
          },
          {
            "q": "Halfway through the exam, Mina ___ that she had answered question 5 incorrectly.",
            "options": [
              "promised",
              "wished",
              "hoped",
              "realized"
            ],
            "answer": 3,
            "explain": "시험 도중 자신의 실수를 '깨달았다'는 뜻이므로 realized가 알맞다. promise/hope/wish는 문맥에 맞지 않는다."
          },
          {
            "q": "After a long discussion, everyone finally ___ that the school festival should be held in May.",
            "options": [
              "agreed",
              "forgot",
              "refused",
              "doubted"
            ],
            "answer": 0,
            "explain": "오랜 논의 끝에 '동의했다'는 뜻이므로 agreed가 알맞다. 나머지는 문맥상 어울리지 않는다."
          },
          {
            "q": "When I entered the classroom this morning, I ___ that the windows had been left open all night.",
            "options": [
              "promised",
              "decided",
              "imagined",
              "noticed"
            ],
            "answer": 3,
            "explain": "창문이 열려 있는 것을 '알아차렸다'는 뜻이므로 noticed가 알맞다. 나머지는 의미가 어울리지 않는다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. I think ___ she is kind.",
            "ko": "나는 그녀가 친절하다고 생각한다.",
            "answers": [
              "that"
            ],
            "explain": "동사 think 뒤에서 명사절을 이끄는 접속사는 that이다."
          },
          {
            "q": "두 문장을 한 문장으로 만들 때 빈칸에 들어갈 두 단어를 쓰시오. I know it. + You like music. → I ___ ___ you like music.",
            "ko": "나는 네가 음악을 좋아한다는 것을 안다.",
            "answers": [
              "know that"
            ],
            "explain": "'I know it'의 it을 that절로 바꿔 'I know that you like music'이 된다."
          },
          {
            "q": "우리말에 맞게 빈칸에 알맞은 접속사를 쓰시오. '우리는 그가 정직하다고 믿는다.' → We believe ___ he is honest.",
            "ko": "우리는 그가 정직하다고 믿는다.",
            "answers": [
              "that"
            ],
            "explain": "believe 뒤에 명사절 접속사 that이 온다."
          },
          {
            "q": "다음 문장에서 생략할 수 있는 한 단어를 쓰시오. She hopes that you feel better.",
            "ko": "그녀는 네가 나아지기를 바란다.",
            "answers": [
              "that"
            ],
            "explain": "목적어절을 이끄는 명사절 접속사 that은 생략할 수 있다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. My mom knows ___ I am tired.",
            "ko": "우리 엄마는 내가 피곤하다는 것을 아신다.",
            "answers": [
              "that"
            ],
            "explain": "know 뒤에서 '~라는 것을'의 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "우리말에 맞게 빈칸에 들어갈 두 단어를 쓰시오. '그는 자신이 바쁘다고 말한다.' → He ___ ___ he is busy.",
            "ko": "그는 자신이 바쁘다고 말한다.",
            "answers": [
              "says that",
              "said that"
            ],
            "explain": "say that ~ 형태로 '~라고 말한다'를 나타낸다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. They think ___ the plan is good.",
            "ko": "그들은 그 계획이 좋다고 생각한다.",
            "answers": [
              "that"
            ],
            "explain": "think 뒤에 명사절 접속사 that이 온다."
          },
          {
            "q": "다음 밑줄 친 that의 종류를 쓰시오. (지시대명사 / 접속사 중 하나) → I feel that something is wrong.",
            "ko": "나는 무언가 잘못되었다고 느낀다.",
            "answers": [
              "접속사",
              "명사절 접속사",
              "접속사 that"
            ],
            "explain": "feel 뒤에서 명사절을 이끄는 접속사 that이다."
          },
          {
            "q": "우리말에 맞게 빈칸에 들어갈 두 단어를 쓰시오. '나는 네가 최선을 다했다는 것을 안다.' → I ___ ___ you did your best.",
            "ko": "나는 네가 최선을 다했다는 것을 안다.",
            "answers": [
              "know that"
            ],
            "explain": "know that ~으로 '~라는 것을 안다'를 표현한다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰시오. I hope ___ we can help each other.",
            "ko": "나는 우리가 서로 도울 수 있기를 바란다.",
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
            "q": "Our science teacher always says that ___ is important to ask questions when you do not understand something in class.",
            "options": [
              "that",
              "there",
              "it",
              "this"
            ],
            "answer": 2,
            "explain": "뒤의 to부정사(to ask)가 진주어이고 그 자리를 채우는 가주어는 It이다. that/there/this는 가주어로 쓰지 않는다."
          },
          {
            "q": "During the school festival, ___ was exciting to see so many students performing on the big stage together.",
            "options": [
              "what",
              "there",
              "it",
              "that"
            ],
            "answer": 2,
            "explain": "진주어 to see를 뒤로 보낸 가주어 자리이므로 It이 알맞다. There is 구문이 아니며 that/what도 가주어로 쓰이지 않는다."
          },
          {
            "q": "Choose the correct sentence. My mother believes that a healthy breakfast helps students study better.",
            "options": [
              "Is necessary to eat breakfast before school.",
              "There is necessary to eat breakfast before school.",
              "That is necessary to eat breakfast before school.",
              "It is necessary to eat breakfast before school."
            ],
            "answer": 3,
            "explain": "「It is + 형용사 + to부정사」 가주어 구문이 올바르다. There/That은 이 구문의 가주어가 될 수 없고, 주어 없이 Is로 시작할 수도 없다."
          },
          {
            "q": "A: Why do you go to bed so early every night?\nB: Because ___ is not easy for me to wake up at six in the morning.",
            "options": [
              "there",
              "that",
              "he",
              "it"
            ],
            "answer": 3,
            "explain": "진주어 to wake up을 대신하는 가주어 It이 필요하다. there/that/he는 이 자리에 쓸 수 없다."
          },
          {
            "q": "When the weather is very cold and the roads are covered with ice, ___ is dangerous to ride a bicycle to school.",
            "options": [
              "there",
              "it",
              "this",
              "that"
            ],
            "answer": 1,
            "explain": "뒤의 to ride가 진주어이므로 가주어 It이 알맞다."
          },
          {
            "q": "The city library is very quiet, so it is a good place to study. It is helpful ___ there before an important test.",
            "options": [
              "studies",
              "studying",
              "study",
              "to study"
            ],
            "answer": 3,
            "explain": "가주어 It 뒤의 진주어는 to부정사여야 하므로 to study가 알맞다."
          },
          {
            "q": "My grandfather often tells me that it is important ___ kind to people who need help, even when you are busy.",
            "options": [
              "to be",
              "being",
              "been",
              "be"
            ],
            "answer": 0,
            "explain": "진주어 자리에는 to부정사가 오므로 to be가 알맞다. being/be/been은 이 구문에 맞지 않는다."
          },
          {
            "q": "Before the class trip, our teacher reminded us that it is necessary ___ our tickets and student cards.",
            "options": [
              "brought",
              "brings",
              "bringing",
              "to bring"
            ],
            "answer": 3,
            "explain": "가주어 구문의 진주어는 to부정사이므로 to bring이 알맞다."
          },
          {
            "q": "Everyone in our club agrees that it is fun ___ new songs together during the weekend practice.",
            "options": [
              "to learn",
              "learning",
              "learned",
              "learn"
            ],
            "answer": 0,
            "explain": "진주어는 to부정사이므로 to learn이 알맞다. 가주어 It 구문에서는 동명사가 아니라 to부정사를 쓴다."
          },
          {
            "q": "Because the mountain path was steep and long, it was really hard ___ to the top before sunset.",
            "options": [
              "climbing",
              "climb",
              "climbs",
              "to climb"
            ],
            "answer": 3,
            "explain": "진주어 to부정사 to climb이 알맞다."
          },
          {
            "q": "My little brother is only five, so it is not easy for him ___ his shoes by himself every morning.",
            "options": [
              "to tie",
              "tied",
              "tie",
              "tying"
            ],
            "answer": 0,
            "explain": "의미상 주어 for him 뒤의 진주어는 to부정사이므로 to tie가 알맞다."
          },
          {
            "q": "Which sentence is grammatically correct?",
            "options": [
              "It is exciting travels to a foreign country.",
              "It is exciting to travel to a foreign country.",
              "It is exciting traveled to a foreign country.",
              "It is exciting travel to a foreign country."
            ],
            "answer": 1,
            "explain": "가주어 It 뒤의 진주어는 to부정사이므로 to travel이 들어간 문장이 올바르다."
          },
          {
            "q": "The movie was three hours long, and honestly, most students did not enjoy ___ in the dark theater for so long.",
            "options": [
              "to sit",
              "sit",
              "sitting",
              "sat"
            ],
            "answer": 2,
            "explain": "동사 enjoy는 목적어로 동명사를 취하므로 sitting이 알맞다. 가주어 구문이 아닌 일반 동사의 목적어 자리라 to부정사는 오답이다."
          },
          {
            "q": "It is polite to say thank you, but some people do not mind ___ in a long line for a popular restaurant.",
            "options": [
              "wait",
              "to wait",
              "waiting",
              "waited"
            ],
            "answer": 2,
            "explain": "동사 mind는 동명사를 목적어로 취하므로 waiting이 알맞다. It is + 형용사 구문과 달리 이 빈칸은 mind의 목적어 자리이다."
          },
          {
            "q": "Our new classmate just moved from another country, so it is still difficult ___ to understand fast Korean.",
            "options": [
              "of her",
              "for she",
              "to her",
              "for her"
            ],
            "answer": 3,
            "explain": "to부정사의 의미상 주어는 「for + 목적격」이므로 for her가 알맞다. she는 주격이라 오답이다."
          },
          {
            "q": "The math problem had many steps, and it was almost impossible ___ to solve it without a calculator.",
            "options": [
              "to us",
              "of us",
              "for we",
              "for us"
            ],
            "answer": 3,
            "explain": "의미상 주어는 「for + 목적격」이므로 for us가 알맞다."
          },
          {
            "q": "Choose the correct sentence about the young children in the park.",
            "options": [
              "It is dangerous to them to play near the deep pond.",
              "It is dangerous for them to play near the deep pond.",
              "It is dangerous for they to play near the deep pond.",
              "It is dangerous of them to play near the deep pond."
            ],
            "answer": 1,
            "explain": "의미상 주어는 「for + 목적격」이므로 for them이 올바르다. they는 주격, of/to는 이 구문에 맞지 않는다."
          },
          {
            "q": "My parents both work late, so it is sometimes necessary ___ to cook dinner for my younger sister.",
            "options": [
              "for me",
              "by me",
              "of me",
              "for I"
            ],
            "answer": 0,
            "explain": "의미상 주어는 「for + 목적격」이므로 for me가 알맞다."
          },
          {
            "q": "The instructions were written only in English, so it was hard ___ the old man to fill out the form.",
            "options": [
              "with",
              "to",
              "for",
              "of"
            ],
            "answer": 2,
            "explain": "to부정사의 의미상 주어를 나타낼 때는 for를 쓰므로 for the old man이 알맞다."
          },
          {
            "q": "Find the part that is grammatically wrong. It is important for we to protect the environment.",
            "options": [
              "to protect → protecting",
              "is → are",
              "important → importantly",
              "for we → for us"
            ],
            "answer": 3,
            "explain": "의미상 주어는 「for + 목적격」이므로 for we를 for us로 고쳐야 한다."
          },
          {
            "q": "Find the part that is grammatically wrong. It is good idea to save some money every month.",
            "options": [
              "to save → saving",
              "good idea → a good idea",
              "every → all",
              "It is → There is"
            ],
            "answer": 1,
            "explain": "셀 수 있는 명사 idea 앞에는 관사 a가 필요하므로 a good idea로 고쳐야 한다. 가주어·to부정사 부분은 옳다."
          },
          {
            "q": "Find the part that is grammatically wrong. It is fun playing board games with my family on rainy days.",
            "options": [
              "playing → to play",
              "fun → funny",
              "family → families",
              "It is → It has"
            ],
            "answer": 0,
            "explain": "가주어 It 구문의 진주어는 to부정사이므로 playing을 to play로 고쳐야 한다."
          },
          {
            "q": "Which sentence has the same meaning as 'To keep a diary in English is helpful'?",
            "options": [
              "It is to keep helpful a diary in English.",
              "It is helpful to keep a diary in English.",
              "It is helpful keeping a diary in English.",
              "Helpful it is to keep a diary in English."
            ],
            "answer": 1,
            "explain": "진주어 to부정사를 뒤로 보내고 가주어 It을 쓴 It is helpful to keep a diary in English가 같은 뜻이다."
          },
          {
            "q": "Which sentence has the same meaning as 'To finish this homework by tonight is difficult'?",
            "options": [
              "There is difficult to finish this homework by tonight.",
              "It is difficult to finish this homework by tonight.",
              "It is difficult finishing this homework by tonight.",
              "It difficult is to finish this homework by tonight."
            ],
            "answer": 1,
            "explain": "가주어 It으로 시작하고 진주어 to finish를 뒤에 두는 문장이 같은 뜻이다."
          },
          {
            "q": "In which sentence does 'It' work as a meaningless subject (가주어)?",
            "options": [
              "It is wonderful to help people in need.",
              "It is a very expensive smartphone.",
              "It is on the top shelf of the closet.",
              "It is my favorite hat from last year."
            ],
            "answer": 0,
            "explain": "①의 It은 진주어 to help를 대신하는 가주어이고, 나머지는 '그것'을 뜻하는 대명사이다."
          },
          {
            "q": "The underlined 'It' in 'It is hard to make everyone happy' is used in the same way as the 'It' in ___.",
            "options": [
              "It is boring to wait for a late bus.",
              "It is a warm and sunny day.",
              "It is five o'clock already.",
              "It is her brown leather bag."
            ],
            "answer": 0,
            "explain": "제시문의 It은 to부정사를 대신하는 가주어이다. ①만 같은 가주어이고 나머지는 비인칭·대명사 It이다."
          },
          {
            "q": "There will be a big test tomorrow, so it is ___ to review your notes and get enough sleep tonight.",
            "options": [
              "empty",
              "silent",
              "boring",
              "important"
            ],
            "answer": 3,
            "explain": "시험 전 복습과 수면은 '중요하다'는 뜻이므로 important가 문맥에 맞다. 나머지는 의미상 어울리지 않는다."
          },
          {
            "q": "The kitchen knife is very sharp, so it is ___ for young children to use it without an adult nearby.",
            "options": [
              "dangerous",
              "delicious",
              "cheap",
              "comfortable"
            ],
            "answer": 0,
            "explain": "날카로운 칼을 아이가 쓰는 것은 '위험하다'는 뜻이므로 dangerous가 알맞다."
          },
          {
            "q": "The instructions had many difficult words, so it was ___ for the new students to understand them at first.",
            "options": [
              "difficult",
              "fresh",
              "funny",
              "famous"
            ],
            "answer": 0,
            "explain": "어려운 단어가 많아 이해하기 '어렵다'는 뜻이므로 difficult가 문맥에 맞다."
          },
          {
            "q": "Water is something our bodies really need, so it is ___ to drink enough of it every single day.",
            "options": [
              "necessary",
              "terrible",
              "noisy",
              "impossible"
            ],
            "answer": 0,
            "explain": "물을 충분히 마시는 것은 '필요하다'는 뜻이므로 necessary가 알맞다."
          }
        ],
        "sa": [
          {
            "q": "To learn English is important.\n→  ___ is important to learn English. (가주어)",
            "ko": "영어를 배우는 것은 중요하다.",
            "answers": [
              "It"
            ],
            "explain": "진주어 to부정사를 뒤로 보내고 그 자리에 뜻 없는 가주어 It을 쓴다."
          },
          {
            "q": "It is good ___ exercise every day. (빈칸에 한 단어)",
            "ko": "매일 운동하는 것은 좋다.",
            "answers": [
              "to"
            ],
            "explain": "진주어는 「to + 동사원형」이므로 to가 들어간다."
          },
          {
            "q": "It is fun ___ ___ books. (책을 읽는 것 → 두 단어)",
            "ko": "책을 읽는 것은 재미있다.",
            "answers": [
              "to read"
            ],
            "explain": "진주어 to부정사 to read가 알맞다."
          },
          {
            "q": "빈칸을 채워 문장을 완성하시오.\n___ ___ dangerous to play with fire. (가주어 + be동사, 두 단어)",
            "ko": "불을 가지고 노는 것은 위험하다.",
            "answers": [
              "It is",
              "It's"
            ],
            "explain": "가주어 It과 be동사 is를 써서 It is로 시작한다."
          },
          {
            "q": "It is easy ___ ___ to ride a bike. (그가 → 의미상 주어, 두 단어)",
            "ko": "그가 자전거를 타는 것은 쉽다.",
            "answers": [
              "for him"
            ],
            "explain": "의미상 주어는 「for + 목적격」이므로 for him이다."
          },
          {
            "q": "It is important ___ ___ to study hard. (우리가 → 의미상 주어, 두 단어)",
            "ko": "우리가 열심히 공부하는 것은 중요하다.",
            "answers": [
              "for us"
            ],
            "explain": "의미상 주어는 「for + 목적격」이므로 for us이다."
          },
          {
            "q": "It is important ___ keep promises. (빈칸에 한 단어)",
            "ko": "약속을 지키는 것은 중요하다.",
            "answers": [
              "to"
            ],
            "explain": "진주어는 to부정사이므로 to keep의 to가 들어간다."
          },
          {
            "q": "It is hard to get up early. 에서 진짜 주어(진주어)를 이루는 to부정사의 첫 단어는?",
            "ko": "일찍 일어나는 것은 힘들다.",
            "answers": [
              "to"
            ],
            "explain": "진주어는 to부정사 to get up early이므로 첫 단어는 to이다."
          },
          {
            "q": "It is ___ to eat vegetables. (몸에 좋다 → 형용사 한 단어)",
            "ko": "채소를 먹는 것은 몸에 좋다.",
            "answers": [
              "good"
            ],
            "explain": "몸에 좋다는 뜻의 형용사 good이 알맞다."
          },
          {
            "q": "It is ___ to run on the ice. (위험하다 → 형용사 한 단어)",
            "ko": "얼음 위에서 뛰는 것은 위험하다.",
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
            "q": "The more information you gather, the ___ your final report will be. (정보를 더 모을수록 보고서가 더 좋아진다)",
            "options": [
              "good",
              "well",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "good의 불규칙 비교급은 better이다. 이 구문의 두 번째 절도 반드시 비교급을 써야 하므로 원급 good/well이나 최상급 best는 쓸 수 없다."
          },
          {
            "q": "The harder the students study, the ___ their test scores become. (열심히 공부할수록 점수가 더 높아진다)",
            "options": [
              "higher",
              "more high",
              "highest",
              "high"
            ],
            "answer": 0,
            "explain": "high는 1음절 단어로 -er을 붙여 higher가 된다. more high는 틀린 형태이고 최상급 highest는 이 구문에 맞지 않는다."
          },
          {
            "q": "___ we leave home, the more time we will have at the airport. (일찍 나갈수록 공항에서 시간이 많다)",
            "options": [
              "Earlier",
              "The early",
              "The earlier",
              "The earliest"
            ],
            "answer": 2,
            "explain": "앞 절은 「The + 비교급」으로 시작한다. early의 비교급 earlier에 the를 붙인 The earlier가 정답이다."
          },
          {
            "q": "The more expensive the phone is, the ___ features it usually offers. (비쌀수록 더 많은 기능)",
            "options": [
              "much",
              "most",
              "more",
              "many"
            ],
            "answer": 2,
            "explain": "셀 수 있는 명사 features 앞에서 '더 많은'을 뜻하는 many의 비교급 more가 알맞다."
          },
          {
            "q": "The longer the meeting lasts, the ___ everyone gets. (회의가 길어질수록 더 지친다)",
            "options": [
              "more tired",
              "tireder",
              "tired",
              "most tired"
            ],
            "answer": 0,
            "explain": "tired는 more로 비교급을 만든다. tireder는 존재하지 않는 형태이고 최상급 most tired는 쓸 수 없다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The faster you type, the sooner you finish.",
              "The fast you type, the soon you finish.",
              "Faster you type, sooner you finish.",
              "The faster you type, sooner you finish."
            ],
            "answer": 0,
            "explain": "두 절 모두 「The + 비교급」 형태를 갖춰야 한다. the가 빠지거나 원급을 쓰면 틀린다."
          },
          {
            "q": "___ money you save now, the more comfortable your future will be. (지금 많이 모을수록 미래가 편하다)",
            "options": [
              "most",
              "much",
              "more",
              "The more"
            ],
            "answer": 3,
            "explain": "앞 절은 「The + 비교급」으로 시작하며 much의 비교급 more에 the를 붙인 The more가 정답이다."
          },
          {
            "q": "The colder the winter is, the ___ energy the city uses. (겨울이 추울수록 에너지를 더 많이 쓴다)",
            "options": [
              "most",
              "more",
              "much",
              "many"
            ],
            "answer": 1,
            "explain": "셀 수 없는 명사 energy 앞에서는 much의 비교급 more를 쓴다. many는 셀 수 있는 명사에만 쓴다."
          },
          {
            "q": "The ___ the instructions are, the easier the task becomes. (설명이 명확할수록 더 쉬워진다)",
            "options": [
              "more clear",
              "clearer",
              "clear",
              "clearest"
            ],
            "answer": 1,
            "explain": "clear는 1음절 단어로 -er을 붙여 clearer가 된다. more clear는 틀린 형태이다."
          },
          {
            "q": "The more carefully she drives, the ___ accidents she has. (조심할수록 사고가 더 적다)",
            "options": [
              "less",
              "little",
              "fewer",
              "few"
            ],
            "answer": 2,
            "explain": "셀 수 있는 명사 accidents 앞에서는 few의 비교급 fewer를 쓴다. less는 셀 수 없는 명사에 쓴다."
          },
          {
            "q": "The more he exercises, the ___ he sleeps at night. (운동할수록 밤에 더 잘 잔다)",
            "options": [
              "good",
              "best",
              "well",
              "better"
            ],
            "answer": 3,
            "explain": "동사 sleeps를 꾸미는 부사 well의 불규칙 비교급 better가 정답이다."
          },
          {
            "q": "다음 중 「the 비교급, the 비교급」 구문이 아닌 것은?",
            "options": [
              "The more you plan, the less you worry.",
              "She runs faster than her brother.",
              "The sooner, the better.",
              "The higher we go, the colder it gets."
            ],
            "answer": 1,
            "explain": "2번은 than을 이용한 일반 비교 문장이다. 나머지는 모두 「the 비교급, the 비교급」 구문이다."
          },
          {
            "q": "The ___ difficult the exam is, the more time students need. (시험이 어려울수록 시간이 더 필요하다)",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "answer": 0,
            "explain": "difficult는 긴 형용사이므로 more difficult로 비교급을 만든다. 앞 절이므로 The more difficult가 알맞다."
          },
          {
            "q": "The busier the restaurant is, the ___ waiters it needs. (바쁠수록 종업원이 더 많이 필요하다)",
            "options": [
              "many",
              "more",
              "most",
              "much"
            ],
            "answer": 1,
            "explain": "셀 수 있는 명사 waiters 앞에서는 many의 비교급 more를 쓴다."
          },
          {
            "q": "밑줄 친 부분을 바르게 고친 것은? The more you practice, the good you become. → the good을 ___",
            "options": [
              "good",
              "gooder",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "good의 불규칙 비교급은 better이다. 두 번째 절도 비교급이어야 하므로 the better가 된다."
          },
          {
            "q": "The ___ you wake up, the more you can finish before noon. (일찍 일어날수록 더 많이 끝낸다)",
            "options": [
              "earliest",
              "earlier",
              "early",
              "more early"
            ],
            "answer": 1,
            "explain": "early는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 earlier가 된다."
          },
          {
            "q": "The heavier the bag is, the ___ it is to carry. (가방이 무거울수록 옮기기 더 힘들다)",
            "options": [
              "harder",
              "hard",
              "more hard",
              "hardest"
            ],
            "answer": 0,
            "explain": "hard는 1음절 단어로 -er을 붙여 harder가 된다. more hard는 틀린 형태이다."
          },
          {
            "q": "The more polite you are, the ___ friends you will make. (예의 바를수록 친구를 더 많이 사귄다)",
            "options": [
              "much",
              "many",
              "more",
              "most"
            ],
            "answer": 2,
            "explain": "셀 수 있는 명사 friends 앞에서는 many의 비교급 more를 쓴다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "The more fast you walk, the earlier you arrive.",
              "The louder he shouts, the angrier she gets.",
              "The more careful you are, the fewer mistakes you make.",
              "The bigger the crowd is, the more noise it makes."
            ],
            "answer": 0,
            "explain": "fast의 비교급은 faster이다. 'the more fast'가 아니라 'the faster'로 써야 한다."
          },
          {
            "q": "The ___ the temperature drops, the thicker clothes we wear. (기온이 낮을수록 더 두꺼운 옷을 입는다)",
            "options": [
              "more low",
              "lowest",
              "lower",
              "low"
            ],
            "answer": 2,
            "explain": "low는 1음절 단어로 -er을 붙여 lower가 된다. 앞 절도 비교급을 써야 한다."
          },
          {
            "q": "The less you spend, the ___ you can save. (덜 쓸수록 더 많이 모을 수 있다)",
            "options": [
              "more",
              "many",
              "much",
              "most"
            ],
            "answer": 0,
            "explain": "much의 비교급 more가 정답이다. '더 많이 모으다'를 뜻하므로 the more가 알맞다."
          },
          {
            "q": "The ___ expensive the ticket is, the fewer people buy it. (표가 비쌀수록 사는 사람이 적다)",
            "options": [
              "very",
              "more",
              "much",
              "most"
            ],
            "answer": 1,
            "explain": "expensive는 긴 형용사이므로 more expensive로 비교급을 만든다. 앞 절이므로 The more expensive가 알맞다."
          },
          {
            "q": "The more you smile, the ___ you feel. (많이 웃을수록 더 행복하다)",
            "options": [
              "happy",
              "more happy",
              "happiest",
              "happier"
            ],
            "answer": 3,
            "explain": "happy는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 happier가 된다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것은? '식당이 붐빌수록 서비스가 더 느려진다.'",
            "options": [
              "The most crowded the restaurant is, the slowest the service becomes.",
              "The more crowded the restaurant is, the slower the service becomes.",
              "More crowded the restaurant is, slower the service becomes.",
              "The more crowded the restaurant is, the more slow the service becomes."
            ],
            "answer": 1,
            "explain": "crowded는 more로, slow는 slower로 비교급을 만들고 각 절 앞에 the를 붙인다."
          },
          {
            "q": "The ___ languages you learn, the more cultures you understand. (언어를 많이 배울수록 문화를 더 이해한다)",
            "options": [
              "many",
              "much",
              "more",
              "most"
            ],
            "answer": 2,
            "explain": "셀 수 있는 명사 languages 앞에서는 many의 비교급 more를 쓴다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The more we practice, the more better we get.",
              "The most we practice, the best we get.",
              "The much we practice, the good we get.",
              "The more we practice, the better we get."
            ],
            "answer": 3,
            "explain": "good의 비교급은 better 하나로 충분하다. 'more better'처럼 이중 비교급을 쓰거나 최상급/원급을 쓰면 틀린다."
          },
          {
            "q": "The more you ___ your teacher's advice, the better your grades will be. (조언을 따를수록 성적이 좋아진다)",
            "options": [
              "waste",
              "forget",
              "follow",
              "refuse"
            ],
            "answer": 2,
            "explain": "성적이 좋아지려면 조언을 '따라야(follow)' 한다. forget(잊다)/refuse(거절하다)/waste(낭비하다)는 문맥상 맞지 않는다."
          },
          {
            "q": "The harder the workers ___, the sooner the project will be done. (열심히 일할수록 빨리 끝난다)",
            "options": [
              "rest",
              "work",
              "sleep",
              "complain"
            ],
            "answer": 1,
            "explain": "프로젝트가 빨리 끝나려면 '일해야(work)' 한다. rest(쉬다)/complain(불평하다)/sleep(자다)은 의미상 어울리지 않는다."
          },
          {
            "q": "The more vegetables you eat, the ___ your body becomes. (채소를 많이 먹을수록 몸이 건강해진다)",
            "options": [
              "slower",
              "sicker",
              "healthier",
              "weaker"
            ],
            "answer": 2,
            "explain": "채소를 많이 먹으면 몸이 '더 건강해진다(healthier)'. sicker/weaker/slower는 반대 의미로 맞지 않는다."
          },
          {
            "q": "The longer you ___ a language, the more fluent you become. (오래 공부할수록 유창해진다)",
            "options": [
              "study",
              "ignore",
              "quit",
              "avoid"
            ],
            "answer": 0,
            "explain": "유창해지려면 언어를 '공부해야(study)' 한다. ignore/avoid/quit은 문맥상 반대이다."
          }
        ],
        "sa": [
          {
            "q": "빈칸을 채우세요: The more you practice, ___ better you become. (연습할수록 더 잘한다)",
            "ko": "연습을 많이 할수록 너는 더 잘하게 된다.",
            "answers": [
              "the"
            ],
            "explain": "두 번째 절도 「the + 비교급」이므로 the가 들어간다."
          },
          {
            "q": "high의 비교급을 쓰세요: The ___ it is, the colder it is.",
            "ko": "높이 올라갈수록 더 춥다.",
            "answers": [
              "higher",
              "the higher"
            ],
            "explain": "high는 1음절 단어로 -er을 붙여 higher가 된다."
          },
          {
            "q": "good의 비교급 한 단어를 쓰세요: The more we practice, the ___ we play.",
            "ko": "우리가 연습을 많이 할수록 더 잘한다.",
            "answers": [
              "better",
              "the better"
            ],
            "explain": "good/well의 불규칙 비교급은 better이다."
          },
          {
            "q": "much의 비교급을 넣으세요: The ___ you read, the more you know. (많이 읽을수록)",
            "ko": "많이 읽을수록 더 많이 알게 된다.",
            "answers": [
              "more",
              "the more"
            ],
            "explain": "much의 비교급은 more이다. 앞 절도 the more로 쓴다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The longer you wait, the ___ she will be. (angry)",
            "ko": "네가 오래 기다릴수록 그녀는 더 화가 날 것이다.",
            "answers": [
              "angrier",
              "the angrier"
            ],
            "explain": "angry는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 angrier가 된다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The faster you walk, the ___ you arrive. (early)",
            "ko": "네가 빨리 걸을수록 더 일찍 도착한다.",
            "answers": [
              "earlier",
              "the earlier"
            ],
            "explain": "early는 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 earlier가 된다."
          },
          {
            "q": "빈칸을 채우세요: ___ harder you try, the stronger you become. (앞 절 시작 부분)",
            "ko": "네가 열심히 노력할수록 더 강해진다.",
            "answers": [
              "the",
              "The"
            ],
            "explain": "「the 비교급, the 비교급」 구문은 앞 절도 The로 시작한다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The more nervous, the ___ mistakes you make. (many, '더 많은')",
            "ko": "더 긴장할수록 더 많은 실수를 한다.",
            "answers": [
              "more",
              "the more"
            ],
            "explain": "many의 비교급은 more이다."
          },
          {
            "q": "little의 비교급 한 단어를 쓰세요: The ___ you sleep, the more tired you feel. (적게 잘수록)",
            "ko": "적게 잘수록 더 피곤함을 느낀다.",
            "answers": [
              "less",
              "the less"
            ],
            "explain": "little의 불규칙 비교급은 less이다."
          },
          {
            "q": "괄호 안 단어를 알맞은 형태로: The more expensive it is, the ___ it is. (good)",
            "ko": "비쌀수록 더 좋다.",
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
            "q": "The box of old family photos ___ on the top shelf of the closet.",
            "options": [
              "is",
              "were",
              "have",
              "are"
            ],
            "answer": 0,
            "explain": "진짜 주어는 The box(단수), of old family photos는 수식어구이므로 is. are/were는 복수형이라 오답."
          },
          {
            "q": "Tom and his brother ___ the dishes together after dinner every day.",
            "options": [
              "washes up",
              "is washing",
              "washes",
              "wash"
            ],
            "answer": 3,
            "explain": "「A and B」는 복수 주어이므로 동사원형 wash. 단수형 washes나 is washing은 오답."
          },
          {
            "q": "Every seat in the two large theaters ___ already been reserved for the show.",
            "options": [
              "are",
              "has",
              "were",
              "have"
            ],
            "answer": 1,
            "explain": "「every+단수명사」인 Every seat는 단수 취급이므로 has been. 복수형 have/are/were는 오답."
          },
          {
            "q": "There ___ a lot of people waiting in line for the new burger shop.",
            "options": [
              "was",
              "are",
              "has",
              "is"
            ],
            "answer": 1,
            "explain": "There 구문은 뒤 주어에 일치하고 a lot of people은 복수이므로 are. is/was는 단수라 오답."
          },
          {
            "q": "A number of tourists ___ taking photos in front of the old palace.",
            "options": [
              "are",
              "has",
              "was",
              "is"
            ],
            "answer": 0,
            "explain": "「a number of+복수명사」는 '많은 ~'로 복수 취급이므로 are. 단수형 is/was/has는 오답."
          },
          {
            "q": "The number of students who ride bikes to school ___ increasing every year.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "「the number of ~」는 '~의 수'로 단수 취급이므로 is. a number of와 헷갈려 are를 고르면 오답."
          },
          {
            "q": "Each of the players ___ a bottle of water before the match starts.",
            "options": [
              "gets",
              "do get",
              "are getting",
              "get"
            ],
            "answer": 0,
            "explain": "「each of+복수명사」의 핵심 주어는 each(단수)이므로 gets. 복수처럼 보이지만 get은 오답."
          },
          {
            "q": "Mathematics ___ my favorite subject because I enjoy solving hard problems.",
            "options": [
              "have",
              "is",
              "were",
              "are"
            ],
            "answer": 1,
            "explain": "-s로 끝나지만 과목명 Mathematics는 단수 취급이므로 is. are/were는 오답."
          },
          {
            "q": "My younger sister and I ___ going to the same school this year.",
            "options": [
              "am",
              "is",
              "are",
              "was"
            ],
            "answer": 2,
            "explain": "「A and I」는 복수(we) 취급이므로 are. am/is/was는 모두 단수라 오답."
          },
          {
            "q": "Something ___ wrong with the printer; it keeps making a strange noise.",
            "options": [
              "have",
              "were",
              "is",
              "are"
            ],
            "answer": 2,
            "explain": "-thing으로 끝나는 Something은 단수 취급이므로 is. are/were는 오답."
          },
          {
            "q": "The players on the school team ___ hard every morning before class.",
            "options": [
              "practice",
              "practices",
              "is practicing",
              "practices a lot"
            ],
            "answer": 0,
            "explain": "진짜 주어는 The players(복수), on the school team은 수식어구이므로 practice. 단수형 practices는 오답."
          },
          {
            "q": "Both of my parents ___ up early in the morning to go to work.",
            "options": [
              "wakes",
              "is waking",
              "wakes up",
              "wake"
            ],
            "answer": 3,
            "explain": "「both of ~」는 '둘 다'로 복수 취급이므로 wake. 단수형 wakes/is waking은 오답."
          },
          {
            "q": "The information in these science books ___ very useful for my report.",
            "options": [
              "were",
              "is",
              "have",
              "are"
            ],
            "answer": 1,
            "explain": "information은 셀 수 없는 명사로 단수 취급이므로 is. 복수형 are/were는 오답."
          },
          {
            "q": "Everybody in our club ___ to help clean the park this weekend.",
            "options": [
              "do want",
              "are wanting",
              "wants",
              "want"
            ],
            "answer": 2,
            "explain": "-body로 끝나는 Everybody는 단수 취급이므로 wants. want/are wanting은 오답."
          },
          {
            "q": "One of my close friends ___ a beautiful garden behind her house.",
            "options": [
              "have",
              "has",
              "do have",
              "are having"
            ],
            "answer": 1,
            "explain": "「one of+복수명사」의 핵심 주어는 one(단수)이므로 has. friends에 이끌려 have를 고르면 오답."
          },
          {
            "q": "The children in the playground ___ very excited about the school festival.",
            "options": [
              "is",
              "are",
              "was",
              "has"
            ],
            "answer": 1,
            "explain": "child의 복수형 children은 복수 취급이므로 are. 단수형 is/was는 오답."
          },
          {
            "q": "Neither of the twins ___ how to swim in deep water yet.",
            "options": [
              "know",
              "knows",
              "are knowing",
              "do know"
            ],
            "answer": 1,
            "explain": "「neither of ~」는 단수 취급이므로 knows. twins에 이끌려 know를 고르면 오답."
          },
          {
            "q": "My homeroom teacher, as well as her assistants, ___ ready to start the class.",
            "options": [
              "were",
              "have",
              "is",
              "are"
            ],
            "answer": 2,
            "explain": "「A as well as B」는 A(My teacher, 단수)에 일치하므로 is. assistants에 이끌려 are를 고르면 오답."
          },
          {
            "q": "The heavy boxes in the storage room ___ full of old toys and books.",
            "options": [
              "is",
              "was",
              "has",
              "are"
            ],
            "answer": 3,
            "explain": "진짜 주어는 The boxes(복수), in the storage room은 수식어구이므로 are. 단수형 is/was는 오답."
          },
          {
            "q": "Water ___ into ice when the temperature drops below zero degrees.",
            "options": [
              "turn",
              "do turn",
              "turns",
              "are turning"
            ],
            "answer": 2,
            "explain": "물질명사 Water는 단수 취급이고 일반적 사실이므로 turns. turn/are turning은 오답."
          },
          {
            "q": "Everything in the shops downtown ___ on sale during the holiday season.",
            "options": [
              "are",
              "were",
              "is",
              "have"
            ],
            "answer": 2,
            "explain": "-thing으로 끝나는 Everything은 단수 취급이므로 is. shops에 이끌려 are를 고르면 오답."
          },
          {
            "q": "My dog and my cat ___ next to each other by the warm fire.",
            "options": [
              "sleeps together",
              "is sleeping",
              "sleep",
              "sleeps"
            ],
            "answer": 2,
            "explain": "「A and B」는 복수 주어이므로 동사원형 sleep. 단수형 sleeps/is sleeping은 오답."
          },
          {
            "q": "Each country ___ its own flag, language, and special traditions.",
            "options": [
              "has",
              "have",
              "do have",
              "are having"
            ],
            "answer": 0,
            "explain": "「each+단수명사」인 Each country는 단수 취급이므로 has. have/are having은 오답."
          },
          {
            "q": "The girl with the two big suitcases ___ looking for the train platform.",
            "options": [
              "have",
              "is",
              "are",
              "were"
            ],
            "answer": 1,
            "explain": "진짜 주어는 The girl(단수), with the two big suitcases는 수식어구이므로 is. 복수형 are/were는 오답."
          },
          {
            "q": "A: Where are the boys?\nB: They ___ in the gym practicing basketball now.",
            "options": [
              "are",
              "was",
              "has",
              "is"
            ],
            "answer": 0,
            "explain": "주어 They는 복수이므로 are. 단수형 is/was는 오답."
          },
          {
            "q": "Every weekend, my father and my uncle ___ jogging together in the park.",
            "options": [
              "is going",
              "goes out",
              "go",
              "goes"
            ],
            "answer": 2,
            "explain": "「A and B」는 복수 주어이므로 동사원형 go. 단수형 goes/is going은 오답."
          },
          {
            "q": "Everyone in our grade ___ the new science teacher because she makes every lesson fun.",
            "options": [
              "loves",
              "lends",
              "loses",
              "leaves"
            ],
            "answer": 0,
            "explain": "'수업을 재미있게 해서 좋아한다'는 문맥이므로 loves. 나머지는 문법은 맞아도 의미상 어색하다."
          },
          {
            "q": "The students in my class always ___ their homework before the deadline.",
            "options": [
              "follow",
              "forget",
              "freeze",
              "finish"
            ],
            "answer": 3,
            "explain": "'마감 전에 숙제를 끝낸다'는 문맥이므로 finish. forget/follow/freeze는 의미가 맞지 않는다."
          },
          {
            "q": "There are many ___ in the science museum, from old rockets to real dinosaur bones.",
            "options": [
              "exhibits",
              "engines",
              "excuses",
              "envelopes"
            ],
            "answer": 0,
            "explain": "'박물관에 전시물이 많다'는 문맥이므로 exhibits(전시물). 나머지 명사는 의미상 맞지 않는다."
          },
          {
            "q": "Each student needs a ___ to write down the important dates for the final exam.",
            "options": [
              "candle",
              "carpet",
              "camera",
              "calendar"
            ],
            "answer": 3,
            "explain": "'중요한 날짜를 적으려면' 달력이 필요하므로 calendar. 나머지는 문맥에 맞지 않는다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"The students ___ in the classroom.\"",
            "ko": "그 학생들은 교실에 있다.",
            "answers": [
              "are"
            ],
            "explain": "복수 주어 The students → are."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Every child ___ (need) love.\"",
            "ko": "모든 아이는 사랑을 필요로 한다.",
            "answers": [
              "needs"
            ],
            "explain": "「every+단수명사」는 단수 취급 → needs."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Each of the boys ___ (have) a bike.\"",
            "ko": "그 소년들은 각자 자전거를 가지고 있다.",
            "answers": [
              "has"
            ],
            "explain": "「each of+복수」의 핵심 주어는 each(단수) → has."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Tom and Jerry ___ (play) together.\"",
            "ko": "Tom과 Jerry는 함께 논다.",
            "answers": [
              "play"
            ],
            "explain": "「A and B」는 복수 주어 → play."
          },
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"The news ___ surprising.\"",
            "ko": "그 소식은 놀랍다.",
            "answers": [
              "is"
            ],
            "explain": "news는 단수 취급 → is."
          },
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"A number of students ___ absent today.\"",
            "ko": "오늘 많은 학생들이 결석했다.",
            "answers": [
              "are"
            ],
            "explain": "「a number of+복수」는 복수 취급 → are."
          },
          {
            "q": "빈칸에 알맞은 be동사를 쓰세요: \"The number of cars ___ increasing.\"",
            "ko": "자동차의 수가 증가하고 있다.",
            "answers": [
              "is"
            ],
            "explain": "「the number of ~」는 단수 취급 → is."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Everybody ___ (like) summer vacation.\"",
            "ko": "모두가 여름 방학을 좋아한다.",
            "answers": [
              "likes"
            ],
            "explain": "-body로 끝나는 Everybody는 단수 취급 → likes."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"Everyone in my class ___ (have) a phone.\"",
            "ko": "우리 반의 모든 사람은 휴대폰을 가지고 있다.",
            "answers": [
              "has"
            ],
            "explain": "주어는 Everyone(단수), in my class는 수식어구 → has."
          },
          {
            "q": "괄호 안 동사를 알맞게: \"My parents ___ (work) in a hospital.\"",
            "ko": "우리 부모님은 병원에서 일하신다.",
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
            "q": "As the marathon began, we saw the runners ___ down the main street with great energy.",
            "options": [
              "race",
              "races",
              "raced",
              "to race"
            ],
            "answer": 0,
            "explain": "지각동사 saw의 목적격보어는 동사원형 race를 쓴다. to race·raced·races는 모두 틀리다."
          },
          {
            "q": "During the concert last night, I heard the famous singer ___ my favorite song beautifully.",
            "options": [
              "sing",
              "sings",
              "to sing",
              "to singing"
            ],
            "answer": 0,
            "explain": "지각동사 heard의 목적격보어는 동사원형 sing이다. to sing·sings·to singing은 틀리다."
          },
          {
            "q": "When the alarm went off, everyone in the office felt the floor ___ beneath their feet.",
            "options": [
              "to shaking",
              "shakes",
              "to shake",
              "shake"
            ],
            "answer": 3,
            "explain": "지각동사 felt의 목적격보어는 동사원형 shake이다. to shake·shakes는 쓸 수 없다."
          },
          {
            "q": "Standing by the window, she watched the heavy rain ___ against the glass for hours.",
            "options": [
              "to fall",
              "falling",
              "falls",
              "fell"
            ],
            "answer": 1,
            "explain": "지속되는 생생한 동작이므로 지각동사 watched 뒤에 -ing falling이 자연스럽다. to fall·fell·falls는 틀리다."
          },
          {
            "q": "In the early morning, the farmers noticed the cows slowly ___ toward the open field.",
            "options": [
              "to move",
              "moved",
              "to moving",
              "moving"
            ],
            "answer": 3,
            "explain": "지각동사처럼 쓰인 notice의 목적격보어로 -ing moving이 알맞다. to move·moved·to moving은 틀리다."
          },
          {
            "q": "Because the door was open, I could hear my neighbors ___ loudly about the football game.",
            "options": [
              "argues",
              "to argue",
              "arguing",
              "argued"
            ],
            "answer": 2,
            "explain": "지각동사 hear의 목적격보어로 진행의 -ing arguing이 자연스럽다. to argue·argued·argues는 틀리다."
          },
          {
            "q": "While waiting at the station, the boy watched a long train ___ into the platform.",
            "options": [
              "to coming",
              "came",
              "come",
              "to come"
            ],
            "answer": 2,
            "explain": "지각동사 watched의 목적격보어는 동사원형 come이다. to come·came·to coming은 틀리다."
          },
          {
            "q": "From the classroom window, the students saw a small bird ___ its nest on the tree branch.",
            "options": [
              "build",
              "builds",
              "to build",
              "to building"
            ],
            "answer": 0,
            "explain": "지각동사 saw의 목적격보어는 동사원형 build이다. to build·builds는 쓸 수 없다."
          },
          {
            "q": "As the storm grew stronger, everyone felt the old bridge ___ under the powerful wind.",
            "options": [
              "sway",
              "to sway",
              "sways",
              "to swaying"
            ],
            "answer": 0,
            "explain": "지각동사 felt의 목적격보어는 동사원형 sway이다. to sway·sways는 틀리다."
          },
          {
            "q": "Late at night, she heard someone quietly ___ up the wooden stairs toward her room.",
            "options": [
              "walks",
              "walked",
              "walking",
              "to walk"
            ],
            "answer": 2,
            "explain": "지각동사 heard의 목적격보어로 진행의 -ing walking이 자연스럽다. to walk·walked·walks는 틀리다."
          },
          {
            "q": "During the science class, we watched the ice slowly ___ into water under the warm lamp.",
            "options": [
              "to melting",
              "melts",
              "to melt",
              "melt"
            ],
            "answer": 3,
            "explain": "지각동사 watched의 목적격보어는 동사원형 melt이다. to melt·melts는 틀리다."
          },
          {
            "q": "Sitting in the park, the old man listened to the children ___ happily near the fountain.",
            "options": [
              "laughed",
              "laughs",
              "to laugh",
              "laugh"
            ],
            "answer": 3,
            "explain": "listen to도 지각동사로, 목적격보어에 동사원형 laugh를 쓴다. to laugh·laughed·laughs는 틀리다."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "The coach saw the players practice hard.",
              "The coach saw the players to practice hard.",
              "The coach saw the players practices hard.",
              "The coach saw the players to practicing hard."
            ],
            "answer": 0,
            "explain": "지각동사 saw의 목적격보어는 동사원형 practice이다. to practice·practices·to practicing은 모두 틀리다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I heard the wind to blow all night.",
              "I heard the wind blowing all night.",
              "I heard the wind howl all night.",
              "I heard the wind blow all night."
            ],
            "answer": 0,
            "explain": "지각동사 heard 뒤에는 동사원형이나 -ing만 온다. to blow가 들어간 문장이 틀리다."
          },
          {
            "q": "다음 빈칸에 들어갈 수 없는 것은?\nOn the field trip, we watched the dolphins ___ in the deep blue sea.",
            "options": [
              "to swim",
              "jump",
              "swim",
              "swimming"
            ],
            "answer": 0,
            "explain": "지각동사 watched의 목적격보어로는 동사원형이나 -ing만 가능하다. to swim은 쓸 수 없다."
          },
          {
            "q": "Standing at the gate, the guard ___ a stranger climb over the tall fence quickly.",
            "options": [
              "allowed",
              "wanted",
              "watched",
              "told"
            ],
            "answer": 2,
            "explain": "목적격보어로 동사원형 climb이 왔으므로 지각동사 watched가 알맞다. want·tell·allow는 to부정사를 취한다."
          },
          {
            "q": "다음 빈칸에 알맞은 것은?\nWe ___ the actor perform on the stage for almost two hours.",
            "options": [
              "expected",
              "wanted",
              "watched",
              "hoped"
            ],
            "answer": 2,
            "explain": "목적격보어로 동사원형 perform이 왔으므로 지각동사 watched가 알맞다. hope·want·expect는 to부정사를 취한다."
          },
          {
            "q": "The manager ___ the new workers carry the heavy boxes into the storage room.",
            "options": [
              "asked",
              "forced",
              "watched",
              "ordered"
            ],
            "answer": 2,
            "explain": "목적격보어로 동사원형 carry가 왔으므로 지각동사 watched가 알맞다. order·ask·force는 to부정사를 취한다."
          },
          {
            "q": "As soon as the movie started, the children saw the superhero ___ high into the sky.",
            "options": [
              "to fly",
              "to flying",
              "fly",
              "flew"
            ],
            "answer": 2,
            "explain": "지각동사 saw의 목적격보어는 동사원형 fly이다. to fly·flew는 쓸 수 없다."
          },
          {
            "q": "Every evening, the guests can hear the ocean waves gently ___ against the shore.",
            "options": [
              "crashed",
              "crashes",
              "crashing",
              "to crash"
            ],
            "answer": 2,
            "explain": "지각동사 hear의 목적격보어로 진행의 -ing crashing이 자연스럽다. to crash·crashed·crashes는 틀리다."
          },
          {
            "q": "The nurse felt the patient's hand ___ slightly when she checked his temperature.",
            "options": [
              "moves",
              "to move",
              "move",
              "to moving"
            ],
            "answer": 2,
            "explain": "지각동사 felt의 목적격보어는 동사원형 move이다. to move·moves는 틀리다."
          },
          {
            "q": "During the parade, thousands of people watched the soldiers ___ proudly down the main avenue.",
            "options": [
              "marches",
              "march",
              "marched",
              "to march"
            ],
            "answer": 1,
            "explain": "지각동사 watched의 목적격보어는 동사원형 march이다. to march·marched·marches는 틀리다."
          },
          {
            "q": "Right now, if you look outside, you can see the snow ___ softly on the empty streets.",
            "options": [
              "to fall",
              "fell",
              "falling",
              "falls"
            ],
            "answer": 2,
            "explain": "'right now' 지금 진행 중인 생생한 동작이므로 -ing falling이 알맞다. to fall·fell·falls는 틀리다."
          },
          {
            "q": "다음 우리말을 영어로 옳게 옮긴 것은?\n'우리는 그 새들이 노래하는 것을 들었다.'",
            "options": [
              "We heard the birds to singing.",
              "We heard the birds sing.",
              "We heard the birds to sing.",
              "We heard the birds sang."
            ],
            "answer": 1,
            "explain": "지각동사 heard의 목적격보어는 동사원형 sing(또는 singing)이다. to sing·sang·to singing은 틀리다."
          },
          {
            "q": "밑줄 친 부분을 바르게 고친 것으로 알맞지 않은 것은?\nI saw the man to enter the building.",
            "options": [
              "to enter → entered",
              "enter 또는 entering 둘 다 가능하다",
              "to enter → entering",
              "to enter → enter"
            ],
            "answer": 0,
            "explain": "지각동사 뒤 목적격보어는 enter(동사원형)나 entering(-ing)으로 고쳐야 한다. entered(과거형)로는 고칠 수 없다."
          },
          {
            "q": "At the zoo, the excited kids saw a monkey ___ from one tree to another.",
            "options": [
              "to jump",
              "jumped",
              "jump",
              "jumps"
            ],
            "answer": 2,
            "explain": "지각동사 saw의 목적격보어는 동사원형 jump이다. to jump·jumped·jumps는 틀리다."
          },
          {
            "q": "It was so dark inside the cave that I couldn't ___ anything in front of me, not even my own hands.",
            "options": [
              "smell",
              "taste",
              "listen",
              "see"
            ],
            "answer": 3,
            "explain": "어두워서 눈으로 볼 수 없다는 의미이므로 see가 알맞다. listen·smell·taste는 문맥에 맞지 않는다."
          },
          {
            "q": "The soup smelled delicious, and I could almost ___ the fresh vegetables cooked in it.",
            "options": [
              "hear",
              "watch",
              "notice",
              "taste"
            ],
            "answer": 3,
            "explain": "음식의 맛을 느낀다는 의미이므로 taste가 알맞다. hear·watch·notice는 의미상 어색하다."
          },
          {
            "q": "Please be quiet for a moment—I think I can ___ someone calling my name from downstairs.",
            "options": [
              "taste",
              "watch",
              "look",
              "hear"
            ],
            "answer": 3,
            "explain": "소리를 듣는다는 의미이므로 hear가 알맞다. look·watch는 시각, taste는 미각이라 문맥에 안 맞는다."
          },
          {
            "q": "From the airplane window, the passengers could ___ the beautiful mountains far below them.",
            "options": [
              "smell",
              "hear",
              "listen",
              "see"
            ],
            "answer": 3,
            "explain": "멀리 있는 산을 눈으로 본다는 의미이므로 see가 알맞다. listen·hear는 청각, smell은 후각이라 맞지 않는다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nShe heard the baby ___ .  (cry)",
            "ko": "그녀는 아기가 우는 소리를 들었다.",
            "answers": [
              "cry",
              "crying"
            ],
            "explain": "지각동사 heard의 목적격보어는 동사원형 cry 또는 -ing crying. to cry는 틀리다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWe watched them ___ on the stage.  (dance)",
            "ko": "우리는 그들이 무대에서 춤추는 것을 보았다.",
            "answers": [
              "dance",
              "dancing"
            ],
            "explain": "지각동사 watched의 목적격보어는 동사원형 dance 또는 -ing dancing."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI saw a bird ___ over the lake.  (fly)",
            "ko": "나는 새가 호수 위로 날아가는 것을 보았다.",
            "answers": [
              "fly",
              "flying"
            ],
            "explain": "지각동사 saw의 목적격보어는 동사원형 fly 또는 -ing flying."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nHe felt the ground ___ .  (shake)",
            "ko": "그는 땅이 흔들리는 것을 느꼈다.",
            "answers": [
              "shake",
              "shaking"
            ],
            "explain": "지각동사 felt의 목적격보어는 동사원형 shake 또는 -ing shaking."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI heard him ___ the piano.  (play)",
            "ko": "나는 그가 피아노를 치는 소리를 들었다.",
            "answers": [
              "play",
              "playing"
            ],
            "explain": "지각동사 heard의 목적격보어는 동사원형 play 또는 -ing playing."
          },
          {
            "q": "밑줄 친 틀린 부분을 바르게 고치세요.\nI saw him to run fast.  →  I saw him ___ fast.",
            "ko": "나는 그가 빨리 달리는 것을 보았다.",
            "answers": [
              "run",
              "running"
            ],
            "explain": "지각동사 뒤 목적격보어는 to run(X)이 아니라 동사원형 run 또는 running으로 고친다."
          },
          {
            "q": "밑줄 친 틀린 부분을 바르게 고치세요.\nShe heard someone to call her name.  →  She heard someone ___ her name.",
            "ko": "그녀는 누군가 그녀의 이름을 부르는 소리를 들었다.",
            "answers": [
              "call",
              "calling"
            ],
            "explain": "지각동사 heard의 목적격보어는 to call(X)이 아니라 동사원형 call 또는 calling."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nThey heard a dog ___ loudly.  (bark)",
            "ko": "그들은 개가 크게 짖는 소리를 들었다.",
            "answers": [
              "bark",
              "barking"
            ],
            "explain": "지각동사 heard의 목적격보어는 동사원형 bark 또는 -ing barking."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWe saw the sun ___ behind the hills.  (set)",
            "ko": "우리는 해가 언덕 뒤로 지는 것을 보았다.",
            "answers": [
              "set",
              "setting"
            ],
            "explain": "지각동사 saw의 목적격보어는 동사원형 set 또는 -ing setting."
          },
          {
            "q": "밑줄 친 틀린 부분을 바르게 고치세요.\nI felt the wind to blow.  →  I felt the wind ___ .",
            "ko": "나는 바람이 부는 것을 느꼈다.",
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
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe novel ___ our English teacher recommended became a bestseller.",
            "options": [
              "which",
              "who",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사 The novel은 사물이고 뒤에 'our teacher recommended(주어+동사)'가 오는 목적격이므로 which를 쓴다. 사람용 who, 소유격 whose, 선행사 없는 what은 틀리다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nMy uncle, ___ I visited last summer, lives near the ocean.",
            "options": [
              "whom",
              "which",
              "it",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사 My uncle은 사람이고 visited의 목적어이므로 목적격 whom을 쓴다. 사물용 which, 소유격 whose, 대명사 it은 관계대명사가 아니다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe smartphone ___ I dropped on the floor still works well.",
            "options": [
              "who",
              "what",
              "that",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 The smartphone은 사물이고 목적격이므로 that(또는 which)을 쓴다. 사람용 who, 소유격 whose는 틀리다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르시오.",
            "options": [
              "The letter who she wrote was long.",
              "The letter which she wrote was long.",
              "The letter which wrote she was long.",
              "The letter which she wrote it was long."
            ],
            "answer": 1,
            "explain": "목적격 관계대명사 which 뒤 동사 wrote의 목적어 자리는 비워야 하므로 it을 다시 쓰면 안 된다. 사물이라 who도, 어순이 뒤바뀐 것도 틀리다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nI have a classmate ___ father runs a bakery downtown.",
            "options": [
              "whom",
              "which",
              "who",
              "whose"
            ],
            "answer": 3,
            "explain": "뒤에 명사 father가 바로 오고 '~의 아버지'라는 소유 관계이므로 소유격 whose를 쓴다. 목적격 whom과는 구분해야 한다."
          },
          {
            "q": "두 문장을 하나로 바르게 연결한 것을 고르시오.\nThis is the song. Everyone loves it.",
            "options": [
              "This is the song that everyone loves.",
              "This is the song who everyone loves.",
              "This is the song which everyone loves it.",
              "This is the song that loves everyone."
            ],
            "answer": 0,
            "explain": "the song은 사물이고 loves의 목적어이므로 that/which를 쓰고 대명사 it은 삭제한다. 사람용 who와 의미가 뒤바뀐 것은 틀리다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe movie ___ we saw last night made everyone cry.",
            "options": [
              "whom",
              "who",
              "which",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 The movie는 사물이고 목적격이므로 which(또는 that)를 쓴다. 사람용 who(m), 소유격 whose는 틀리다."
          },
          {
            "q": "밑줄 친 관계대명사를 생략할 수 있는 문장을 고르시오.",
            "options": [
              "I know a boy who plays the drums.",
              "The pen which is on the table is mine.",
              "The girl who won the prize is happy.",
              "This is the movie that we enjoyed."
            ],
            "answer": 3,
            "explain": "목적격 관계대명사(that we enjoyed)는 생략할 수 있다. 나머지는 모두 주격이라 생략할 수 없다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThat is the scientist ___ discovery surprised the world.",
            "options": [
              "whose",
              "which",
              "who",
              "whom"
            ],
            "answer": 0,
            "explain": "뒤에 명사 discovery가 바로 오고 '~의 발견'이라는 소유 관계이므로 소유격 whose를 쓴다. 목적격 whom과 구분해야 한다."
          },
          {
            "q": "빈칸에 which를 쓸 수 있는 문장을 고르시오.",
            "options": [
              "They are the players ___ we cheered for.",
              "He is the man ___ I called.",
              "The dessert ___ he made was sweet.",
              "She is the doctor ___ I trust."
            ],
            "answer": 2,
            "explain": "which는 사물 선행사에 쓴다. the dessert만 사물이고 나머지는 모두 사람이다."
          },
          {
            "q": "다음 중 어법상 옳지 않은 문장을 고르시오.",
            "options": [
              "The song I heard on the radio was nice.",
              "The boy which I met is very kind.",
              "This is the bike that I ride every day.",
              "The cake which mom baked was delicious."
            ],
            "answer": 1,
            "explain": "the boy는 사람이므로 사물용 which를 쓸 수 없고 who(m)/that을 써야 한다. 나머지는 옳은 문장이다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 수 있는 것을 고르시오.\nThe man ___ I helped was grateful.\nThe box ___ I carried was heavy.",
            "options": [
              "that",
              "who",
              "which",
              "whom"
            ],
            "answer": 0,
            "explain": "that은 사람(the man)과 사물(the box) 선행사에 모두 쓸 수 있는 목적격 관계대명사이다. who는 사물에, which는 사람에 쓸 수 없다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe guests ___ we invited to the party arrived on time.",
            "options": [
              "which",
              "it",
              "whom",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사 The guests는 사람이고 목적격이므로 whom(또는 who/that)을 쓴다. 사물용 which, 소유격 whose는 틀리다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르시오.\n'이것은 그가 그린 그림이다.'",
            "options": [
              "This is the picture who he drew.",
              "This is the picture which drew he.",
              "This is the picture which he drew.",
              "This is the picture which he drew it."
            ],
            "answer": 2,
            "explain": "the picture는 사물이므로 which를 쓰고 뒤에 'he drew(주어+동사)'가 온다. 사람용 who, 어순 오류, 목적어 it 반복은 틀리다."
          },
          {
            "q": "다음 중 주격 관계대명사가 쓰인 문장을 고르시오.",
            "options": [
              "The soup which mom cooked was hot.",
              "The train that arrives at nine is fast.",
              "She is the girl whom I like.",
              "This is the book that I borrowed."
            ],
            "answer": 1,
            "explain": "'that arrives at nine'은 뒤에 동사가 바로 와서 주격이다. 나머지는 뒤에 '주어+동사'가 오는 목적격이다."
          },
          {
            "q": "다음 중 목적격 관계대명사가 쓰인 문장을 고르시오.",
            "options": [
              "The watch which you gave me is nice.",
              "The bird which sings well is rare.",
              "The girl who is dancing is my sister.",
              "I have a dog which barks loudly."
            ],
            "answer": 0,
            "explain": "'which you gave me'는 뒤에 '주어(you)+동사(gave)'가 와서 목적격이다. 나머지는 뒤에 동사가 바로 오는 주격이다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThat is the house ___ my grandparents built long ago.",
            "options": [
              "who",
              "that",
              "whom",
              "whose"
            ],
            "answer": 1,
            "explain": "선행사 the house는 사물이고 목적격이므로 that(또는 which)을 쓴다. 사람용 who(m), 소유격 whose는 틀리다."
          },
          {
            "q": "다음 문장에서 생략된 관계대명사가 들어갈 위치를 고르시오.\nThat is (①) the (②) sandwich (③) she (④) made.",
            "options": [
              "①",
              "②",
              "③",
              "④"
            ],
            "answer": 2,
            "explain": "선행사 the sandwich 바로 뒤(③)에 목적격 관계대명사가 생략되었다. 'the sandwich (that) she made'."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe manager ___ I talked to yesterday was very kind.",
            "options": [
              "whose",
              "which",
              "what",
              "whom"
            ],
            "answer": 3,
            "explain": "선행사 The manager는 사람이고 (전치사 to의) 목적격이므로 whom(또는 who/that)을 쓴다. 사물용 which, 소유격 whose는 틀리다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르시오.\nA: Which movie do you mean?\nB: The one ___ my brother directed last year.",
            "options": [
              "who",
              "whose",
              "what",
              "that"
            ],
            "answer": 3,
            "explain": "선행사 The one(=movie)은 사물이고 목적격이므로 that(또는 which)을 쓴다. 뒤에 'my brother directed'가 온다."
          },
          {
            "q": "밑줄 친 부분이 어법상 틀린 것을 고르시오.",
            "options": [
              "The email which I sent is important.",
              "He is the friend whom I trust.",
              "This is the ring that she chose.",
              "That is the game which we played it."
            ],
            "answer": 3,
            "explain": "목적격 관계대명사 which 뒤에는 목적어 it을 다시 쓰지 않는다. 'which we played'가 옳다."
          },
          {
            "q": "두 문장을 하나로 바르게 연결한 것을 고르시오.\nShe is the singer. We saw her on TV.",
            "options": [
              "She is the singer which we saw on TV.",
              "She is the singer whom we saw on TV.",
              "She is the singer who saw we on TV.",
              "She is the singer whom we saw her on TV."
            ],
            "answer": 1,
            "explain": "the singer는 사람이고 saw의 목적어이므로 whom(who/that)을 쓰고 대명사 her는 삭제한다. 사물용 which, it/her 반복, 어순 오류는 틀리다."
          },
          {
            "q": "다음 빈칸에 알맞은 것을 고르시오.\nThe report ___ we need for the meeting is almost ready.",
            "options": [
              "whom",
              "whose",
              "who",
              "which"
            ],
            "answer": 3,
            "explain": "선행사 The report는 사물이고 목적격이므로 which(또는 that)를 쓴다."
          },
          {
            "q": "다음 중 관계대명사를 생략할 수 없는 문장을 고르시오.",
            "options": [
              "This is the phone that I want.",
              "The doctor who cured me is famous.",
              "The novel which he wrote is long.",
              "The people whom we met were nice."
            ],
            "answer": 1,
            "explain": "'who cured me'는 주격 관계대명사라 생략할 수 없다. 나머지는 모두 목적격이라 생략할 수 있다."
          },
          {
            "q": "다음 우리말을 영어로 바르게 옮긴 것을 고르시오.\n'그녀는 내가 존경하는 선생님이다.'",
            "options": [
              "She is the teacher I respect her.",
              "She is the teacher whom respect I.",
              "She is the teacher whom I respect.",
              "She is the teacher which I respect."
            ],
            "answer": 2,
            "explain": "the teacher는 사람이고 respect의 목적어이므로 whom(who/that)을 쓰고 뒤에 'I respect'가 온다. 사물용 which, 어순 오류, 목적어 her 반복은 틀리다."
          },
          {
            "q": "다음 중 빈칸에 that만 쓸 수 있고 who는 쓸 수 없는 것을 고르시오.",
            "options": [
              "The train ___ I missed was late.",
              "The boy ___ I helped smiled.",
              "She is the woman ___ I admire.",
              "He is the man ___ I called."
            ],
            "answer": 0,
            "explain": "the train은 사물이므로 which/that만 가능하고 사람용 who(m)은 쓸 수 없다. 나머지는 사람이라 who(m)/that 모두 가능하다."
          },
          {
            "q": "문맥에 맞는 단어를 고르시오.\nThe book that I ___ from the library is due next Monday.",
            "options": [
              "lent",
              "sold",
              "borrowed",
              "threw"
            ],
            "answer": 2,
            "explain": "도서관에서 '빌린' 책이므로 borrowed가 맞다. lent(빌려주다), sold(팔다), threw(던졌다)는 문맥에 맞지 않는다."
          },
          {
            "q": "문맥에 맞는 단어를 고르시오.\nThe song which she sang was so ___ that the whole audience cried.",
            "options": [
              "empty",
              "noisy",
              "touching",
              "boring"
            ],
            "answer": 2,
            "explain": "관객을 울릴 만큼 '감동적인' 노래이므로 touching이 맞다. boring(지루한), noisy(시끄러운), empty(텅 빈)는 의미가 어울리지 않는다."
          },
          {
            "q": "문맥에 맞는 단어를 고르시오.\nThe teacher whom I respect always ___ us to try our best.",
            "options": [
              "discourages",
              "ignores",
              "encourages",
              "refuses"
            ],
            "answer": 2,
            "explain": "최선을 다하도록 '격려한다'는 뜻이므로 encourages가 맞다. discourages(낙담시키다), refuses(거절하다), ignores(무시하다)는 반대·부적절한 의미이다."
          },
          {
            "q": "문맥에 맞는 단어를 고르시오.\nThe movie which we watched had a very exciting ___.",
            "options": [
              "price",
              "plot",
              "weather",
              "menu"
            ],
            "answer": 1,
            "explain": "영화의 '줄거리(plot)'가 흥미진진하다는 뜻이 자연스럽다. price(가격), menu(메뉴), weather(날씨)는 영화와 어울리지 않는다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사물, 한 단어)\nThis is the book ___ I bought.",
            "ko": "이것은 내가 산 책이다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사 the book은 사물이고 목적격이므로 which 또는 that을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. 사람·사물에 모두 쓸 수 있는 한 단어로 쓰시오.\nHere is the pen ___ you lost.",
            "ko": "여기 네가 잃어버린 펜이 있다.",
            "answers": [
              "that"
            ],
            "explain": "that은 사람과 사물 선행사에 모두 쓸 수 있는 목적격 관계대명사이다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사람, m으로 끝나는 목적격 형태)\nShe is the girl ___ I met yesterday.",
            "ko": "그녀는 내가 어제 만난 소녀이다.",
            "answers": [
              "whom"
            ],
            "explain": "선행사 the girl은 사람이고 목적격이므로 목적격 전용 형태인 whom을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사물, 한 단어)\nThe food ___ he cooked was delicious.",
            "ko": "그가 요리한 음식은 맛있었다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사 the food는 사물이고 목적격이므로 which 또는 that을 쓴다."
          },
          {
            "q": "다음 문장에서 생략할 수 있는 한 단어를 쓰시오.\nThis is the song that I like.",
            "ko": "이것은 내가 좋아하는 노래이다.",
            "answers": [
              "that"
            ],
            "explain": "목적격 관계대명사 that은 생략할 수 있다. 'This is the song I like.'도 옳다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사람, 한 단어)\nHe is the singer ___ everyone loves.",
            "ko": "그는 모두가 사랑하는 가수이다.",
            "answers": [
              "whom",
              "who",
              "that"
            ],
            "explain": "선행사 the singer는 사람이고 목적격이므로 whom, who, that을 쓸 수 있다."
          },
          {
            "q": "다음 밑줄 친 관계대명사가 '주격'이면 S, '목적격'이면 O를 쓰시오.\nThe dog which barks loudly is mine.",
            "ko": "크게 짖는 그 개는 내 것이다.",
            "answers": [
              "S",
              "주격"
            ],
            "explain": "which 뒤에 동사(barks)가 바로 오므로 주격 관계대명사이다."
          },
          {
            "q": "다음 밑줄 친 관계대명사가 '주격'이면 S, '목적격'이면 O를 쓰시오.\nThat is the movie which we watched.",
            "ko": "저것은 우리가 본 영화이다.",
            "answers": [
              "O",
              "목적격"
            ],
            "explain": "which 뒤에 '주어(we)+동사(watched)'가 오므로 목적격 관계대명사이다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사물, 한 단어)\nThe bag ___ you bought looks nice.",
            "ko": "네가 산 가방은 멋져 보인다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사 the bag은 사물이고 목적격이므로 which 또는 that을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 쓰시오. (사람, 한 단어)\nThe teacher ___ I respect is strict.",
            "ko": "내가 존경하는 선생님은 엄격하시다.",
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
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the weather was terrible all morning, the school sports day went on as planned.",
            "options": [
              "So",
              "Because",
              "If",
              "Although"
            ],
            "answer": 3,
            "explain": "날씨가 나빴지만 행사를 진행했다는 양보이고 뒤에 '주어+동사(the weather was terrible)'가 오므로 Although가 맞다. Because(이유)는 뜻이 반대이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the heavy traffic on the road, the school bus arrived at the station right on time.",
            "options": [
              "Because",
              "Although",
              "Despite",
              "Even though"
            ],
            "answer": 2,
            "explain": "뒤에 명사구(the heavy traffic)가 오므로 전치사 Despite가 알맞다. Although/Even though는 뒤에 '주어+동사'가 와야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nOur teacher explained the grammar very clearly, ___ some students still had a lot of questions.",
            "options": [
              "because",
              "and",
              "so",
              "but"
            ],
            "answer": 3,
            "explain": "앞뒤 내용이 대조되고 두 문장을 잇는 자리이므로 등위접속사 but이 알맞다. so(그래서)/because(때문에)는 의미가 맞지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ he had studied all night for the test, he could not answer the last question.",
            "options": [
              "Because",
              "Despite",
              "During",
              "Although"
            ],
            "answer": 3,
            "explain": "밤새 공부했지만 못 풀었다는 양보이고 뒤에 '주어+동사'가 오므로 Although가 맞다. Despite/During은 전치사라 뒤에 명사가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe hikers finally reached the top of the mountain ___ the cold and windy weather.",
            "options": [
              "despite",
              "although",
              "even though",
              "because"
            ],
            "answer": 0,
            "explain": "뒤에 명사구(the cold and windy weather)가 오므로 전치사 despite가 알맞다. although/even though는 뒤에 '주어+동사'가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ working overtime almost every day, she never complained about being tired.",
            "options": [
              "Although",
              "Despite",
              "So",
              "Because"
            ],
            "answer": 1,
            "explain": "뒤에 동명사구(working overtime, 명사 역할)가 오므로 전치사 Despite가 알맞다. Although는 '주어+동사'가 필요하다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the movie got very bad reviews, many people went to see it on the opening day.",
            "options": [
              "Although",
              "Despite",
              "So",
              "Because"
            ],
            "answer": 0,
            "explain": "혹평을 받았지만 많이 봤다는 양보이고 뒤에 '주어+동사'가 오므로 Although가 맞다. Despite는 뒤에 명사가 와야 한다."
          },
          {
            "q": "다음 중 어법상 어색한 문장을 고르세요.",
            "options": [
              "Although the shop was small, it had many kinds of snacks.",
              "Although the shop was small, but it had many kinds of snacks.",
              "Although the shop was small, it was always busy.",
              "Although the price was high, the quality was good."
            ],
            "answer": 1,
            "explain": "although와 but을 한 문장에 함께 쓸 수 없다(Although ~, but ✕). but을 빼야 한다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 그 책은 어려웠지만, 그녀는 끝까지 읽었다.\n___ the book was difficult, she read it to the end.",
            "options": [
              "When",
              "Although",
              "If",
              "Because"
            ],
            "answer": 1,
            "explain": "'비록 ~이지만'의 양보를 나타내므로 Although가 맞다. Because(때문에)는 뜻이 반대이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe soccer game continued ___ it started to rain heavily in the second half.",
            "options": [
              "because of",
              "in spite of",
              "despite",
              "even though"
            ],
            "answer": 3,
            "explain": "뒤에 '주어+동사(it started to rain)'가 오므로 접속사 even though가 알맞다. despite/because of/in spite of는 뒤에 명사가 온다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ her broken leg, the dancer performed on the stage that evening.",
            "options": [
              "Though",
              "Despite",
              "Although",
              "Because"
            ],
            "answer": 1,
            "explain": "뒤에 명사구(her broken leg)가 오므로 전치사 Despite가 알맞다. Although/Though는 '주어+동사'가 온다."
          },
          {
            "q": "다음 중 어법상 옳은 문장을 고르세요.",
            "options": [
              "Because the rain was heavy, but we kept playing.",
              "Although the rain was heavy, but we kept playing.",
              "Despite the rain was heavy, we kept playing.",
              "Although the rain was heavy, we kept playing."
            ],
            "answer": 3,
            "explain": "Although 뒤에는 '주어+동사'가 오고 but과 함께 쓰지 않는다. Despite는 뒤에 명사가 와야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ his father is a famous chef, David does not know how to cook at all.",
            "options": [
              "So",
              "Because",
              "Although",
              "Despite"
            ],
            "answer": 2,
            "explain": "아버지가 유명 요리사지만 David는 요리를 못 한다는 대조이므로 Although가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe still enjoyed the picnic ___ the sudden change in the weather.",
            "options": [
              "because",
              "although",
              "even though",
              "despite"
            ],
            "answer": 3,
            "explain": "뒤에 명사구(the sudden change)가 오므로 전치사 despite가 알맞다. although/even though는 '주어+동사'가 온다."
          },
          {
            "q": "다음 두 문장을 although로 바르게 연결한 것을 고르세요.\nThe test was easy. Few students got a perfect score.",
            "options": [
              "Although of the easy test, few students got a perfect score.",
              "Although the test was easy, but few students got a perfect score.",
              "The test was easy although so few students got a perfect score.",
              "Although the test was easy, few students got a perfect score."
            ],
            "answer": 3,
            "explain": "「Although + 주어 + 동사, 주어 + 동사」 형태가 맞고 but을 함께 쓰지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the tickets were quite expensive, the concert hall was completely full.",
            "options": [
              "Because of",
              "In spite of",
              "Even though",
              "Despite"
            ],
            "answer": 2,
            "explain": "뒤에 '주어+동사(the tickets were expensive)'가 오므로 접속사 Even though가 알맞다. 나머지는 뒤에 명사가 온다."
          },
          {
            "q": "다음 중 빈칸에 들어갈 수 없는 것을 고르세요.\n___ he was very nervous, he gave a great speech in front of everyone.",
            "options": [
              "Even though",
              "Despite",
              "Though",
              "Although"
            ],
            "answer": 1,
            "explain": "Despite는 전치사라서 뒤에 '주어+동사(he was nervous)'가 오면 쓸 수 없다. although/though/even though는 가능하다."
          },
          {
            "q": "밑줄 친 부분을 바르게 고친 것을 고르세요.\nAlthough it was midnight, but the streets were still crowded.",
            "options": [
              "Although를 Despite로 바꾼다",
              "it을 there로 바꾼다",
              "but을 삭제한다",
              "was를 were로 바꾼다"
            ],
            "answer": 2,
            "explain": "Although와 but을 함께 쓸 수 없으므로 but을 삭제해야 한다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ the medicine tasted awful, the sick boy drank all of it without complaining.",
            "options": [
              "Because",
              "If",
              "Although",
              "So"
            ],
            "answer": 2,
            "explain": "약이 맛없었지만 다 마셨다는 양보이고 뒤에 '주어+동사'가 오므로 Although가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe old bridge is still safe to cross ___ its age.",
            "options": [
              "because",
              "despite",
              "even though",
              "although"
            ],
            "answer": 1,
            "explain": "뒤에 명사구(its age)가 오므로 전치사 despite가 알맞다. although/even though는 '주어+동사'가 온다."
          },
          {
            "q": "다음 중 although의 쓰임이 어색한 문장을 고르세요.",
            "options": [
              "Although the music was loud, I fell asleep quickly.",
              "Although it was noisy, I fell asleep quickly.",
              "Although I was tired, I fell asleep quickly.",
              "Although the loud music, I fell asleep quickly."
            ],
            "answer": 3,
            "explain": "although 뒤에는 '주어+동사'가 와야 한다. 'the loud music'은 명사구라서 Despite를 써야 한다."
          },
          {
            "q": "우리말과 같도록 빈칸에 알맞은 것을 고르세요.\n비록 우리는 숲에서 길을 잃었지만, 침착함을 유지했다.\n___ we got lost in the forest, we stayed calm.",
            "options": [
              "Although",
              "So",
              "When",
              "Because"
            ],
            "answer": 0,
            "explain": "길을 잃었지만 침착했다는 양보이므로 Although가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n___ she had never traveled abroad, she spoke three foreign languages fluently.",
            "options": [
              "During",
              "Although",
              "Despite",
              "Because"
            ],
            "answer": 1,
            "explain": "해외에 가 본 적 없지만 언어를 유창하게 한다는 대조이고 뒤에 '주어+동사'가 오므로 Although가 알맞다."
          },
          {
            "q": "다음 문장을 despite로 바꿀 때 빈칸에 알맞은 것을 고르세요.\nAlthough the noise was loud, the baby kept sleeping. = ___ the loud noise, the baby kept sleeping.",
            "options": [
              "Despite",
              "Even though",
              "Because",
              "Although"
            ],
            "answer": 0,
            "explain": "although(접속사) + 주어+동사 = despite(전치사) + 명사. 뒤에 명사(the loud noise)가 오므로 Despite가 맞다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 수 있는 말을 고르세요.\n___ the road was icy, the driver kept going.\n___ she was afraid of heights, she climbed the tall tower.",
            "options": [
              "So",
              "Although",
              "Because",
              "Despite"
            ],
            "answer": 1,
            "explain": "두 문장 모두 뒤에 '주어+동사'가 오는 양보의 뜻이므로 Although가 공통으로 알맞다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것을 고르세요.\nA: You look really tired today.\nB: Yes, ___ I slept for ten hours, I still feel sleepy.",
            "options": [
              "despite",
              "so",
              "although",
              "because of"
            ],
            "answer": 2,
            "explain": "뒤에 '주어+동사(I slept for ten hours)'가 오는 양보의 뜻이므로 접속사 although가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nAlthough the box looked small, it was surprisingly ___; two grown-ups could hardly lift it.",
            "options": [
              "empty",
              "light",
              "heavy",
              "soft"
            ],
            "answer": 2,
            "explain": "'들기 힘들다'는 내용과 연결되므로 heavy(무거운)가 알맞다. 작아 보였지만 무거웠다는 대조가 자연스럽다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nDespite the long line at the ticket office, the fans waited ___ for the doors to open.",
            "options": [
              "angrily",
              "quickly",
              "patiently",
              "rarely"
            ],
            "answer": 2,
            "explain": "긴 줄에도 불구하고 불평 없이 기다렸다는 문맥이므로 patiently(참을성 있게)가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nAlthough the recipe was very simple, the final dish tasted ___ and everyone asked for more.",
            "options": [
              "delicious",
              "salty",
              "boring",
              "terrible"
            ],
            "answer": 0,
            "explain": "'더 달라고 했다'는 내용과 어울리므로 delicious(맛있는)가 알맞다. 나머지는 문맥상 맞지 않는다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEven though he had practiced for months, he still felt very ___ before his first piano concert.",
            "options": [
              "lazy",
              "nervous",
              "proud",
              "hungry"
            ],
            "answer": 1,
            "explain": "연습을 많이 했지만 그래도 긴장했다는 양보이므로 nervous(긴장한)가 알맞다."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰세요. (비록 ~이지만)\n___ he was tired, he kept working.",
            "ko": "비록 그는 피곤했지만, 계속 일했다.",
            "answers": [
              "Although",
              "although"
            ],
            "explain": "뒤에 '주어+동사'가 오는 양보의 접속사는 although이다."
          },
          {
            "q": "빈칸에 알맞은 전치사 한 단어를 쓰세요. (뒤에 명사가 옴)\n___ the rain, we went out.",
            "ko": "비가 왔음에도 불구하고, 우리는 외출했다.",
            "answers": [
              "Despite",
              "despite"
            ],
            "explain": "뒤에 명사(the rain)가 오는 양보의 전치사는 despite이다."
          },
          {
            "q": "although와 바꿔 쓸 수 있는 한 단어를 쓰세요. (even ___)\neven ___ = although",
            "ko": "even though는 '비록 ~이지만'이라는 뜻으로 although와 같다.",
            "answers": [
              "though"
            ],
            "explain": "even though는 although와 같은 뜻이다."
          },
          {
            "q": "다음 문장에서 삭제해야 할 한 단어를 쓰세요.\nAlthough she was late, but she kept reading.",
            "ko": "비록 그녀는 늦었지만, 계속 읽었다.",
            "answers": [
              "but"
            ],
            "explain": "although와 but을 함께 쓸 수 없으므로 but을 삭제한다."
          },
          {
            "q": "빈칸에 알맞은 접속사 한 단어를 쓰세요.\n___ she is young, she is very wise.",
            "ko": "비록 그녀는 어리지만, 매우 현명하다.",
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
            "ko": "그의 병에도 불구하고, 그는 학교에 왔다.",
            "answers": [
              "Despite",
              "despite"
            ],
            "explain": "뒤에 명사구(his illness)가 오므로 전치사 despite가 알맞다."
          },
          {
            "q": "우리말과 같도록 빈칸에 접속사 한 단어를 쓰세요.\n비록 그는 부자지만 행복하지 않다.\n___ he is rich, he is not happy.",
            "ko": "비록 그는 부자지만, 행복하지 않다.",
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
            "ko": "그는 피곤했기 때문에, 일찍 잠자리에 들었다.",
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
            "ko": "비록 그들은 쌍둥이지만, 다르게 생겼다.",
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
            "ko": "비가 왔음에도 불구하고, 우리는 외출했다.",
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
            "q": "빈칸에 알맞은 것을 고르세요.\nEmma just moved to our town, so she asked me ___ buy fresh vegetables near the market.",
            "options": [
              "to where",
              "why to",
              "where should",
              "where to"
            ],
            "answer": 3,
            "explain": "'어디서 살지'는 「where + to부정사」인 where to buy입니다. why는 to부정사와 쓰지 않고, where should는 뒤에 주어가 필요하며, to where는 어순이 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy little brother really wants to learn ___ ride a bike this summer.",
            "options": [
              "how should",
              "how to",
              "what to",
              "why to"
            ],
            "answer": 1,
            "explain": "'타는 법(어떻게 탈지)'은 how to ride입니다. what to는 목적어를 묻고, why to는 쓰지 않으며, how should 뒤에는 주어가 와야 합니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe runners kept their eyes on the coach so they would know ___ start the race.",
            "options": [
              "who to",
              "when to",
              "why to",
              "when should"
            ],
            "answer": 1,
            "explain": "'언제 시작할지'는 when to start입니다. who to는 대상을, why to는 쓰지 않으며, when should는 주어가 빠져 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nBefore the field trip, our group couldn't decide ___ pack in the small backpack.",
            "options": [
              "how to",
              "why to",
              "where to",
              "what to"
            ],
            "answer": 3,
            "explain": "'무엇을 챙길지'는 what to pack입니다. 목적어(무엇을)를 묻는 상황이므로 what이 맞고 why는 to부정사와 쓰지 않습니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen my computer broke down, I really didn't know ___ ask for help.",
            "options": [
              "who to",
              "why to",
              "what should",
              "to who"
            ],
            "answer": 0,
            "explain": "'누구에게 도움을 청할지'는 who(m) to ask입니다. why to는 쓰지 않고, what should는 주어가 필요하며, to who는 어순이 틀립니다."
          },
          {
            "q": "다음 문장과 뜻이 같은 것을 고르세요.\nPlease tell me how I should use this coffee machine.",
            "options": [
              "Please tell me how using this coffee machine.",
              "Please tell me how to use this coffee machine.",
              "Please tell me how I should to use this coffee machine.",
              "Please tell me how use to this coffee machine."
            ],
            "answer": 1,
            "explain": "「의문사 + 주어 + should + 동사」는 「의문사 + to부정사」로 줄이므로 how I should use → how to use입니다."
          },
          {
            "q": "다음 중 어법상 틀린 표현을 고르세요.",
            "options": [
              "what to say",
              "when to leave home",
              "why to worry",
              "how to solve it"
            ],
            "answer": 2,
            "explain": "why는 to부정사와 함께 쓰지 않으므로 why to worry가 틀립니다. 나머지는 모두 올바른 「의문사 + to부정사」입니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe recipe was confusing, so Mom searched online for ___ do after mixing the flour and eggs.",
            "options": [
              "what should",
              "what to",
              "why to",
              "to what"
            ],
            "answer": 1,
            "explain": "'무엇을 할지'는 what to do입니다. to what은 어순이 틀리고, why to는 쓰지 않으며, what should는 주어가 빠졌습니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장을 고르세요.",
            "options": [
              "He forgot when meeting to us at the station.",
              "He forgot when to meet us at the station.",
              "He forgot when meet to us at the station.",
              "He forgot to when meet us at the station."
            ],
            "answer": 1,
            "explain": "「의문사 + to부정사」는 when to meet 순서로 씁니다. 나머지는 어순이나 형태가 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe little booklet inside the box explains ___ build the toy robot step by step.",
            "options": [
              "who to",
              "how should",
              "how to",
              "why to"
            ],
            "answer": 2,
            "explain": "'어떻게 조립하는지(조립하는 법)'는 how to build입니다. why to는 쓰지 않고, how should는 주어가 필요하며, who to는 대상을 묻습니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe tourist looked at the subway map to figure out ___ change trains.",
            "options": [
              "why to",
              "to where",
              "when should",
              "where to"
            ],
            "answer": 3,
            "explain": "'어디서 갈아탈지'는 where to change입니다. why to는 쓰지 않고, when should는 주어가 필요하며, to where는 어순이 틀립니다."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것을 고르세요.\nThey are still discussing ___ finish the group project.",
            "options": [
              "how to",
              "why to",
              "where to",
              "when to"
            ],
            "answer": 1,
            "explain": "why는 to부정사와 함께 쓰지 않으므로 why to finish는 쓸 수 없습니다. 나머지는 모두 가능합니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe menu was so long that the children didn't know ___ order for dinner.",
            "options": [
              "to what",
              "what to",
              "why to",
              "what should"
            ],
            "answer": 1,
            "explain": "'무엇을 주문할지'는 what to order입니다. why to는 쓰지 않고, what should는 주어가 필요하며, to what은 어순이 틀립니다."
          },
          {
            "q": "다음 문장을 바르게 줄인 것을 고르세요.\nWe haven't decided when we should announce the news.",
            "options": [
              "We haven't decided when announcing the news.",
              "We haven't decided when to announce the news.",
              "We haven't decided when announce to the news.",
              "We haven't decided to when announce the news."
            ],
            "answer": 1,
            "explain": "when we should announce → when to announce로 줄입니다. 나머지는 형태나 어순이 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nDuring the cooking class, the chef showed us ___ cut the onions safely.",
            "options": [
              "what to",
              "why to",
              "how should",
              "how to"
            ],
            "answer": 3,
            "explain": "'어떻게 자르는지(자르는 법)'는 how to cut입니다. why to는 쓰지 않고, what to는 목적어를 묻고, how should는 주어가 필요합니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThere were so many kind volunteers that I wasn't sure ___ thank first.",
            "options": [
              "who to",
              "what to",
              "when to",
              "why to"
            ],
            "answer": 0,
            "explain": "'누구에게 먼저 감사할지'는 who(m) to thank입니다. 대상이 사람이므로 who가 맞고 why to는 쓰지 않습니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장을 고르세요.",
            "options": [
              "She showed me where hang to my coat.",
              "She showed me where to hang my coat.",
              "She showed me where hanging my coat.",
              "She showed me to where hang my coat."
            ],
            "answer": 1,
            "explain": "「의문사 + to부정사」는 where to hang 순서입니다. 나머지는 어순이나 형태가 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe nurse told the patient exactly ___ take the medicine each day.",
            "options": [
              "why to",
              "when to",
              "who to",
              "what to"
            ],
            "answer": 1,
            "explain": "'언제 약을 먹을지'는 when to take입니다. what to는 목적어를, who to는 대상을 묻고, why to는 쓰지 않습니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nExcuse me, could you tell me ___ get to the museum from here?",
            "options": [
              "how far",
              "how to",
              "how should",
              "how"
            ],
            "answer": 1,
            "explain": "'어떻게 가는지(가는 법)'는 how to get입니다. how나 how far, how should 뒤에는 뒤 구조가 맞지 않아 to부정사 형태인 how to가 맞습니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy sister opened the empty fridge and sighed because she had no idea ___ cook for us.",
            "options": [
              "why to",
              "what to",
              "how should",
              "when to"
            ],
            "answer": 1,
            "explain": "'무엇을 요리할지'는 what to cook입니다. why to는 쓰지 않고, how should는 주어가 필요합니다."
          },
          {
            "q": "다음 문장과 뜻이 같은 것을 고르세요.\nI'm not sure what I should say to my new classmates.",
            "options": [
              "I'm not sure what should say to my new classmates.",
              "I'm not sure what to say to my new classmates.",
              "I'm not sure to what say to my new classmates.",
              "I'm not sure what saying to my new classmates."
            ],
            "answer": 1,
            "explain": "what I should say → what to say로 줄입니다. 나머지는 어순이나 형태가 틀립니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe new employee asked his manager ___ put the extra boxes in the storage room.",
            "options": [
              "why to",
              "where should",
              "who to",
              "where to"
            ],
            "answer": 3,
            "explain": "'어디에 둘지'는 where to put입니다. why to는 쓰지 않고, who to는 대상을, where should는 주어가 필요합니다."
          },
          {
            "q": "다음 중 어법상 어색한 문장을 고르세요.",
            "options": [
              "I learned how to save money.",
              "We decided what to do next.",
              "She knows when to be quiet.",
              "He wonders why to keep trying."
            ],
            "answer": 3,
            "explain": "why는 to부정사와 함께 쓰지 않으므로 why to keep이 어색합니다. 나머지는 모두 올바릅니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nAfter watching many videos, Jenny finally understood ___ fix the flat tire by herself.",
            "options": [
              "who to",
              "how to",
              "what should",
              "why to"
            ],
            "answer": 1,
            "explain": "'어떻게 고치는지(고치는 법)'는 how to fix입니다. why to는 쓰지 않고, what should는 주어가 필요합니다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nA good driver always knows ___ slow down near a school zone.",
            "options": [
              "when to",
              "when should",
              "why to",
              "what to"
            ],
            "answer": 0,
            "explain": "'언제 속도를 줄일지'는 when to slow down입니다. why to는 쓰지 않고, what to는 목적어를 묻으며, when should는 주어가 필요합니다."
          },
          {
            "q": "다음 단어를 바르게 배열한 것을 고르세요.\n( knows / he / to / where / sit )",
            "options": [
              "He knows where to sit.",
              "He where knows to sit.",
              "He knows to where sit.",
              "He knows where sit to."
            ],
            "answer": 0,
            "explain": "「주어 + 동사 + 의문사 + to부정사」 순서이므로 He knows where to sit입니다."
          },
          {
            "q": "빈칸에 알맞은 단어를 고르세요.\nAfter thinking for a long time, we finally ___ where to spend our summer vacation.",
            "options": [
              "arrived",
              "looked",
              "decided",
              "listened"
            ],
            "answer": 2,
            "explain": "'어디서 보낼지를 결정했다'가 자연스러우므로 decided가 맞습니다. 나머지는 뒤의 「where to + 동사」와 의미가 어울리지 않습니다."
          },
          {
            "q": "빈칸에 알맞은 단어를 고르세요.\nIn the swimming class, the children slowly ___ how to float on the water.",
            "options": [
              "sold",
              "closed",
              "dropped",
              "learned"
            ],
            "answer": 3,
            "explain": "'뜨는 법을 배웠다'가 자연스러우므로 learned가 맞습니다. 나머지는 의미가 맞지 않습니다."
          },
          {
            "q": "빈칸에 알맞은 단어를 고르세요.\nThe friendly guide will ___ us where to find the best seats in the theater.",
            "options": [
              "lose",
              "forget",
              "break",
              "show"
            ],
            "answer": 3,
            "explain": "'어디서 찾을지 보여 준다'가 자연스러우므로 show가 맞습니다. 나머지는 문맥상 어색합니다."
          },
          {
            "q": "빈칸에 알맞은 단어를 고르세요.\nBecause the road signs were confusing, the driver stopped to ___ a police officer where to turn.",
            "options": [
              "paint",
              "ask",
              "cook",
              "carry"
            ],
            "answer": 1,
            "explain": "'어디서 돌지 물어보다'가 자연스러우므로 ask가 맞습니다. 나머지는 의미가 맞지 않습니다."
          }
        ],
        "sa": [
          {
            "q": "다음 문장을 「의문사 + to부정사」로 바꿀 때 빈칸에 알맞은 두 단어를 쓰세요.\nTell me how I can get there. → Tell me ___ get there.",
            "ko": "거기에 어떻게 가는지 나에게 알려줘.",
            "answers": [
              "how to"
            ],
            "explain": "how I can get → how to get으로 줄입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n나는 점심으로 무엇을 먹을지 모르겠다.\nI don't know ___ eat for lunch.",
            "ko": "나는 점심으로 무엇을 먹을지 모르겠다.",
            "answers": [
              "what to"
            ],
            "explain": "'무엇을 먹을지'는 what to eat입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n그녀는 어디서 표를 살지 알게 되었다.\nShe learned ___ buy tickets.",
            "ko": "그녀는 어디서 표를 살지 알게 되었다.",
            "answers": [
              "where to"
            ],
            "explain": "'어디서 살지'는 where to buy입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n우리는 언제 시작할지 정하지 않았다.\nWe didn't decide ___ start.",
            "ko": "우리는 언제 시작할지 정하지 않았다.",
            "answers": [
              "when to"
            ],
            "explain": "'언제 시작할지'는 when to start입니다."
          },
          {
            "q": "다음 문장을 「의문사 + to부정사」로 바꿀 때 빈칸에 알맞은 두 단어를 쓰세요.\nShe asked where she should go. → She asked ___ go.",
            "ko": "그녀는 어디로 갈지 물었다.",
            "answers": [
              "where to"
            ],
            "explain": "where she should go → where to go로 줄입니다."
          },
          {
            "q": "다음 문장에서 어법상 틀린 한 단어를 바르게 고쳐, 밑줄 부분을 두 단어로 다시 쓰세요.\nI don't know why to do. → I don't know ___ do.",
            "ko": "나는 무엇을 해야 할지 모르겠다.",
            "answers": [
              "what to"
            ],
            "explain": "why는 to부정사와 쓰지 않습니다. 문맥상 '무엇을 할지'인 what to do가 자연스럽습니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n나에게 이것을 어떻게 쓰는지 알려줘.\nTell me ___ use this.",
            "ko": "이것을 어떻게 사용하는지 나에게 알려줘.",
            "answers": [
              "how to"
            ],
            "explain": "'어떻게 쓰는지(쓰는 법)'는 how to use입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n나는 누구에게 물어볼지 모르겠다.\nI don't know ___ ask.",
            "ko": "나는 누구에게 물어볼지 모르겠다.",
            "answers": [
              "who to",
              "whom to"
            ],
            "explain": "'누구에게 물어볼지'는 who(m) to ask입니다. who to, whom to 모두 가능합니다."
          },
          {
            "q": "다음 문장을 「의문사 + to부정사」로 바꿀 때 빈칸에 알맞은 두 단어를 쓰세요.\nHe learned how he should swim. → He learned ___ swim.",
            "ko": "그는 수영하는 법을 배웠다.",
            "answers": [
              "how to"
            ],
            "explain": "how he should swim → how to swim으로 줄입니다."
          },
          {
            "q": "다음 우리말에 맞게 빈칸을 채우세요. (두 단어)\n그는 언제 멈출지 모른다.\nHe doesn't know ___ stop.",
            "ko": "그는 언제 멈춰야 할지 모른다.",
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
            "q": "The science museum was ___ crowded on Saturday that we waited an hour to buy tickets.",
            "options": [
              "such",
              "so",
              "very",
              "enough"
            ],
            "answer": 1,
            "explain": "형용사 crowded 앞이고 뒤에 that 결과절이 있으므로 so가 맞다. such는 명사 앞, very는 that절을 이끌 수 없다."
          },
          {
            "q": "During the trip, the guide spoke ___ clearly that even the youngest students understood everything.",
            "options": [
              "such a",
              "so",
              "much",
              "such"
            ],
            "answer": 1,
            "explain": "부사 clearly 앞이므로 so를 쓴다. such/such a는 명사 앞에 쓴다."
          },
          {
            "q": "My little brother was ___ excited about the field trip that he couldn't sleep the night before.",
            "options": [
              "such",
              "such a",
              "so",
              "too"
            ],
            "answer": 2,
            "explain": "형용사 excited 앞이므로 so. that 결과절과 함께 쓰인다."
          },
          {
            "q": "The final math test was ___ difficult that half of the class ran out of time.",
            "options": [
              "enough",
              "very",
              "such",
              "so"
            ],
            "answer": 3,
            "explain": "형용사 difficult 앞 + that 결과절이므로 so. very는 that절과 함께 결과를 나타낼 수 없다."
          },
          {
            "q": "It was ___ a beautiful morning that the whole family decided to walk to school together.",
            "options": [
              "very",
              "such",
              "too",
              "so"
            ],
            "answer": 1,
            "explain": "「such+a+형용사+명사(a beautiful morning)」구조이므로 such."
          },
          {
            "q": "They served ___ delicious food at the party that nobody wanted to go home.",
            "options": [
              "so",
              "such a",
              "such",
              "very"
            ],
            "answer": 2,
            "explain": "food는 셀 수 없는 명사라 관사 없이 「such+형용사+명사」→ such delicious food."
          },
          {
            "q": "He is ___ a hard worker that his manager gave him an award last month.",
            "options": [
              "too",
              "so",
              "such",
              "very"
            ],
            "answer": 2,
            "explain": "「such+a+형용사+명사(a hard worker)」이므로 such. so는 관사와 함께 쓰지 않는다."
          },
          {
            "q": "The library was so quiet ___ I could hear the clock ticking on the wall.",
            "options": [
              "which",
              "so",
              "that",
              "than"
            ],
            "answer": 2,
            "explain": "「so+형용사(quiet)+that+주어+동사」에서 결과절을 잇는 접속사는 that이다."
          },
          {
            "q": "The backpack was so heavy ___ she had to stop and rest on the way home.",
            "options": [
              "than",
              "as",
              "then",
              "that"
            ],
            "answer": 3,
            "explain": "so~that 구문의 결과절은 that으로 연결한다. than(비교)·then(그때)과 혼동하지 않는다."
          },
          {
            "q": "The instructions were so confusing ___ none of us could finish the project on time.",
            "options": [
              "that",
              "who",
              "what",
              "where"
            ],
            "answer": 0,
            "explain": "결과를 나타내는 접속사는 that이다. 관계사 what/where/who는 여기 올 수 없다."
          },
          {
            "q": "The comedy show last night was so funny that the whole audience ___ for ten minutes.",
            "options": [
              "laughing",
              "laugh",
              "to laugh",
              "laughed"
            ],
            "answer": 3,
            "explain": "that절은 「주어+동사」의 완전한 절이며 과거 상황이므로 laughed가 맞다."
          },
          {
            "q": "The traffic this morning was so bad that we ___ the beginning of the movie.",
            "options": [
              "miss",
              "missing",
              "missed",
              "to miss"
            ],
            "answer": 2,
            "explain": "that 결과절에는 「주어+과거동사」가 온다. 과거이므로 missed."
          },
          {
            "q": "'그 상자는 너무 무거워서 그가 혼자 옮길 수 없었다'와 뜻이 같은 문장은?",
            "options": [
              "The box was so heavy to carry alone.",
              "The box was such heavy that he carried it alone.",
              "The box was too heavy to carry it alone.",
              "The box was too heavy for him to carry alone."
            ],
            "answer": 3,
            "explain": "so heavy that he couldn't carry it = too heavy (for him) to carry. 목적어 it을 반복한 'to carry it', so~to 형태, such를 쓴 문장은 모두 틀리다."
          },
          {
            "q": "The coffee was so hot that I couldn't drink it. 와 뜻이 같은 문장은?",
            "options": [
              "The coffee was hot enough to drink.",
              "The coffee was too hot to drink.",
              "The coffee was too hot to drink it.",
              "The coffee was so hot to drink."
            ],
            "answer": 1,
            "explain": "「so+형용사+that+주어+couldn't+동사」=「too+형용사+to부정사」. 목적어 it은 생략하므로 too hot to drink."
          },
          {
            "q": "He was too tired to walk any farther. 와 뜻이 같은 문장은?",
            "options": [
              "He was such tired that he couldn't walk.",
              "He was so tired to walk any farther.",
              "He was so tired that he couldn't walk any farther.",
              "He was so tired that he could walk farther."
            ],
            "answer": 2,
            "explain": "too~to = so~that+주어+couldn't. 부정의 의미가 that절에 나타난다."
          },
          {
            "q": "The problem was too hard for us to solve. 와 뜻이 같은 문장은?",
            "options": [
              "The problem was so hard to solve it.",
              "The problem was so hard that we couldn't solve it.",
              "The problem was so hard that we could solve it.",
              "The problem was such hard that we couldn't solve it."
            ],
            "answer": 1,
            "explain": "too~to = so~that+주어+couldn't. 부정의 뜻이 that절에 온다."
          },
          {
            "q": "다음 중 어법상 옳은 문장은?",
            "options": [
              "It was so a windy day that the game was canceled.",
              "It was such windy day that the game was canceled.",
              "It was so windy day that the game was canceled.",
              "It was such a windy day that the game was canceled."
            ],
            "answer": 3,
            "explain": "「such+a+형용사+명사(a windy day)」가 올바르다. so는 명사 앞에 관사와 함께 쓰지 않는다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "The wind blew so hard that the door slammed shut.",
              "She was so a smart student that she skipped a grade.",
              "The cake was so sweet that I couldn't finish it.",
              "The lecture was so boring that I fell asleep."
            ],
            "answer": 1,
            "explain": "so 다음에는 관사 a를 쓰지 않는다. 'so a smart student'는 틀리며 such a smart student가 맞다."
          },
          {
            "q": "다음 중 빈칸에 so를 쓸 수 없는 것은?",
            "options": [
              "The test was ___ easy that everyone got an A.",
              "The bus was ___ slow that we were late for class.",
              "It was ___ a lovely garden that we took many photos.",
              "She sang ___ beautifully that we clapped for a long time."
            ],
            "answer": 2,
            "explain": "「a+형용사+명사(a lovely garden)」앞에는 such를 써야 한다. 나머지는 형용사·부사 앞이라 so가 맞다."
          },
          {
            "q": "There were ___ many people at the concert that we couldn't find our seats.",
            "options": [
              "so",
              "very",
              "such a",
              "such"
            ],
            "answer": 0,
            "explain": "「so many/much + 명사」는 so를 쓴다. so many people이 맞다."
          },
          {
            "q": "He made ___ much noise while studying that his roommate asked him to be quiet.",
            "options": [
              "too",
              "so",
              "such",
              "such a"
            ],
            "answer": 1,
            "explain": "「so much + 셀 수 없는 명사(noise)」이므로 so."
          },
          {
            "q": "It was ___ exciting a match that the fans stayed until the very last minute.",
            "options": [
              "such",
              "very",
              "so",
              "too"
            ],
            "answer": 2,
            "explain": "「so+형용사+a+명사」어순도 가능하다: so exciting a match. such는 「such+a+형용사+명사」어순."
          },
          {
            "q": "우리말에 맞게 빈칸을 채울 때 알맞은 것은?\n그는 너무 조용히 말해서 아무도 그의 말을 들을 수 없었다.  He spoke so softly that nobody ___ hear him.",
            "options": [
              "so",
              "such",
              "could",
              "couldn't"
            ],
            "answer": 2,
            "explain": "부정 주어 nobody가 이미 '아무도 ~않다'를 나타내므로 뒤에는 could를 쓴다. nobody could hear him = 아무도 들을 수 없었다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 바르게 연결한 것은?\nThe room was very messy. We spent an hour cleaning it.",
            "options": [
              "The room was too messy that we spent an hour cleaning it.",
              "The room was so messy to spend an hour cleaning it.",
              "The room was so messy that we spent an hour cleaning it.",
              "The room was such messy that we spent an hour cleaning it."
            ],
            "answer": 2,
            "explain": "very를 so로 바꾸고 that으로 연결한다. so+형용사(messy)+that+주어+동사."
          },
          {
            "q": "다음 두 문장을 「so ~ that」으로 연결한 것으로 알맞은 것은?\nThe lake was very deep. The children were not allowed to swim.",
            "options": [
              "The lake was too deep that the children were not allowed to swim.",
              "The lake was so deep that the children were not allowed to swim.",
              "The lake was such deep that the children were not allowed to swim.",
              "The lake was so deep so the children were not allowed to swim."
            ],
            "answer": 1,
            "explain": "so+deep(형용사)+that+주어+동사. such는 명사 앞, 결과절 연결은 that."
          },
          {
            "q": "다음 중 뜻이 나머지와 다른 하나는?",
            "options": [
              "The soup was so salty that I ate it all.",
              "The soup was too salty to eat.",
              "The soup was too salty for me to eat.",
              "The soup was so salty that I couldn't eat it."
            ],
            "answer": 0,
            "explain": "나머지는 '너무 짜서 먹을 수 없었다'는 뜻이지만, 'so salty that I ate it all'은 '다 먹었다'로 뜻이 반대다."
          },
          {
            "q": "The homework was so ___ that most students finished it in just five minutes.",
            "options": [
              "careful",
              "empty",
              "famous",
              "easy"
            ],
            "answer": 3,
            "explain": "5분 만에 끝냈다는 결과와 어울리는 형용사는 easy(쉬운). 나머지는 문맥상 맞지 않는다."
          },
          {
            "q": "The story was so ___ that I stayed up all night reading it.",
            "options": [
              "interesting",
              "boring",
              "quiet",
              "angry"
            ],
            "answer": 0,
            "explain": "밤새워 읽었다는 결과와 어울리는 것은 interesting(흥미로운). boring이면 밤새 읽지 않는다."
          },
          {
            "q": "The runner was so ___ that he won the race by ten seconds.",
            "options": [
              "slow",
              "fast",
              "late",
              "weak"
            ],
            "answer": 1,
            "explain": "경주를 크게 이겼다는 결과와 어울리는 형용사는 fast(빠른)."
          },
          {
            "q": "She spoke so ___ that everyone in the back row could hear her clearly.",
            "options": [
              "rudely",
              "loudly",
              "silently",
              "carelessly"
            ],
            "answer": 1,
            "explain": "뒷줄까지 또렷이 들렸다는 결과와 맞는 부사는 loudly(크게)."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰시오.\nIt was ___ hot that we couldn't play. (너무 ~해서)",
            "ko": "너무 더워서 우리는 놀 수 없었다.",
            "answers": [
              "so"
            ],
            "explain": "so + 형용사 + that: so가 정답."
          },
          {
            "q": "빈칸에 알맞은 접속사를 쓰시오.\nHe is so tall ___ he can touch the ceiling.",
            "ko": "그는 너무 키가 커서 천장을 만질 수 있다.",
            "answers": [
              "that"
            ],
            "explain": "결과절을 이끄는 접속사 that."
          },
          {
            "q": "빈칸에 so 또는 such 중 알맞은 말을 쓰시오.\nIt was ___ a long movie that we got bored.",
            "ko": "그것은 너무 긴 영화여서 우리는 지루해졌다.",
            "answers": [
              "such"
            ],
            "explain": "「such+a+형용사+명사(a long movie)」이므로 such."
          },
          {
            "q": "빈칸에 so 또는 such 중 알맞은 말을 쓰시오.\nShe was ___ tired that she fell asleep.",
            "ko": "그녀는 너무 피곤해서 잠들었다.",
            "answers": [
              "so"
            ],
            "explain": "형용사 tired 앞이므로 so."
          },
          {
            "q": "다음 문장을 too ~ to로 바꿀 때 빈칸에 알맞은 두 단어를 쓰시오.\nThe box was so heavy that I couldn't lift it. → The box was ___ heavy to lift.",
            "ko": "그 상자는 너무 무거워서 들 수 없었다.",
            "answers": [
              "too"
            ],
            "explain": "so ~ that + couldn't = too ~ to. 빈칸에는 too."
          },
          {
            "q": "다음을 so ~ that으로 바꿀 때 빈칸에 알맞은 한 단어를 쓰시오.\nThe tea was too hot to drink. → The tea was so hot that I ___ drink it.",
            "ko": "그 차는 너무 뜨거워서 나는 마실 수 없었다.",
            "answers": [
              "couldn't",
              "could not",
              "cannot",
              "can't"
            ],
            "explain": "too ~ to = so ~ that + couldn't. 부정어 couldn't가 알맞다."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰시오. (한 단어)\nThe music was ___ loud that we couldn't talk.",
            "ko": "음악이 너무 시끄러워서 우리는 이야기할 수 없었다.",
            "answers": [
              "so"
            ],
            "explain": "형용사 loud 앞이므로 so."
          },
          {
            "q": "우리말에 맞게 빈칸을 채우시오. (두 단어)\n나는 너무 바빠서 …  I was ___ ___ that I skipped lunch.",
            "ko": "나는 너무 바빠서 점심을 걸렀다.",
            "answers": [
              "so busy"
            ],
            "explain": "so + busy(형용사): so busy."
          },
          {
            "q": "빈칸에 so 또는 such 중 알맞은 말을 쓰시오.\nHe had ___ many books that his bag was heavy.",
            "ko": "그는 책이 너무 많아서 가방이 무거웠다.",
            "answers": [
              "so"
            ],
            "explain": "「so many + 명사」는 so를 쓴다."
          },
          {
            "q": "다음 문장을 too ~ to로 바꿀 때 밑줄에 알맞은 세 단어를 쓰시오.\nIt was so dark that I couldn't see. → It was ___ ___ ___.",
            "ko": "너무 어두워서 볼 수 없었다.",
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
