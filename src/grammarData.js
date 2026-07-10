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
            "q": "빈칸에 알맞은 것을 고르세요.\nI want ___ comics after dinner.",
            "options": [
              "to read",
              "read",
              "reading",
              "reads"
            ],
            "answer": 0,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to read이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe wants ___ on the stage.",
            "options": [
              "dances",
              "to dance",
              "dancing",
              "dance"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to dance이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe decided ___ the classroom.",
            "options": [
              "cleaning",
              "cleans",
              "to clean",
              "clean"
            ],
            "answer": 2,
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to clean이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nHe needs ___ his bike.",
            "options": [
              "fix",
              "fixes",
              "fixing",
              "to fix"
            ],
            "answer": 3,
            "explain": "need 뒤에는 「to+동사원형」이 오므로 to fix이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThey plan ___ a bakery.",
            "options": [
              "to open",
              "open",
              "opening",
              "opens"
            ],
            "answer": 0,
            "explain": "plan 뒤에는 「to+동사원형」이 오므로 to open이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI want ___ a cook.",
            "options": [
              "becomes",
              "to become",
              "becoming",
              "become"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to become이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy sister hopes ___ the contest.",
            "options": [
              "winning",
              "wins",
              "to win",
              "win"
            ],
            "answer": 2,
            "explain": "hope 뒤에는 「to+동사원형」이 오므로 to win이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nYou need ___ some sleep now.",
            "options": [
              "get",
              "gets",
              "getting",
              "to get"
            ],
            "answer": 3,
            "explain": "need 뒤에는 「to+동사원형」이 오므로 to get이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThey plan ___ camping this weekend.",
            "options": [
              "to go",
              "go",
              "going",
              "goes"
            ],
            "answer": 0,
            "explain": "plan 뒤에는 「to+동사원형」이 오므로 to go이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe wants ___ the song.",
            "options": [
              "learns",
              "to learn",
              "learning",
              "learn"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to learn이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI decided ___ my grandmother next month.",
            "options": [
              "visiting",
              "visits",
              "to visit",
              "visit"
            ],
            "answer": 2,
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to visit이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nHe needs ___ a lot of water every day.",
            "options": [
              "drink",
              "drinks",
              "drinking",
              "to drink"
            ],
            "answer": 3,
            "explain": "need 뒤에는 「to+동사원형」이 오므로 to drink이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe hope ___ the mountain.",
            "options": [
              "to climb",
              "climb",
              "climbing",
              "climbs"
            ],
            "answer": 0,
            "explain": "hope 뒤에는 「to+동사원형」이 오므로 to climb이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI want ___ English fluently.",
            "options": [
              "speaks",
              "to speak",
              "speaking",
              "speak"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to speak이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe decided ___ an artist.",
            "options": [
              "being",
              "is",
              "to be",
              "be"
            ],
            "answer": 2,
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to be이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe hope ___ you soon.",
            "options": [
              "see",
              "sees",
              "seeing",
              "to see"
            ],
            "answer": 3,
            "explain": "hope 뒤에는 「to+동사원형」이 오므로 to see이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nHe needs ___ his homework.",
            "options": [
              "to finish",
              "finish",
              "finishing",
              "finishes"
            ],
            "answer": 0,
            "explain": "need 뒤에는 「to+동사원형」이 오므로 to finish이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThey plan ___ a treehouse.",
            "options": [
              "builds",
              "to build",
              "building",
              "build"
            ],
            "answer": 1,
            "explain": "plan 뒤에는 「to+동사원형」이 오므로 to build이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI want ___ a new language.",
            "options": [
              "learning",
              "learns",
              "to learn",
              "learn"
            ],
            "answer": 2,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to learn이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe decided ___ on a picnic.",
            "options": [
              "go",
              "goes",
              "going",
              "to go"
            ],
            "answer": 3,
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to go이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI hope ___ well on this exam.",
            "options": [
              "to do",
              "do",
              "doing",
              "does"
            ],
            "answer": 0,
            "explain": "hope 뒤에는 「to+동사원형」이 오므로 to do이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nHe wants ___ a new phone.",
            "options": [
              "buys",
              "to buy",
              "buying",
              "buy"
            ],
            "answer": 1,
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to buy이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWe plan ___ a party for her.",
            "options": [
              "having",
              "has",
              "to have",
              "have"
            ],
            "answer": 2,
            "explain": "plan 뒤에는 「to+동사원형」이 오므로 to have이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nShe needs ___ her room today.",
            "options": [
              "clean",
              "cleans",
              "cleaning",
              "to clean"
            ],
            "answer": 3,
            "explain": "need 뒤에는 「to+동사원형」이 오므로 to clean이다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThey decided ___ a movie tonight.",
            "options": [
              "to watch",
              "watch",
              "watching",
              "watches"
            ],
            "answer": 0,
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to watch이다."
          }
        ],
        "sa": [
          {
            "q": "빈칸을 채우세요.\nI want ___ comics after dinner.",
            "ko": "나는 저녁을 먹고 만화를 읽고 싶다.",
            "answers": [
              "to read"
            ],
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to read이다."
          },
          {
            "q": "빈칸을 채우세요.\nShe wants ___ on the stage.",
            "ko": "그녀는 무대 위에서 춤추고 싶어 한다.",
            "answers": [
              "to dance"
            ],
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to dance이다."
          },
          {
            "q": "빈칸을 채우세요.\nWe decided ___ the classroom.",
            "ko": "우리는 교실을 청소하기로 결정했다.",
            "answers": [
              "to clean"
            ],
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to clean이다."
          },
          {
            "q": "빈칸을 채우세요.\nHe needs ___ his bike.",
            "ko": "그는 자전거를 고쳐야 한다.",
            "answers": [
              "to fix"
            ],
            "explain": "need 뒤에는 「to+동사원형」이 오므로 to fix이다."
          },
          {
            "q": "빈칸을 채우세요.\nThey plan ___ a bakery.",
            "ko": "그들은 빵집을 열 계획이다.",
            "answers": [
              "to open"
            ],
            "explain": "plan 뒤에는 「to+동사원형」이 오므로 to open이다."
          },
          {
            "q": "빈칸을 채우세요.\nI want ___ a cook.",
            "ko": "나는 요리사가 되고 싶다.",
            "answers": [
              "to become"
            ],
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to become이다."
          },
          {
            "q": "빈칸을 채우세요.\nMy sister hopes ___ the contest.",
            "ko": "내 여동생은 대회에서 우승하기를 바란다.",
            "answers": [
              "to win"
            ],
            "explain": "hope 뒤에는 「to+동사원형」이 오므로 to win이다."
          },
          {
            "q": "빈칸을 채우세요.\nI decided ___ my grandmother next month.",
            "ko": "나는 다음 달에 할머니를 방문하기로 결정했다.",
            "answers": [
              "to visit"
            ],
            "explain": "decide 뒤에는 「to+동사원형」이 오므로 to visit이다."
          },
          {
            "q": "빈칸을 채우세요.\nI want ___ English fluently.",
            "ko": "나는 영어를 유창하게 말하고 싶다.",
            "answers": [
              "to speak"
            ],
            "explain": "want 뒤에는 「to+동사원형」이 오므로 to speak이다."
          },
          {
            "q": "빈칸을 채우세요.\nI hope ___ well on this exam.",
            "ko": "나는 이번 시험을 잘 보기를 바란다.",
            "answers": [
              "to do"
            ],
            "explain": "hope 뒤에는 「to+동사원형」이 오므로 to do이다."
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
            "q": "빈칸에 알맞은 주어를 고르세요.\n___ is rainy today.",
            "options": [
              "It",
              "He",
              "She",
              "They"
            ],
            "answer": 0,
            "explain": "날씨를 말할 때는 뜻 없는 비인칭 주어 It을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ o'clock now.",
            "options": [
              "Monday",
              "seven",
              "dark",
              "far"
            ],
            "answer": 1,
            "explain": "시각을 말하므로 숫자 seven이 알맞아요. It은 비인칭 주어예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today. Tomorrow is Tuesday!",
            "options": [
              "far",
              "dark",
              "Monday",
              "sunny"
            ],
            "answer": 2,
            "explain": "내일이 화요일이므로 오늘은 월요일이에요. It is Monday today.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ from here.",
            "options": [
              "cloudy",
              "spring",
              "Monday",
              "far"
            ],
            "answer": 3,
            "explain": "거리를 말할 때 It is far from here.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ outside.",
            "options": [
              "dark",
              "Tuesday",
              "five",
              "near"
            ],
            "answer": 0,
            "explain": "명암을 말할 때 It is dark outside.로 써요."
          },
          {
            "q": "빈칸에 알맞은 주어를 고르세요.\n___ is sunny today.",
            "options": [
              "They",
              "It",
              "He",
              "We"
            ],
            "answer": 1,
            "explain": "날씨의 주어는 비인칭 It이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today.",
            "options": [
              "near",
              "far",
              "Wednesday",
              "three"
            ],
            "answer": 2,
            "explain": "near/far/three는 요일이 아니에요. 요일을 말하므로 Wednesday가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ now. Flowers are blooming!",
            "options": [
              "Monday",
              "dark",
              "o'clock",
              "spring"
            ],
            "answer": 3,
            "explain": "꽃이 피는 계절이므로 spring이에요. It is spring now.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ to the park.",
            "options": [
              "1 km",
              "Monday",
              "dark",
              "rainy"
            ],
            "answer": 0,
            "explain": "거리를 말하므로 1 km가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today. I can't see the sun.",
            "options": [
              "eight",
              "cloudy",
              "spring",
              "near"
            ],
            "answer": 1,
            "explain": "해가 안 보이므로 흐린 날씨 cloudy가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ o'clock.",
            "options": [
              "Monday",
              "dark",
              "five",
              "far"
            ],
            "answer": 2,
            "explain": "시각을 말하므로 숫자 five가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today. Tomorrow is Sunday!",
            "options": [
              "near",
              "rainy",
              "three",
              "Saturday"
            ],
            "answer": 3,
            "explain": "내일이 일요일이므로 오늘은 토요일이에요. Saturday가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 주어를 고르세요.\n___ is dark in the room.",
            "options": [
              "It",
              "She",
              "He",
              "You"
            ],
            "answer": 0,
            "explain": "명암의 주어는 비인칭 It이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ now. It is cold and snowy.",
            "options": [
              "April",
              "winter",
              "dark",
              "far"
            ],
            "answer": 1,
            "explain": "춥고 눈이 오므로 계절은 winter예요. It is winter now.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ in the room.",
            "options": [
              "Monday",
              "seven",
              "bright",
              "far"
            ],
            "answer": 2,
            "explain": "명암을 말하므로 bright가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWhat is the date? It is ___ today.",
            "options": [
              "far",
              "dark",
              "near",
              "April 9th"
            ],
            "answer": 3,
            "explain": "날짜를 물었으므로 It is April 9th today.로 답해요."
          },
          {
            "q": "빈칸에 알맞은 주어를 고르세요.\n___ is snowy today.",
            "options": [
              "It",
              "They",
              "We",
              "He"
            ],
            "answer": 0,
            "explain": "날씨의 주어는 비인칭 It이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ now. Look at the clock!",
            "options": [
              "Sunday",
              "three o'clock",
              "dark",
              "far"
            ],
            "answer": 1,
            "explain": "시계를 보라고 했으므로 시각 three o'clock이 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today. Yesterday was Saturday.",
            "options": [
              "far",
              "dark",
              "Sunday",
              "near"
            ],
            "answer": 2,
            "explain": "어제가 토요일이므로 오늘은 일요일 Sunday예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ now. It is very hot!",
            "options": [
              "Monday",
              "dark",
              "near",
              "summer"
            ],
            "answer": 3,
            "explain": "매우 더우므로 계절은 summer예요. It is summer now.로 써요."
          },
          {
            "q": "빈칸에 알맞은 주어를 고르세요.\n___ is far from here to school.",
            "options": [
              "It",
              "He",
              "She",
              "They"
            ],
            "answer": 0,
            "explain": "거리의 주어는 비인칭 It이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today. Merry Christmas!",
            "options": [
              "dark",
              "December 25th",
              "near",
              "seven"
            ],
            "answer": 1,
            "explain": "크리스마스이므로 날짜 December 25th가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ now. The leaves are red and yellow.",
            "options": [
              "Monday",
              "dark",
              "fall",
              "far"
            ],
            "answer": 2,
            "explain": "잎이 붉고 노랗게 물들었으므로 계절은 fall이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ o'clock.",
            "options": [
              "Monday",
              "dark",
              "near",
              "ten"
            ],
            "answer": 3,
            "explain": "시각을 말하므로 숫자 ten이 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt is ___ today. Yesterday was Monday.",
            "options": [
              "Tuesday",
              "dark",
              "far",
              "near"
            ],
            "answer": 0,
            "explain": "어제가 월요일이므로 오늘은 화요일 Tuesday예요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ o'clock now.",
            "ko": "지금은 7시다.",
            "answers": [
              "seven"
            ],
            "explain": "시각을 나타내며 주어 It은 비인칭 주어예요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ today.",
            "ko": "오늘은 월요일이다.",
            "answers": [
              "Monday"
            ],
            "explain": "요일을 나타낼 때 It is Monday today.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ from here.",
            "ko": "여기서 멀다.",
            "answers": [
              "far"
            ],
            "explain": "거리를 나타낼 때 It is far from here.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ outside.",
            "ko": "밖은 어둡다.",
            "answers": [
              "dark"
            ],
            "explain": "명암을 나타낼 때 It is dark outside.로 써요."
          },
          {
            "q": "빈칸에 알맞은 주어를 쓰세요.\n___ is rainy today.",
            "ko": "오늘은 비가 온다.",
            "answers": [
              "It"
            ],
            "explain": "날씨의 주어는 뜻 없는 비인칭 It이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ now.",
            "ko": "지금은 겨울이다.",
            "answers": [
              "winter"
            ],
            "explain": "계절을 나타낼 때 It is winter now.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ in the room.",
            "ko": "방 안이 밝다.",
            "answers": [
              "bright"
            ],
            "explain": "명암을 나타낼 때 It is bright in the room.으로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ today.",
            "ko": "오늘은 흐리다.",
            "answers": [
              "cloudy"
            ],
            "explain": "날씨를 나타낼 때 It is cloudy today.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ now.",
            "ko": "지금은 여름이다.",
            "answers": [
              "summer"
            ],
            "explain": "계절을 나타낼 때 It is summer now.로 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt is ___ o'clock.",
            "ko": "지금은 10시다.",
            "answers": [
              "ten"
            ],
            "explain": "시각을 나타내며 주어 It은 비인칭 주어예요."
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
            "q": "빈칸에 알맞은 말을 고르세요.\nThe cake looks ___.",
            "options": [
              "sweet",
              "sweetly",
              "sweetness",
              "to sweet"
            ],
            "answer": 0,
            "explain": "감각동사 look 뒤에는 형용사 sweet가 와요. 부사 sweetly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe music sounds ___.",
            "options": [
              "nicely",
              "nice",
              "to nice",
              "nicing"
            ],
            "answer": 1,
            "explain": "감각동사 sound 뒤에는 형용사 nice가 와요. 부사 nicely는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI feel ___.",
            "options": [
              "happily",
              "happiness",
              "happy",
              "to happy"
            ],
            "answer": 2,
            "explain": "감각동사 feel 뒤에는 형용사 happy가 와요. 부사 happily는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThis juice tastes ___.",
            "options": [
              "sweetly",
              "to sweet",
              "sweetness",
              "sweet"
            ],
            "answer": 3,
            "explain": "감각동사 taste 뒤에는 형용사 sweet가 와요. 부사 sweetly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe bread smells ___.",
            "options": [
              "fresh",
              "freshly",
              "freshness",
              "to fresh"
            ],
            "answer": 0,
            "explain": "감각동사 smell 뒤에는 형용사 fresh가 와요. 부사 freshly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe blanket feels ___.",
            "options": [
              "softly",
              "soft",
              "softness",
              "to soft"
            ],
            "answer": 1,
            "explain": "감각동사 feel 뒤에는 형용사 soft가 와요. 부사 softly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe music sounds ___.",
            "options": [
              "loudly",
              "to loud",
              "loud",
              "loudness"
            ],
            "answer": 2,
            "explain": "감각동사 sound 뒤에는 형용사 loud가 와요. 부사 loudly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nYou look ___.",
            "options": [
              "sadly",
              "sadness",
              "to sad",
              "sad"
            ],
            "answer": 3,
            "explain": "감각동사 look 뒤에는 형용사 sad가 와요. 부사 sadly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThis towel feels ___.",
            "options": [
              "warm",
              "warmly",
              "warmth",
              "to warm"
            ],
            "answer": 0,
            "explain": "감각동사 feel 뒤에는 형용사 warm이 와요. 부사 warmly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe flower smells ___.",
            "options": [
              "goodly",
              "good",
              "to good",
              "goodness"
            ],
            "answer": 1,
            "explain": "감각동사 smell 뒤에는 형용사 good이 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe soup tastes ___.",
            "options": [
              "saltily",
              "to salty",
              "salty",
              "saltiness"
            ],
            "answer": 2,
            "explain": "감각동사 taste 뒤에는 형용사 salty가 와요. 부사 saltily는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe dog looks ___.",
            "options": [
              "cutely",
              "cuteness",
              "to cute",
              "cute"
            ],
            "answer": 3,
            "explain": "감각동사 look 뒤에는 형용사 cute가 와요. 부사 cutely는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe soup looks ___.",
            "options": [
              "hot",
              "hotly",
              "hotness",
              "to hot"
            ],
            "answer": 0,
            "explain": "감각동사 look 뒤에는 형용사 hot이 와요. 부사 hotly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe movie looks ___.",
            "options": [
              "interestingly",
              "interesting",
              "to interest",
              "interestingness"
            ],
            "answer": 1,
            "explain": "감각동사 look 뒤에는 형용사 interesting이 와요. 부사 interestingly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nYour room looks ___.",
            "options": [
              "cleanly",
              "to clean",
              "clean",
              "cleanness"
            ],
            "answer": 2,
            "explain": "감각동사 look 뒤에는 형용사 clean이 와요. 부사 cleanly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe teacher looks ___.",
            "options": [
              "tiredly",
              "tiredness",
              "to tired",
              "tired"
            ],
            "answer": 3,
            "explain": "감각동사 look 뒤에는 형용사 tired가 와요. 부사 tiredly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThis lemon tastes ___.",
            "options": [
              "sour",
              "sourly",
              "sourness",
              "to sour"
            ],
            "answer": 0,
            "explain": "감각동사 taste 뒤에는 형용사 sour가 와요. 부사 sourly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe plan sounds ___.",
            "options": [
              "dangerously",
              "dangerous",
              "to danger",
              "dangerousness"
            ],
            "answer": 1,
            "explain": "감각동사 sound 뒤에는 형용사 dangerous가 와요. 부사 dangerously는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThat fish smells ___.",
            "options": [
              "strangely",
              "to strange",
              "strange",
              "strangeness"
            ],
            "answer": 2,
            "explain": "감각동사 smell 뒤에는 형용사 strange가 와요. 부사 strangely는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nYou look ___ today.",
            "options": [
              "coolly",
              "coolness",
              "to cool",
              "cool"
            ],
            "answer": 3,
            "explain": "감각동사 look 뒤에는 형용사 cool이 와요. 부사 coolly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe news sounds ___.",
            "options": [
              "surprising",
              "surprisingly",
              "to surprise",
              "surprisingness"
            ],
            "answer": 0,
            "explain": "감각동사 sound 뒤에는 형용사 surprising이 와요. 부사 surprisingly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThis ice cream tastes ___.",
            "options": [
              "creamily",
              "creamy",
              "to cream",
              "creaminess"
            ],
            "answer": 1,
            "explain": "감각동사 taste 뒤에는 형용사 creamy가 와요. 부사 creamily는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThis pizza tastes ___.",
            "options": [
              "deliciously",
              "to delicious",
              "delicious",
              "deliciousness"
            ],
            "answer": 2,
            "explain": "감각동사 taste 뒤에는 형용사 delicious가 와요. 부사 deliciously는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe water feels ___.",
            "options": [
              "coldly",
              "coldness",
              "to cold",
              "cold"
            ],
            "answer": 3,
            "explain": "감각동사 feel 뒤에는 형용사 cold가 와요. 부사 coldly는 안 돼요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe cake smells ___.",
            "options": [
              "sweetly",
              "to sweet",
              "sweet",
              "sweetness"
            ],
            "answer": 2,
            "explain": "감각동사 smell 뒤에는 형용사 sweet가 와요. 부사 sweetly는 안 돼요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThis pizza tastes ___.",
            "ko": "이 피자는 맛있는 맛이 난다.",
            "answers": [
              "delicious"
            ],
            "explain": "감각동사 taste 뒤에는 형용사 delicious가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe music sounds ___.",
            "ko": "그 음악은 좋게 들린다.",
            "answers": [
              "nice",
              "good"
            ],
            "explain": "감각동사 sound 뒤에는 형용사 nice(또는 good)가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nI feel ___.",
            "ko": "나는 행복하다.",
            "answers": [
              "happy"
            ],
            "explain": "감각동사 feel 뒤에는 형용사 happy가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe cake looks ___.",
            "ko": "그 케이크는 달콤해 보인다.",
            "answers": [
              "sweet"
            ],
            "explain": "감각동사 look 뒤에는 형용사 sweet가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe flower smells ___.",
            "ko": "그 꽃은 좋은 냄새가 난다.",
            "answers": [
              "good",
              "nice"
            ],
            "explain": "감각동사 smell 뒤에는 형용사 good(또는 nice)이 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe blanket feels ___.",
            "ko": "그 담요는 부드럽게 느껴진다.",
            "answers": [
              "soft"
            ],
            "explain": "감각동사 feel 뒤에는 형용사 soft가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe music sounds ___.",
            "ko": "그 음악은 시끄럽게 들린다.",
            "answers": [
              "loud"
            ],
            "explain": "감각동사 sound 뒤에는 형용사 loud가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nYou look ___.",
            "ko": "너는 슬퍼 보인다.",
            "answers": [
              "sad"
            ],
            "explain": "감각동사 look 뒤에는 형용사 sad가 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThis towel feels ___.",
            "ko": "이 수건은 따뜻하게 느껴진다.",
            "answers": [
              "warm"
            ],
            "explain": "감각동사 feel 뒤에는 형용사 warm이 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe bread smells ___.",
            "ko": "그 빵은 신선한 냄새가 난다.",
            "answers": [
              "fresh"
            ],
            "explain": "감각동사 smell 뒤에는 형용사 fresh가 와요."
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
            "q": "빈칸에 알맞은 말을 고르세요.\nI enjoy ___ books.",
            "options": [
              "reading",
              "read",
              "to read",
              "reads"
            ],
            "answer": 0,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe finished ___ her homework.",
            "options": [
              "do",
              "doing",
              "to do",
              "does"
            ],
            "answer": 1,
            "explain": "finish 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe practice ___ soccer.",
            "options": [
              "play",
              "to play",
              "playing",
              "plays"
            ],
            "answer": 2,
            "explain": "practice 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe keeps ___ questions.",
            "options": [
              "ask",
              "to ask",
              "asks",
              "asking"
            ],
            "answer": 3,
            "explain": "keep 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nDo you mind ___ the window?",
            "options": [
              "closing",
              "close",
              "to close",
              "closes"
            ],
            "answer": 0,
            "explain": "mind 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey enjoy ___ in the pool.",
            "options": [
              "swim",
              "swimming",
              "to swim",
              "swims"
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMy sister finished ___ the kitchen.",
            "options": [
              "clean",
              "to clean",
              "cleaning",
              "cleans"
            ],
            "answer": 2,
            "explain": "finish 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI avoid ___ fast food.",
            "options": [
              "eat",
              "to eat",
              "eats",
              "eating"
            ],
            "answer": 3,
            "explain": "avoid 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe practice ___ every day.",
            "options": [
              "dancing",
              "dance",
              "to dance",
              "dances"
            ],
            "answer": 0,
            "explain": "practice 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe enjoys ___ his bike.",
            "options": [
              "ride",
              "riding",
              "to ride",
              "rides"
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe keeps ___ loudly.",
            "options": [
              "talk",
              "to talk",
              "talking",
              "talks"
            ],
            "answer": 2,
            "explain": "keep 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey finished ___ the report.",
            "options": [
              "write",
              "to write",
              "writes",
              "writing"
            ],
            "answer": 3,
            "explain": "finish 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWould you mind ___ the piano?",
            "options": [
              "playing",
              "play",
              "to play",
              "plays"
            ],
            "answer": 0,
            "explain": "mind 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI enjoy ___ pictures.",
            "options": [
              "take",
              "taking",
              "to take",
              "takes"
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe avoids ___ up late.",
            "options": [
              "get",
              "to get",
              "getting",
              "gets"
            ],
            "answer": 2,
            "explain": "avoid 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe keep ___ in the park.",
            "options": [
              "run",
              "to run",
              "runs",
              "running"
            ],
            "answer": 3,
            "explain": "keep 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe practices ___ the violin.",
            "options": [
              "playing",
              "play",
              "to play",
              "plays"
            ],
            "answer": 0,
            "explain": "practice 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI enjoy ___ food for my family.",
            "options": [
              "cook",
              "cooking",
              "to cook",
              "cooks"
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey keep ___ songs.",
            "options": [
              "sing",
              "to sing",
              "singing",
              "sings"
            ],
            "answer": 2,
            "explain": "keep 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe finished ___ the dishes.",
            "options": [
              "wash",
              "to wash",
              "washes",
              "washing"
            ],
            "answer": 3,
            "explain": "finish 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI enjoy ___ movies.",
            "options": [
              "watching",
              "watch",
              "to watch",
              "watches"
            ],
            "answer": 0,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI enjoy ___ with my dog.",
            "options": [
              "play",
              "playing",
              "to play",
              "plays"
            ],
            "answer": 1,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe enjoys ___ storybooks.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "answer": 2,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe avoid ___ up late.",
            "options": [
              "get",
              "to get",
              "gets",
              "getting"
            ],
            "answer": 3,
            "explain": "avoid 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey enjoy ___ in the mountains.",
            "options": [
              "hike",
              "to hike",
              "hikes",
              "hiking"
            ],
            "answer": 3,
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nI enjoy ___ books.",
            "ko": "나는 책 읽는 것을 즐긴다.",
            "answers": [
              "reading"
            ],
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nShe finished ___ her homework.",
            "ko": "그녀는 숙제하는 것을 끝냈다.",
            "answers": [
              "doing"
            ],
            "explain": "finish 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nWe practice ___ soccer.",
            "ko": "우리는 축구하는 것을 연습한다.",
            "answers": [
              "playing"
            ],
            "explain": "practice 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nThey enjoy ___ in the pool.",
            "ko": "그들은 수영장에서 수영하는 것을 즐긴다.",
            "answers": [
              "swimming"
            ],
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nI avoid ___ fast food.",
            "ko": "나는 패스트푸드 먹는 것을 피한다.",
            "answers": [
              "eating"
            ],
            "explain": "avoid 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nMy sister finished ___ the kitchen.",
            "ko": "내 여동생은 부엌 청소하는 것을 끝냈다.",
            "answers": [
              "cleaning"
            ],
            "explain": "finish 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nWe keep ___ in the park.",
            "ko": "우리는 공원에서 계속 달린다.",
            "answers": [
              "running"
            ],
            "explain": "keep 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nI enjoy ___ food for my family.",
            "ko": "나는 가족을 위해 요리하는 것을 즐긴다.",
            "answers": [
              "cooking"
            ],
            "explain": "enjoy 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nThey keep ___ songs.",
            "ko": "그들은 계속 노래를 부른다.",
            "answers": [
              "singing"
            ],
            "explain": "keep 뒤에는 동명사(-ing)가 와요."
          },
          {
            "q": "빈칸에 알맞은 동명사를 쓰세요.\nDo you mind ___ the window?",
            "ko": "창문 닫는 것을 꺼리나요?",
            "answers": [
              "closing"
            ],
            "explain": "mind 뒤에는 동명사(-ing)가 와요."
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
            "q": "빈칸에 알맞은 비교급을 고르세요.\nTom is ___ than Sam.",
            "options": [
              "taller",
              "more taller",
              "taller then",
              "tallest"
            ],
            "answer": 0,
            "explain": "짧은 말 tall은 -er을 붙여 taller than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis book is ___ than that one.",
            "options": [
              "interestinger",
              "more interesting",
              "more interesting then",
              "most interesting"
            ],
            "answer": 1,
            "explain": "긴 말 interesting은 more를 붙여 more interesting than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nMy bag is ___ than your bag.",
            "options": [
              "more bigger",
              "biggest",
              "bigger",
              "bigger then"
            ],
            "answer": 2,
            "explain": "big은 g를 하나 더 쓰고 -er, bigger than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nA cheetah is ___ than a dog.",
            "options": [
              "more faster",
              "fastest",
              "faster then",
              "faster"
            ],
            "answer": 3,
            "explain": "짧은 말 fast는 -er을 붙여 faster than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nHer English is ___ than my English.",
            "options": [
              "better",
              "gooder",
              "more better",
              "best"
            ],
            "answer": 0,
            "explain": "good은 불규칙 비교급 better than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis shirt is ___ than that one.",
            "options": [
              "more cheaper",
              "cheaper",
              "cheapest",
              "cheaper then"
            ],
            "answer": 1,
            "explain": "짧은 말 cheap은 -er을 붙여 cheaper than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nToday is ___ than yesterday.",
            "options": [
              "more hotter",
              "hottest",
              "hotter",
              "hot"
            ],
            "answer": 2,
            "explain": "hot은 t를 하나 더 쓰고 -er, hotter than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis box is ___ than that box.",
            "options": [
              "more heavier",
              "heaviest",
              "heavy",
              "heavier"
            ],
            "answer": 3,
            "explain": "heavy는 y를 i로 바꾸고 -er, heavier than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nSpring is ___ than winter.",
            "options": [
              "warmer",
              "more warmer",
              "warmest",
              "warm"
            ],
            "answer": 0,
            "explain": "짧은 말 warm은 -er을 붙여 warmer than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis test is ___ than the last one.",
            "options": [
              "difficulter",
              "more difficult",
              "most difficult",
              "more difficult then"
            ],
            "answer": 1,
            "explain": "긴 말 difficult는 more를 붙여 more difficult than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nToday's weather is ___ than yesterday's.",
            "options": [
              "badder",
              "more worse",
              "worse",
              "worst"
            ],
            "answer": 2,
            "explain": "bad는 불규칙 비교급 worse than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nI have ___ books than you.",
            "options": [
              "manier",
              "most",
              "much",
              "more"
            ],
            "answer": 3,
            "explain": "many는 불규칙 비교급 more than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis flower is ___ than that one.",
            "options": [
              "prettier",
              "more prettier",
              "prettiest",
              "pretty"
            ],
            "answer": 0,
            "explain": "pretty는 y를 i로 바꾸고 -er, prettier than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThe Han River is ___ than this street.",
            "options": [
              "more longer",
              "longer",
              "longest",
              "longer then"
            ],
            "answer": 1,
            "explain": "짧은 말 long은 -er을 붙여 longer than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nMy cousin is ___ than me.",
            "options": [
              "more older",
              "oldest",
              "older",
              "old"
            ],
            "answer": 2,
            "explain": "짧은 말 old는 -er을 붙여 older than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nA phone is ___ than a watch.",
            "options": [
              "usefuler",
              "most useful",
              "more useful then",
              "more useful"
            ],
            "answer": 3,
            "explain": "긴 말 useful은 more를 붙여 more useful than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis mountain is ___ than that mountain.",
            "options": [
              "higher",
              "more higher",
              "highest",
              "high"
            ],
            "answer": 0,
            "explain": "짧은 말 high는 -er을 붙여 higher than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nShe walks ___ than me.",
            "options": [
              "more faster",
              "faster",
              "fastest",
              "faster then"
            ],
            "answer": 1,
            "explain": "부사 fast도 -er을 붙여 faster than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis problem is ___ than that problem.",
            "options": [
              "more easier",
              "easiest",
              "easier",
              "easier then"
            ],
            "answer": 2,
            "explain": "easy는 y를 i로 바꾸고 -er, easier than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nSeoul is ___ than my town.",
            "options": [
              "more bigger",
              "biggest",
              "big",
              "bigger"
            ],
            "answer": 3,
            "explain": "big은 g를 하나 더 쓰고 -er, bigger than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis puzzle is ___ than that puzzle.",
            "options": [
              "harder",
              "more harder",
              "hardest",
              "hard"
            ],
            "answer": 0,
            "explain": "짧은 말 hard는 -er을 붙여 harder than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nMy room is ___ than your room.",
            "options": [
              "more smaller",
              "smaller",
              "smallest",
              "smaller then"
            ],
            "answer": 1,
            "explain": "짧은 말 small은 -er을 붙여 smaller than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis lake is ___ than that pond.",
            "options": [
              "more deeper",
              "deepest",
              "deeper",
              "deep"
            ],
            "answer": 2,
            "explain": "짧은 말 deep은 -er을 붙여 deeper than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis sweater is ___ than that sweater.",
            "options": [
              "more warmer",
              "warmest",
              "warm",
              "warmer"
            ],
            "answer": 3,
            "explain": "짧은 말 warm은 -er을 붙여 warmer than."
          },
          {
            "q": "빈칸에 알맞은 비교급을 고르세요.\nThis story is ___ than that story.",
            "options": [
              "more interesting",
              "interestinger",
              "most interesting",
              "more interesting then"
            ],
            "answer": 0,
            "explain": "긴 말 interesting은 more를 붙여 more interesting than."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nTom is ___ than Sam.",
            "ko": "톰은 샘보다 키가 더 크다.",
            "answers": [
              "taller"
            ],
            "explain": "짧은 말 tall은 -er을 붙여 taller."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nMy bag is ___ than your bag.",
            "ko": "내 가방은 네 가방보다 더 크다.",
            "answers": [
              "bigger"
            ],
            "explain": "big은 g를 하나 더 쓰고 -er, bigger."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nA cheetah is ___ than a dog.",
            "ko": "치타는 개보다 더 빠르다.",
            "answers": [
              "faster"
            ],
            "explain": "짧은 말 fast는 -er을 붙여 faster."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nHer English is ___ than my English.",
            "ko": "그녀의 영어는 내 영어보다 더 낫다.",
            "answers": [
              "better"
            ],
            "explain": "good은 불규칙 비교급 better."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThis shirt is ___ than that one.",
            "ko": "이 셔츠가 저것보다 더 싸다.",
            "answers": [
              "cheaper"
            ],
            "explain": "짧은 말 cheap은 -er을 붙여 cheaper."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nToday is ___ than yesterday.",
            "ko": "오늘이 어제보다 더 덥다.",
            "answers": [
              "hotter"
            ],
            "explain": "hot은 t를 하나 더 쓰고 -er, hotter."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThis test is ___ than the last one.",
            "ko": "이번 시험이 지난번 시험보다 더 어렵다.",
            "answers": [
              "more difficult"
            ],
            "explain": "긴 말 difficult는 more를 붙여 more difficult."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nToday's weather is ___ than yesterday's.",
            "ko": "오늘 날씨가 어제보다 더 나쁘다.",
            "answers": [
              "worse"
            ],
            "explain": "bad는 불규칙 비교급 worse."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThis flower is ___ than that one.",
            "ko": "이 꽃이 저것보다 더 예쁘다.",
            "answers": [
              "prettier"
            ],
            "explain": "pretty는 y를 i로 바꾸고 -er, prettier."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nA phone is ___ than a watch.",
            "ko": "전화기가 시계보다 더 유용하다.",
            "answers": [
              "more useful"
            ],
            "explain": "긴 말 useful은 more를 붙여 more useful."
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
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen the bell ___, the children smile.",
            "options": [
              "rings",
              "ring",
              "ringing",
              "rang"
            ],
            "answer": 0,
            "explain": "현재시제이고 주어가 3인칭 단수이므로 rings."
          },
          {
            "q": "알맞은 접속사를 고르세요. (나는 한가할 때 만화책을 읽는다.)\nI read comics ___ I am free.",
            "options": [
              "while",
              "when",
              "because",
              "that"
            ],
            "answer": 1,
            "explain": "'~할 때'라는 뜻의 접속사는 when."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen I ___ young, I liked drawing.",
            "options": [
              "am",
              "is",
              "was",
              "were"
            ],
            "answer": 2,
            "explain": "과거의 일이고 주어가 I이므로 was."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen she ___, we will start the party.",
            "options": [
              "arrive",
              "arrived",
              "will arrive",
              "arrives"
            ],
            "answer": 3,
            "explain": "시간 부사절에서는 미래도 현재시제로 쓰므로 arrives."
          },
          {
            "q": "알맞은 접속사를 고르세요. (영화가 시작할 때, 우리는 이야기를 멈춘다.)\nWe stop talking ___ the movie starts.",
            "options": [
              "when",
              "while",
              "because",
              "that"
            ],
            "answer": 0,
            "explain": "'~할 때'라는 뜻의 접속사는 when."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen it ___, children make a snowman.",
            "options": [
              "snow",
              "snows",
              "snowed",
              "snowing"
            ],
            "answer": 1,
            "explain": "현재시제이고 주어 it이므로 snows."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen he ___ home, he does his homework.",
            "options": [
              "get",
              "getting",
              "gets",
              "got"
            ],
            "answer": 2,
            "explain": "현재시제이고 주어가 3인칭 단수이므로 gets."
          },
          {
            "q": "알맞은 접속사를 고르세요. (우리가 숙제를 끝낼 때, 우리는 TV를 본다.)\n___ we finish our homework, we watch TV.",
            "options": [
              "While",
              "Because",
              "That",
              "When"
            ],
            "answer": 3,
            "explain": "'~할 때'라는 뜻의 접속사는 When."
          },
          {
            "q": "알맞은 접속사를 고르세요. (나는 게임에서 이길 때 신이 난다.)\nI feel excited ___ I win a game.",
            "options": [
              "when",
              "while",
              "because",
              "that"
            ],
            "answer": 0,
            "explain": "'~할 때'라는 뜻의 접속사는 when."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI went to Jeju when I ___ seven.",
            "options": [
              "am",
              "was",
              "were",
              "is"
            ],
            "answer": 1,
            "explain": "과거의 일이고 주어가 I이므로 was."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen I grow up, I ___ a doctor.",
            "options": [
              "be",
              "am being",
              "will be",
              "was"
            ],
            "answer": 2,
            "explain": "when절은 현재시제, 주절은 미래이므로 will be."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen she ___ home, her dog barked.",
            "options": [
              "arrives",
              "arrive",
              "arriving",
              "arrived"
            ],
            "answer": 3,
            "explain": "과거의 일이므로 arrived."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen the sun ___, the sky turns red.",
            "options": [
              "sets",
              "set",
              "setting",
              "sat"
            ],
            "answer": 0,
            "explain": "현재시제이고 주어 the sun이므로 sets."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen vacation ___, we go on a trip.",
            "options": [
              "start",
              "starts",
              "started",
              "starting"
            ],
            "answer": 1,
            "explain": "현재시제이고 주어가 단수이므로 starts."
          },
          {
            "q": "알맞은 접속사를 고르세요. (내가 실수할 때, 나는 다시 시도한다.)\n___ I make a mistake, I try again.",
            "options": [
              "Because",
              "While",
              "When",
              "That"
            ],
            "answer": 2,
            "explain": "'~할 때'라는 뜻의 접속사는 When."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen I ___ to school, I take the bus.",
            "options": [
              "goes",
              "going",
              "went",
              "go"
            ],
            "answer": 3,
            "explain": "현재시제이고 주어가 I이므로 go."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen she sings, everyone ___ quiet.",
            "options": [
              "becomes",
              "become",
              "became",
              "becoming"
            ],
            "answer": 0,
            "explain": "everyone은 단수 취급, 현재시제이므로 becomes."
          },
          {
            "q": "알맞은 접속사를 고르세요. (그는 피곤할 때 휴식을 취한다.)\nHe takes a rest ___ he feels tired.",
            "options": [
              "while",
              "when",
              "that",
              "because"
            ],
            "answer": 1,
            "explain": "'~할 때'라는 뜻의 접속사는 when."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen we ___ our homework, we watch TV.",
            "options": [
              "finishes",
              "finishing",
              "finish",
              "finished"
            ],
            "answer": 2,
            "explain": "현재시제이고 주어가 we이므로 finish."
          },
          {
            "q": "알맞은 접속사를 고르세요. (날씨가 따뜻할 때, 나는 밖에서 논다.)\n___ the weather is warm, I play outside.",
            "options": [
              "While",
              "Because",
              "That",
              "When"
            ],
            "answer": 3,
            "explain": "'~할 때'라는 뜻의 접속사는 When."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen I ___ home, I wash my hands.",
            "options": [
              "get",
              "gets",
              "got",
              "getting"
            ],
            "answer": 0,
            "explain": "현재시제이고 주어가 I이므로 get."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nI usually smile when I ___ my friends.",
            "options": [
              "sees",
              "see",
              "saw",
              "seeing"
            ],
            "answer": 1,
            "explain": "현재시제이고 주어가 I이므로 see."
          },
          {
            "q": "알맞은 접속사를 고르세요. (밤이 늦을 때, 나는 졸리다.)\nI feel sleepy ___ it is late at night.",
            "options": [
              "while",
              "because",
              "when",
              "that"
            ],
            "answer": 2,
            "explain": "'~할 때'라는 뜻의 접속사는 when."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen they ___ young, they played every day.",
            "options": [
              "was",
              "is",
              "are",
              "were"
            ],
            "answer": 3,
            "explain": "과거의 일이고 주어가 they이므로 were."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWhen lunch time ___, we ate together.",
            "options": [
              "come",
              "comes",
              "came",
              "coming"
            ],
            "answer": 2,
            "explain": "과거의 일이므로 came."
          }
        ],
        "sa": [
          {
            "q": "알맞은 접속사를 쓰세요.\nI read comics ___ I am free.",
            "ko": "나는 한가할 때 만화책을 읽는다.",
            "answers": [
              "when"
            ],
            "explain": "'~할 때'라는 뜻의 접속사는 when."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen she ___, we will start the party.",
            "ko": "그녀가 도착할 때, 우리는 파티를 시작할 것이다.",
            "answers": [
              "arrives"
            ],
            "explain": "시간 부사절에서는 미래도 현재시제로 쓰므로 arrives."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen it ___, children make a snowman.",
            "ko": "눈이 올 때, 아이들은 눈사람을 만든다.",
            "answers": [
              "snows"
            ],
            "explain": "현재시제이고 주어 it이므로 snows."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen I ___ young, I liked drawing.",
            "ko": "내가 어렸을 때, 나는 그림 그리기를 좋아했다.",
            "answers": [
              "was"
            ],
            "explain": "과거의 일이고 주어가 I이므로 was."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen the sun ___, the sky turns red.",
            "ko": "해가 질 때, 하늘이 붉게 변한다.",
            "answers": [
              "sets"
            ],
            "explain": "현재시제이고 주어 the sun이므로 sets."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen I ___ to school, I take the bus.",
            "ko": "내가 학교에 갈 때, 나는 버스를 탄다.",
            "answers": [
              "go"
            ],
            "explain": "현재시제이고 주어가 I이므로 go."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen vacation ___, we go on a trip.",
            "ko": "방학이 시작될 때, 우리는 여행을 간다.",
            "answers": [
              "starts"
            ],
            "explain": "현재시제이고 주어가 단수이므로 starts."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI usually smile when I ___ my friends.",
            "ko": "나는 친구들을 볼 때 보통 웃는다.",
            "answers": [
              "see"
            ],
            "explain": "현재시제이고 주어가 I이므로 see."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen she ___ home, her dog barked.",
            "ko": "그녀가 집에 도착했을 때, 그녀의 강아지가 짖었다.",
            "answers": [
              "arrived"
            ],
            "explain": "과거의 일이므로 arrived."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWhen I grow up, I ___ a doctor.",
            "ko": "내가 자라면, 나는 의사가 될 것이다.",
            "answers": [
              "will be"
            ],
            "explain": "when절은 현재, 주절은 미래이므로 will be."
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
            "q": "빈칸에 알맞은 말을 고르세요.\nShe ___ me a gift.",
            "options": [
              "gave",
              "gives to",
              "give",
              "gave to"
            ],
            "answer": 0,
            "explain": "수여동사 give는 '동사+사람+사물' 순서로 써요. gave me a gift."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe ___ us a package.",
            "options": [
              "send",
              "sent",
              "sends to",
              "sent to"
            ],
            "answer": 1,
            "explain": "주어가 He이고 4형식이므로 sent us a package. (send는 3인칭 단수 현재면 sends)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI ___ my mom my report card.",
            "options": [
              "show to",
              "shows",
              "showed",
              "showed to"
            ],
            "answer": 2,
            "explain": "4형식은 '동사+사람+사물' 순서이고 전치사를 쓰지 않아요. showed my mom my report card."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMs. Park ___ us music.",
            "options": [
              "teach",
              "teaches to",
              "teach to",
              "teaches"
            ],
            "answer": 3,
            "explain": "주어가 Ms. Park(3인칭 단수)이므로 teaches us music."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMy mom ___ me shoes.",
            "options": [
              "bought",
              "buy",
              "buys to",
              "bought to"
            ],
            "answer": 0,
            "explain": "주어가 My mom이고 4형식이므로 bought me shoes. (buy는 3인칭 단수 현재면 buys)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe ___ me a secret.",
            "options": [
              "tell",
              "told",
              "tells to",
              "told to"
            ],
            "answer": 1,
            "explain": "주어가 He이고 4형식이므로 told me a secret. (tell은 3인칭 단수 현재면 tells)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMy sister ___ me a cake.",
            "options": [
              "make",
              "makes to",
              "made",
              "made to"
            ],
            "answer": 2,
            "explain": "주어가 My sister이고 4형식이므로 made me a cake. (make는 3인칭 단수 현재면 makes)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe gave ___.",
            "options": [
              "his phone number me",
              "for me his phone number",
              "to me his phone number",
              "me his phone number"
            ],
            "answer": 3,
            "explain": "4형식은 '동사+사람+사물' 순서. gave me his phone number."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe gave a gift ___ me.",
            "options": [
              "to",
              "for",
              "of",
              "at"
            ],
            "answer": 0,
            "explain": "give는 3형식으로 바꾸면 전치사 to를 써요. a gift to me."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMy mom bought a cake ___ me.",
            "options": [
              "to",
              "for",
              "with",
              "of"
            ],
            "answer": 1,
            "explain": "buy는 3형식으로 바꾸면 전치사 for를 써요. a cake for me."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI ___ him a ticket.",
            "options": [
              "get to",
              "gets",
              "got",
              "got to"
            ],
            "answer": 2,
            "explain": "4형식은 '동사+사람+사물' 순서이고 전치사를 쓰지 않아요. got him a ticket."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nGrandma ___ us rice cakes.",
            "options": [
              "make",
              "makes to",
              "make to",
              "made"
            ],
            "answer": 3,
            "explain": "주어가 Grandma이고 4형식이므로 made us rice cakes. (make는 3인칭 단수 현재면 makes)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe ___ me an email.",
            "options": [
              "sent",
              "send",
              "sends to",
              "sent to"
            ],
            "answer": 0,
            "explain": "주어가 She이고 4형식이므로 sent me an email. (send는 3인칭 단수 현재면 sends)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe ___ us his new car.",
            "options": [
              "show",
              "showed",
              "shows to",
              "show to"
            ],
            "answer": 1,
            "explain": "주어가 He이고 4형식이므로 showed us his new car. (show는 3인칭 단수 현재면 shows)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe sent a letter ___ his parents.",
            "options": [
              "for",
              "of",
              "to",
              "at"
            ],
            "answer": 2,
            "explain": "send는 3형식으로 바꾸면 전치사 to를 써요. a letter to his parents."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe made dinner ___ us.",
            "options": [
              "to",
              "with",
              "of",
              "for"
            ],
            "answer": 3,
            "explain": "make는 3형식으로 바꾸면 전치사 for를 써요. dinner for us."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMr. Kim ___ me math.",
            "options": [
              "teaches",
              "teach",
              "teach to",
              "teaches to"
            ],
            "answer": 0,
            "explain": "주어가 Mr. Kim(3인칭 단수)이므로 teaches me math."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI ___ him a gift.",
            "options": [
              "give to",
              "gave",
              "gives to",
              "gave to"
            ],
            "answer": 1,
            "explain": "4형식은 '동사+사람+사물' 순서이고 전치사를 쓰지 않아요. gave him a gift."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe showed ___.",
            "options": [
              "a picture us",
              "to a picture us",
              "us a picture",
              "a picture for us"
            ],
            "answer": 2,
            "explain": "4형식은 '동사+사람+사물' 순서. showed us a picture."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMy dad ___ me a new phone.",
            "options": [
              "buy",
              "buys to",
              "buy to",
              "bought"
            ],
            "answer": 3,
            "explain": "주어가 My dad이고 4형식이므로 bought me a new phone. (buy는 3인칭 단수 현재면 buys)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI ___ my friend a card.",
            "options": [
              "sent",
              "sends to",
              "sends",
              "send to"
            ],
            "answer": 0,
            "explain": "4형식은 '동사+사람+사물' 순서이고 전치사를 쓰지 않아요. sent my friend a card."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe threw the ball ___ me.",
            "options": [
              "for",
              "to",
              "of",
              "with"
            ],
            "answer": 1,
            "explain": "throw는 3형식으로 바꾸면 전치사 to를 써요. the ball to me."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe teacher ___ us English.",
            "options": [
              "teach",
              "teach to",
              "teaches",
              "teaches to"
            ],
            "answer": 2,
            "explain": "주어가 The teacher(3인칭 단수)이므로 teaches us English."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nMy uncle ___ me some money.",
            "options": [
              "give",
              "gives to",
              "give to",
              "gave"
            ],
            "answer": 3,
            "explain": "주어가 My uncle이고 4형식이므로 gave me some money. (give는 3인칭 단수 현재면 gives)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe bought a bag ___ me.",
            "options": [
              "for",
              "to",
              "of",
              "at"
            ],
            "answer": 0,
            "explain": "buy는 3형식으로 바꾸면 전치사 for를 써요. a bag for me."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nShe ___ me a gift.",
            "ko": "그녀는 나에게 선물을 주었다.",
            "answers": [
              "gave"
            ],
            "explain": "give의 과거형. gave me a gift."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nHe ___ us a package.",
            "ko": "그는 우리에게 소포를 보냈다.",
            "answers": [
              "sent"
            ],
            "explain": "send의 과거형. sent us a package."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI ___ my mom my report card.",
            "ko": "나는 엄마에게 내 성적표를 보여주었다.",
            "answers": [
              "showed"
            ],
            "explain": "show의 과거형. showed my mom my report card."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nMs. Park ___ us music.",
            "ko": "박 선생님은 우리에게 음악을 가르치신다.",
            "answers": [
              "teaches"
            ],
            "explain": "주어가 3인칭 단수이므로 teaches us music."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nMy mom ___ me shoes.",
            "ko": "우리 엄마는 나에게 신발을 사주셨다.",
            "answers": [
              "bought"
            ],
            "explain": "buy의 과거형. bought me shoes."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nHe ___ me a secret.",
            "ko": "그는 나에게 비밀을 말해주었다.",
            "answers": [
              "told"
            ],
            "explain": "tell의 과거형. told me a secret."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nMy sister ___ me a cake.",
            "ko": "언니는 나에게 케이크를 만들어주었다.",
            "answers": [
              "made"
            ],
            "explain": "make의 과거형. made me a cake."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nShe gave a gift ___ me.",
            "ko": "그녀는 나에게 선물을 주었다.",
            "answers": [
              "to"
            ],
            "explain": "give는 3형식 전환 시 전치사 to를 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nMy mom bought a cake ___ me.",
            "ko": "우리 엄마는 나를 위해 케이크를 사주셨다.",
            "answers": [
              "for"
            ],
            "explain": "buy는 3형식 전환 시 전치사 for를 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI ___ him a ticket.",
            "ko": "나는 그에게 표를 구해주었다.",
            "answers": [
              "got"
            ],
            "explain": "get의 과거형. got him a ticket."
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
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI think ___ he is kind.",
            "options": [
              "that",
              "what",
              "if",
              "it"
            ],
            "answer": 0,
            "explain": "'~라고'를 뜻하는 명사절을 이끄는 접속사는 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 나는 네가 음악을 좋아한다는 것을 안다.)\nI ___ that you like music.",
            "options": [
              "hope",
              "know",
              "say",
              "feel"
            ],
            "answer": 1,
            "explain": "'안다'는 know."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nShe believes ___ he tells the truth.",
            "options": [
              "what",
              "if",
              "that",
              "it"
            ],
            "answer": 2,
            "explain": "believe의 목적어로 that절을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 우리는 네가 즐거운 여행을 하길 바란다.)\nWe ___ that you have a great trip.",
            "options": [
              "think",
              "know",
              "say",
              "hope"
            ],
            "answer": 3,
            "explain": "'바라다'는 hope."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nHe says ___ he saw the accident.",
            "options": [
              "that",
              "what",
              "it",
              "if"
            ],
            "answer": 0,
            "explain": "say 뒤의 명사절은 that으로 이끈다."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 그들은 그 계획이 좋다고 생각한다.)\nThey ___ that the plan is good.",
            "options": [
              "hope",
              "think",
              "know",
              "say"
            ],
            "answer": 1,
            "explain": "'생각한다'는 think."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI feel ___ something is wrong.",
            "options": [
              "what",
              "if",
              "that",
              "it"
            ],
            "answer": 2,
            "explain": "feel의 목적어로 that절을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 우리 엄마는 내가 피곤하다는 것을 아신다.)\nMy mom ___ that I am tired.",
            "options": [
              "hopes",
              "thinks",
              "says",
              "knows"
            ],
            "answer": 3,
            "explain": "'안다'는 know(knows)."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI think ___ the movie is interesting.",
            "options": [
              "that",
              "if",
              "what",
              "it"
            ],
            "answer": 0,
            "explain": "명사절을 이끄는 접속사는 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 우리 선생님은 내가 열심히 공부한다는 것을 아신다.)\nMy teacher ___ that I study hard.",
            "options": [
              "hopes",
              "knows",
              "says",
              "feels"
            ],
            "answer": 1,
            "explain": "'안다'는 know(knows)."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nWe believe ___ he is honest.",
            "options": [
              "what",
              "it",
              "that",
              "if"
            ],
            "answer": 2,
            "explain": "believe 뒤의 명사절은 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 너는 모든 것이 잘될 거라고 바란다.)\nYou ___ that everything will be fine.",
            "options": [
              "think",
              "know",
              "say",
              "hope"
            ],
            "answer": 3,
            "explain": "'바라다'는 hope."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 그녀는 자신이 늦을 거라고 말한다.)\nShe ___ that she will be late.",
            "options": [
              "says",
              "thinks",
              "knows",
              "hopes"
            ],
            "answer": 0,
            "explain": "'말한다'는 say(says)."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI think ___ you did your best.",
            "options": [
              "what",
              "that",
              "if",
              "it"
            ],
            "answer": 1,
            "explain": "think의 목적어로 that절을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 그들은 그 계획이 안전하다고 생각한다.)\nThey ___ that the plan is safe.",
            "options": [
              "hope",
              "know",
              "think",
              "say"
            ],
            "answer": 2,
            "explain": "'생각한다'는 think."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI think ___ he is very kind.",
            "options": [
              "what",
              "if",
              "it",
              "that"
            ],
            "answer": 3,
            "explain": "명사절을 이끄는 접속사는 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 나는 그가 버스를 놓쳤다는 것을 안다.)\nI ___ that he missed the bus.",
            "options": [
              "know",
              "hope",
              "say",
              "feel"
            ],
            "answer": 0,
            "explain": "'안다'는 know."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI believe ___ his story is true.",
            "options": [
              "what",
              "that",
              "if",
              "it"
            ],
            "answer": 1,
            "explain": "believe 뒤의 명사절은 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 나는 내가 새 친구들을 사귈 거라고 바란다.)\nI ___ that I will make new friends.",
            "options": [
              "think",
              "know",
              "hope",
              "say"
            ],
            "answer": 2,
            "explain": "'바라다'는 hope."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 그녀는 그 시험이 쉬웠다고 말했다.)\nShe ___ that the test was easy.",
            "options": [
              "thought",
              "knew",
              "hoped",
              "said"
            ],
            "answer": 3,
            "explain": "과거로 '말했다'는 said."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nI feel ___ it is fair.",
            "options": [
              "that",
              "what",
              "if",
              "it"
            ],
            "answer": 0,
            "explain": "feel의 목적어로 that절을 쓴다."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 나는 그것이 멋진 노래라고 생각한다.)\nI ___ that it is a great song.",
            "options": [
              "hope",
              "think",
              "know",
              "say"
            ],
            "answer": 1,
            "explain": "'생각한다'는 think."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 우리는 그가 매일 운동한다는 것을 안다.)\nWe ___ that he exercises every day.",
            "options": [
              "hope",
              "think",
              "know",
              "say"
            ],
            "answer": 2,
            "explain": "'안다'는 know."
          },
          {
            "q": "빈칸에 알맞은 접속사를 고르세요.\nShe believes ___ she will pass the exam.",
            "options": [
              "what",
              "if",
              "it",
              "that"
            ],
            "answer": 3,
            "explain": "believe 뒤의 명사절은 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요. (뜻: 나는 네가 나를 도와줄 거라고 믿는다.)\nI ___ that you will help me.",
            "options": [
              "believe",
              "hope",
              "say",
              "feel"
            ],
            "answer": 0,
            "explain": "'믿는다'는 believe."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nI ___ that you like music.",
            "ko": "나는 네가 음악을 좋아한다는 것을 안다.",
            "answers": [
              "know"
            ],
            "explain": "'안다'는 know."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nWe ___ that you have a great trip.",
            "ko": "우리는 네가 즐거운 여행을 하길 바란다.",
            "answers": [
              "hope"
            ],
            "explain": "'바라다'는 hope."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nThey ___ that the plan is good.",
            "ko": "그들은 그 계획이 좋다고 생각한다.",
            "answers": [
              "think"
            ],
            "explain": "'생각한다'는 think."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nShe ___ that she will be late.",
            "ko": "그녀는 자신이 늦을 거라고 말한다.",
            "answers": [
              "says"
            ],
            "explain": "주어가 She이므로 say는 says."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nShe ___ that the test was easy.",
            "ko": "그녀는 그 시험이 쉬웠다고 말했다.",
            "answers": [
              "said"
            ],
            "explain": "과거로 '말했다'는 said."
          },
          {
            "q": "빈칸에 알맞은 접속사를 쓰세요.\nI feel ___ something is wrong.",
            "ko": "나는 무언가 잘못되었다고 느낀다.",
            "answers": [
              "that"
            ],
            "explain": "명사절을 이끄는 접속사는 that."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nI ___ that you will help me.",
            "ko": "나는 네가 나를 도와줄 거라고 믿는다.",
            "answers": [
              "believe"
            ],
            "explain": "'믿는다'는 believe."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nMy teacher ___ that I study hard.",
            "ko": "우리 선생님은 내가 열심히 공부한다는 것을 아신다.",
            "answers": [
              "knows"
            ],
            "explain": "주어가 My teacher이므로 know는 knows."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nI ___ that it is fair.",
            "ko": "나는 그것이 공정하다고 느낀다.",
            "answers": [
              "feel"
            ],
            "explain": "'느낀다'는 feel."
          },
          {
            "q": "빈칸에 알맞은 접속사를 쓰세요.\nI know ___ you did your best.",
            "ko": "나는 네가 최선을 다했다는 것을 안다.",
            "answers": [
              "that"
            ],
            "explain": "know의 목적어로 that절을 쓴다."
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
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to read a book in a dark room.",
            "options": [
              "hard",
              "easy",
              "funny",
              "tall"
            ],
            "answer": 0,
            "explain": "'어두운 방에서 책을 읽는 것은 어렵다'는 뜻이므로 hard가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is important ___ English.",
            "options": [
              "learn",
              "to learn",
              "learning",
              "learns"
            ],
            "answer": 1,
            "explain": "진주어는 to부정사이므로 to learn이 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ for your health to exercise every day.",
            "options": [
              "good",
              "bad",
              "dangerous",
              "dirty"
            ],
            "answer": 0,
            "explain": "'매일 운동하는 것은 건강에 좋다'는 뜻이므로 good이 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 가주어를 고르세요.\n___ is dangerous to swim in the deep river.",
            "options": [
              "That",
              "There",
              "It",
              "This"
            ],
            "answer": 2,
            "explain": "뜻 없는 가주어 It이 문장 앞에 와요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to write down new English words.",
            "options": [
              "useful",
              "useless",
              "scary",
              "dirty"
            ],
            "answer": 0,
            "explain": "'새 영어 단어를 적어 두는 것은 유용하다'는 뜻이므로 useful이 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is wonderful ___ other people.",
            "options": [
              "help",
              "helping",
              "to help",
              "helped"
            ],
            "answer": 2,
            "explain": "진주어 to부정사이므로 to help가 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to finish all this homework in one hour.",
            "options": [
              "fun",
              "easy",
              "kind",
              "hard"
            ],
            "answer": 3,
            "explain": "'이 모든 숙제를 한 시간 안에 끝내는 것은 어렵다'는 뜻이므로 hard가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is not easy ___ up early.",
            "options": [
              "get",
              "getting",
              "gets",
              "to get"
            ],
            "answer": 3,
            "explain": "진주어는 to부정사이므로 to get이 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to keep your promise to your friends.",
            "options": [
              "boring",
              "important",
              "funny",
              "dirty"
            ],
            "answer": 1,
            "explain": "'친구와의 약속을 지키는 것은 중요하다'는 뜻이므로 important가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is easy ___ a bike.",
            "options": [
              "ride",
              "rides",
              "to ride",
              "riding"
            ],
            "answer": 2,
            "explain": "진주어 to부정사이므로 to ride가 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to play with fire at home.",
            "options": [
              "safe",
              "fun",
              "dangerous",
              "clean"
            ],
            "answer": 2,
            "explain": "'집에서 불을 가지고 노는 것은 위험하다'는 뜻이므로 dangerous가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 가주어를 고르세요.\n___ is fun to travel with friends.",
            "options": [
              "It",
              "There",
              "This",
              "That"
            ],
            "answer": 0,
            "explain": "뜻 없는 가주어 It으로 문장을 시작해요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is good ___ vegetables.",
            "options": [
              "eating",
              "to eat",
              "eat",
              "eats"
            ],
            "answer": 1,
            "explain": "진주어 to부정사이므로 to eat이 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to wake up early on cold winter mornings.",
            "options": [
              "happy",
              "kind",
              "tall",
              "hard"
            ],
            "answer": 3,
            "explain": "'추운 겨울 아침에 일찍 일어나는 것은 어렵다'는 뜻이므로 hard가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is useful ___ a foreign language.",
            "options": [
              "learn",
              "learning",
              "learned",
              "to learn"
            ],
            "answer": 3,
            "explain": "진주어 to부정사이므로 to learn이 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to read English comic books.",
            "options": [
              "sleepy",
              "angry",
              "interesting",
              "hungry"
            ],
            "answer": 2,
            "explain": "'영어 만화책을 읽는 것은 흥미롭다'는 뜻이므로 interesting이 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is exciting ___ soccer.",
            "options": [
              "play",
              "to play",
              "playing",
              "played"
            ],
            "answer": 1,
            "explain": "진주어 to부정사이므로 to play가 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to drink enough water every day.",
            "options": [
              "important",
              "lazy",
              "late",
              "short"
            ],
            "answer": 0,
            "explain": "'매일 물을 충분히 마시는 것은 중요하다'는 뜻이므로 important가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is nice ___ new friends.",
            "options": [
              "make",
              "making",
              "made",
              "to make"
            ],
            "answer": 3,
            "explain": "진주어 to부정사이므로 to make가 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to run on the ice.",
            "options": [
              "dangerous",
              "calm",
              "easy",
              "warm"
            ],
            "answer": 0,
            "explain": "'얼음 위에서 달리는 것은 위험하다'는 뜻이므로 dangerous가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 가주어를 고르세요.\n___ is good to go to bed early.",
            "options": [
              "He",
              "It",
              "There",
              "This"
            ],
            "answer": 1,
            "explain": "뜻 없는 가주어 It으로 문장을 시작해요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is easy ___ the problem.",
            "options": [
              "solving",
              "solves",
              "to solve",
              "solve"
            ],
            "answer": 2,
            "explain": "진주어 to부정사이므로 to solve가 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to wear a helmet when you ride a bike.",
            "options": [
              "silly",
              "cold",
              "funny",
              "necessary"
            ],
            "answer": 3,
            "explain": "'자전거를 탈 때 헬멧을 쓰는 것은 필요하다'는 뜻이므로 necessary가 알맞아요."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nIt is exciting ___ new things.",
            "options": [
              "learn",
              "learning",
              "learns",
              "to learn"
            ],
            "answer": 3,
            "explain": "진주어 to부정사이므로 to learn이 맞아요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt is ___ to eat fresh fruit and vegetables.",
            "options": [
              "heavy",
              "healthy",
              "hungry",
              "hot"
            ],
            "answer": 1,
            "explain": "'신선한 과일과 채소를 먹는 것은 건강에 좋다'는 뜻이므로 healthy가 알맞아요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nIt is ___ to read books.",
            "ko": "책을 읽는 것은 재미있다.",
            "answers": [
              "fun"
            ],
            "explain": "'재미있다'는 뜻이므로 fun이에요."
          },
          {
            "q": "빈칸에 알맞은 to부정사를 쓰세요.\nIt is important ___ English.",
            "ko": "영어를 배우는 것은 중요하다.",
            "answers": [
              "to learn"
            ],
            "explain": "진주어는 to부정사이므로 to learn이에요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nIt is ___ to run on the ice.",
            "ko": "얼음 위에서 달리는 것은 위험하다.",
            "answers": [
              "dangerous"
            ],
            "explain": "'위험하다'는 뜻이므로 dangerous예요."
          },
          {
            "q": "빈칸에 알맞은 to부정사를 쓰세요.\nIt is wonderful ___ other people.",
            "ko": "다른 사람들을 돕는 것은 멋지다.",
            "answers": [
              "to help"
            ],
            "explain": "진주어는 to부정사이므로 to help예요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nIt is ___ to keep a diary.",
            "ko": "일기를 쓰는 것은 유용하다.",
            "answers": [
              "useful"
            ],
            "explain": "'유용하다'는 뜻이므로 useful이에요."
          },
          {
            "q": "빈칸에 알맞은 to부정사를 쓰세요.\nIt is easy ___ a bike.",
            "ko": "자전거를 타는 것은 쉽다.",
            "answers": [
              "to ride"
            ],
            "explain": "진주어는 to부정사이므로 to ride예요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nIt is ___ to keep your promise.",
            "ko": "약속을 지키는 것은 중요하다.",
            "answers": [
              "important"
            ],
            "explain": "'중요하다'는 뜻이므로 important예요."
          },
          {
            "q": "빈칸에 알맞은 to부정사를 쓰세요.\nIt is good ___ vegetables.",
            "ko": "채소를 먹는 것은 몸에 좋다.",
            "answers": [
              "to eat"
            ],
            "explain": "진주어는 to부정사이므로 to eat이에요."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nIt is ___ to read English books.",
            "ko": "영어책을 읽는 것은 흥미롭다.",
            "answers": [
              "interesting"
            ],
            "explain": "'흥미롭다'는 뜻이므로 interesting이에요."
          },
          {
            "q": "빈칸에 알맞은 가주어를 쓰세요.\n___ is fun to travel with friends.",
            "ko": "친구들과 여행하는 것은 재미있다.",
            "answers": [
              "It"
            ],
            "explain": "뜻 없는 가주어 It으로 시작해요."
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
            "q": "빈칸에 알맞은 것을 고르세요.\nThe more you practice, the ___ you become.",
            "options": [
              "better",
              "best",
              "gooder",
              "more good"
            ],
            "answer": 0,
            "explain": "become 뒤 good의 비교급은 better."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe harder you study, the ___ you get.",
            "options": [
              "more smart",
              "smart",
              "smarter",
              "smartest"
            ],
            "answer": 2,
            "explain": "smart의 비교급은 smarter."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ older we get, the wiser we are.",
            "options": [
              "A",
              "The",
              "More",
              "Most"
            ],
            "answer": 1,
            "explain": "비교급 구문의 앞에는 the를 쓴다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe higher it is, the ___ it is.",
            "options": [
              "cold",
              "colder",
              "coldest",
              "more cold"
            ],
            "answer": 1,
            "explain": "cold의 비교급은 colder."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe more you eat, the ___ you get.",
            "options": [
              "heavy",
              "heaviest",
              "more heavy",
              "heavier"
            ],
            "answer": 3,
            "explain": "heavy의 비교급은 heavier."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe harder we practice, the ___ we become.",
            "options": [
              "good",
              "more better",
              "better",
              "best"
            ],
            "answer": 2,
            "explain": "good의 비교급은 better. more better는 이중 비교급이라 틀림."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe later it is, the ___ it is.",
            "options": [
              "darker",
              "dark",
              "darkest",
              "more dark"
            ],
            "answer": 0,
            "explain": "dark의 비교급은 darker."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe faster he runs, the ___ tired he gets.",
            "options": [
              "most",
              "much",
              "more",
              "very"
            ],
            "answer": 2,
            "explain": "긴 형용사 tired는 more tired로 비교급을 만든다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe ___ the weather is, the happier I feel.",
            "options": [
              "warm",
              "warmer",
              "warmest",
              "more warm"
            ],
            "answer": 1,
            "explain": "warm의 비교급은 warmer."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe less you sleep, the ___ tired you feel.",
            "options": [
              "most",
              "much",
              "very",
              "more"
            ],
            "answer": 3,
            "explain": "tired의 비교급은 more tired."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe more you smile, the ___ you feel.",
            "options": [
              "happy",
              "happiest",
              "happier",
              "more happy"
            ],
            "answer": 2,
            "explain": "happy의 비교급은 happier."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe harder you work, the ___ you earn.",
            "options": [
              "much",
              "many",
              "most",
              "more"
            ],
            "answer": 3,
            "explain": "much의 비교급은 more."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe higher we climb, the ___ it gets.",
            "options": [
              "colder",
              "cold",
              "coldest",
              "more cold"
            ],
            "answer": 0,
            "explain": "cold의 비교급은 colder."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe faster you drive, the ___ dangerous it is.",
            "options": [
              "most",
              "very",
              "more",
              "much"
            ],
            "answer": 2,
            "explain": "dangerous는 more dangerous로 비교급을 만든다."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe more we talk, the ___ we understand each other.",
            "options": [
              "good",
              "best",
              "more good",
              "better"
            ],
            "answer": 3,
            "explain": "well/good의 비교급은 better."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe older he gets, the ___ he becomes.",
            "options": [
              "wise",
              "wiser",
              "wisest",
              "more wise"
            ],
            "answer": 1,
            "explain": "wise의 비교급은 wiser."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe longer you wait, the ___ she will be.",
            "options": [
              "angry",
              "more angry",
              "angrier",
              "angriest"
            ],
            "answer": 2,
            "explain": "angry의 비교급은 angrier."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe ___ you start, the sooner you finish.",
            "options": [
              "earlier",
              "early",
              "earliest",
              "more early"
            ],
            "answer": 0,
            "explain": "early의 비교급은 earlier."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe more you read, the ___ you get.",
            "options": [
              "smart",
              "more smart",
              "smartest",
              "smarter"
            ],
            "answer": 3,
            "explain": "smart의 비교급은 smarter."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe colder it gets, the ___ clothes we wear.",
            "options": [
              "more",
              "most",
              "many",
              "much"
            ],
            "answer": 0,
            "explain": "clothes 앞의 many의 비교급은 more."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe faster you walk, the ___ you arrive.",
            "options": [
              "early",
              "earliest",
              "earlier",
              "more early"
            ],
            "answer": 2,
            "explain": "early의 비교급은 earlier."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe more you exercise, the ___ you become.",
            "options": [
              "healthy",
              "healthier",
              "healthiest",
              "more healthy"
            ],
            "answer": 1,
            "explain": "healthy의 비교급은 healthier."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe longer we wait, the ___ bored we feel.",
            "options": [
              "most",
              "very",
              "much",
              "more"
            ],
            "answer": 3,
            "explain": "bored의 비교급은 more bored."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe higher you fly, the ___ you see.",
            "options": [
              "far",
              "farther",
              "farthest",
              "more far"
            ],
            "answer": 1,
            "explain": "far의 비교급은 farther."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe harder you try, the ___ you become.",
            "options": [
              "stronger",
              "strong",
              "strongest",
              "more strong"
            ],
            "answer": 0,
            "explain": "strong의 비교급은 stronger."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe more you practice, the ___ you become.",
            "ko": "많이 연습할수록 더 잘하게 된다.",
            "answers": [
              "better"
            ],
            "explain": "good의 비교급은 better."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe harder you study, the ___ you get.",
            "ko": "열심히 공부할수록 더 똑똑해진다.",
            "answers": [
              "smarter"
            ],
            "explain": "smart의 비교급은 smarter."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe higher we climb, the ___ it gets.",
            "ko": "높이 오를수록 더 추워진다.",
            "answers": [
              "colder"
            ],
            "explain": "cold의 비교급은 colder."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nThe ___ you smile, the happier you feel.",
            "ko": "많이 웃을수록 더 행복해진다.",
            "answers": [
              "more"
            ],
            "explain": "much/many의 비교급은 more."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe longer you wait, the ___ she will be.",
            "ko": "오래 기다릴수록 그녀는 더 화를 낼 것이다.",
            "answers": [
              "angrier"
            ],
            "explain": "angry의 비교급은 angrier."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe older he gets, the ___ he becomes.",
            "ko": "나이가 들수록 그는 더 현명해진다.",
            "answers": [
              "wiser"
            ],
            "explain": "wise의 비교급은 wiser."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe ___ you start, the sooner you finish.",
            "ko": "일찍 시작할수록 더 빨리 끝낸다.",
            "answers": [
              "earlier"
            ],
            "explain": "early의 비교급은 earlier."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe more you exercise, the ___ you become.",
            "ko": "운동을 많이 할수록 더 건강해진다.",
            "answers": [
              "healthier"
            ],
            "explain": "healthy의 비교급은 healthier."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe higher you fly, the ___ you see.",
            "ko": "높이 날수록 더 멀리 본다.",
            "answers": [
              "farther"
            ],
            "explain": "far의 비교급은 farther."
          },
          {
            "q": "빈칸에 알맞은 비교급을 쓰세요.\nThe harder you try, the ___ you become.",
            "ko": "열심히 노력할수록 더 강해진다.",
            "answers": [
              "stronger"
            ],
            "explain": "strong의 비교급은 stronger."
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
            "q": "빈칸에 알맞은 것을 고르세요.\nOne of the students ___ late.",
            "options": [
              "is",
              "are",
              "were",
              "be"
            ],
            "answer": 0,
            "explain": "One of the + 복수명사는 단수 취급이므로 동사는 is."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEach boy ___ a book.",
            "options": [
              "have",
              "having",
              "has",
              "are having"
            ],
            "answer": 2,
            "explain": "Each + 단수명사는 단수 취급이므로 has."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe number of cars ___ high.",
            "options": [
              "are",
              "is",
              "were",
              "be"
            ],
            "answer": 1,
            "explain": "The number of ~는 단수 취급이므로 is."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEvery child ___ love.",
            "options": [
              "need",
              "are needing",
              "have",
              "needs"
            ],
            "answer": 3,
            "explain": "Every + 단수명사는 단수 취급이므로 needs."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe students ___ in the classroom.",
            "options": [
              "are",
              "is",
              "was",
              "be"
            ],
            "answer": 0,
            "explain": "복수 주어이므로 동사는 are."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy sister ___ music.",
            "options": [
              "like",
              "are liking",
              "likes",
              "liking"
            ],
            "answer": 2,
            "explain": "3인칭 단수 주어이므로 동사에 -s를 붙여 likes."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWater ___ at 100°C.",
            "options": [
              "boil",
              "boils",
              "are boiling",
              "boiling"
            ],
            "answer": 1,
            "explain": "불가산명사 Water는 단수 취급이므로 boils."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEach of the boys ___ a bike.",
            "options": [
              "have",
              "having",
              "are having",
              "has"
            ],
            "answer": 3,
            "explain": "Each of the + 복수명사는 단수 취급이므로 has."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEverybody ___ summer vacation.",
            "options": [
              "likes",
              "like",
              "are liking",
              "liking"
            ],
            "answer": 0,
            "explain": "Everybody는 단수 취급이므로 likes."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThese books ___ interesting.",
            "options": [
              "looks",
              "is looking",
              "look",
              "looking"
            ],
            "answer": 2,
            "explain": "복수 주어 These books이므로 원형 look."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy brother ___ TV every night.",
            "options": [
              "watch",
              "watches",
              "are watching",
              "watching"
            ],
            "answer": 1,
            "explain": "3인칭 단수 주어이므로 watches."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe news ___ surprising.",
            "options": [
              "are",
              "were",
              "be",
              "is"
            ],
            "answer": 3,
            "explain": "news는 단수 취급이므로 is."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nOne of my friends ___ soccer.",
            "options": [
              "plays",
              "play",
              "are playing",
              "playing"
            ],
            "answer": 0,
            "explain": "One of my + 복수명사는 단수 취급이므로 plays."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEvery student ___ a locker.",
            "options": [
              "have",
              "having",
              "has",
              "are having"
            ],
            "answer": 2,
            "explain": "Every + 단수명사는 단수 취급이므로 has."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThe children ___ very noisy.",
            "options": [
              "is",
              "are",
              "was",
              "be"
            ],
            "answer": 1,
            "explain": "children은 복수이므로 are."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nPlanning your spending ___ important.",
            "options": [
              "are",
              "were",
              "be",
              "is"
            ],
            "answer": 3,
            "explain": "동명사 주어는 단수 취급이므로 is."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMath ___ my favorite subject.",
            "options": [
              "is",
              "are",
              "were",
              "be"
            ],
            "answer": 0,
            "explain": "과목명 Math는 단수 취급이므로 is."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEach team ___ a captain.",
            "options": [
              "have",
              "having",
              "has",
              "are having"
            ],
            "answer": 2,
            "explain": "Each + 단수명사는 단수 취급이므로 has."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nMy parents ___ in a hospital.",
            "options": [
              "works",
              "work",
              "is working",
              "working"
            ],
            "answer": 1,
            "explain": "복수 주어이므로 원형 work."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\n80 percent of students ___ money every month.",
            "options": [
              "saves",
              "is saving",
              "has saved",
              "save"
            ],
            "answer": 3,
            "explain": "부분 표현은 of 뒤 명사에 일치, students가 복수이므로 save."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThere ___ ten girls in the club.",
            "options": [
              "are",
              "is",
              "was",
              "be"
            ],
            "answer": 0,
            "explain": "There + 복수명사이므로 are."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nOne of the dogs ___ sleeping.",
            "options": [
              "are",
              "were",
              "is",
              "be"
            ],
            "answer": 2,
            "explain": "One of the + 복수명사는 단수 취급이므로 is."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nEveryone ___ the rule.",
            "options": [
              "know",
              "knows",
              "are knowing",
              "knowing"
            ],
            "answer": 1,
            "explain": "Everyone은 단수 취급이므로 knows."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nThese flowers ___ good.",
            "options": [
              "smells",
              "is smelling",
              "smelling",
              "smell"
            ],
            "answer": 3,
            "explain": "복수 주어 These flowers이므로 원형 smell."
          },
          {
            "q": "빈칸에 알맞은 것을 고르세요.\nWater ___ at 0°C.",
            "options": [
              "freeze",
              "are freezing",
              "freezing",
              "freezes"
            ],
            "answer": 3,
            "explain": "불가산명사 Water는 단수 취급이므로 freezes."
          }
        ],
        "sa": [
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nOne of the students ___ late.",
            "ko": "학생들 중 한 명이 늦었다.",
            "answers": [
              "is"
            ],
            "explain": "One of the + 복수명사는 단수 취급이므로 is."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nEvery child ___ love.",
            "ko": "모든 아이는 사랑이 필요하다.",
            "answers": [
              "needs"
            ],
            "explain": "Every + 단수명사는 단수 취급이므로 needs."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nThe students ___ in the classroom.",
            "ko": "그 학생들은 교실에 있다.",
            "answers": [
              "are"
            ],
            "explain": "복수 주어이므로 are."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nEach boy ___ a book.",
            "ko": "각 소년은 책을 한 권 가지고 있다.",
            "answers": [
              "has"
            ],
            "explain": "Each + 단수명사는 단수 취급이므로 has."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nMy brother ___ TV every night.",
            "ko": "내 남동생은 매일 밤 TV를 본다.",
            "answers": [
              "watches"
            ],
            "explain": "3인칭 단수 주어이므로 watches."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nOne of my friends ___ soccer.",
            "ko": "내 친구들 중 한 명은 축구를 한다.",
            "answers": [
              "plays"
            ],
            "explain": "One of my + 복수명사는 단수 취급이므로 plays."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nThese books ___ interesting.",
            "ko": "이 책들은 재미있어 보인다.",
            "answers": [
              "look"
            ],
            "explain": "복수 주어이므로 원형 look."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nEveryone ___ the rule.",
            "ko": "모두가 그 규칙을 안다.",
            "answers": [
              "knows"
            ],
            "explain": "Everyone은 단수 취급이므로 knows."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nMy parents ___ in a hospital.",
            "ko": "내 부모님은 병원에서 일하신다.",
            "answers": [
              "work"
            ],
            "explain": "복수 주어이므로 원형 work."
          },
          {
            "q": "주어에 맞는 동사를 빈칸에 쓰세요.\nWater ___ at 100°C.",
            "ko": "물은 100도에서 끓는다.",
            "answers": [
              "boils"
            ],
            "explain": "불가산명사 Water는 단수 취급이므로 boils."
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
            "q": "빈칸에 알맞은 말을 고르세요.\nI saw him ___ across the street.",
            "options": [
              "run",
              "to run",
              "ran",
              "runs"
            ],
            "answer": 0,
            "explain": "지각동사 see 뒤에는 동사원형(run)이 와요. to부정사는 쓸 수 없어요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe heard the baby ___.",
            "options": [
              "to cry",
              "cry",
              "cried",
              "cries"
            ],
            "answer": 1,
            "explain": "지각동사 hear 뒤 목적격보어는 동사원형(cry)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe watched them ___ on the stage.",
            "options": [
              "to dance",
              "danced",
              "dance",
              "dances"
            ],
            "answer": 2,
            "explain": "watch + 목적어 + 동사원형(dance) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI felt something ___ under my foot.",
            "options": [
              "to move",
              "moved",
              "moves",
              "move"
            ],
            "answer": 3,
            "explain": "지각동사 feel 뒤에는 동사원형(move)을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe saw the sun ___ in the morning.",
            "options": [
              "rise",
              "to rise",
              "rose",
              "rises"
            ],
            "answer": 0,
            "explain": "see + 목적어 + 동사원형(rise) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey heard a dog ___ at night.",
            "options": [
              "to bark",
              "bark",
              "barked",
              "barks"
            ],
            "answer": 1,
            "explain": "hear 뒤 목적격보어는 동사원형(bark)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI noticed her ___ at me.",
            "options": [
              "to smile",
              "smiled",
              "smile",
              "smiles"
            ],
            "answer": 2,
            "explain": "지각동사 notice 뒤에는 동사원형(smile)이 와요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe watched the players ___ fast.",
            "options": [
              "to run",
              "ran",
              "runs",
              "run"
            ],
            "answer": 3,
            "explain": "watch + 목적어 + 동사원형(run) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI saw a bird ___ in the sky.",
            "options": [
              "fly",
              "to fly",
              "flew",
              "flies"
            ],
            "answer": 0,
            "explain": "see 뒤 목적격보어는 동사원형(fly)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe heard someone ___ her name.",
            "options": [
              "to call",
              "call",
              "called",
              "calls"
            ],
            "answer": 1,
            "explain": "hear + 목적어 + 동사원형(call) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe watched the leaves ___ slowly.",
            "options": [
              "to float",
              "floated",
              "float",
              "floats"
            ],
            "answer": 2,
            "explain": "watch 뒤 목적격보어는 동사원형(float)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe felt the ground ___.",
            "options": [
              "to shake",
              "shook",
              "shakes",
              "shake"
            ],
            "answer": 3,
            "explain": "feel + 목적어 + 동사원형(shake) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe noticed him ___ the room.",
            "options": [
              "enter",
              "to enter",
              "entered",
              "enters"
            ],
            "answer": 0,
            "explain": "notice 뒤 목적격보어는 동사원형(enter)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI saw a cat ___ the tree.",
            "options": [
              "to climb",
              "climb",
              "climbed",
              "climbs"
            ],
            "answer": 1,
            "explain": "see + 목적어 + 동사원형(climb) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe heard the phone ___.",
            "options": [
              "to ring",
              "rang",
              "ring",
              "rings"
            ],
            "answer": 2,
            "explain": "hear 뒤 목적격보어는 동사원형(ring)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey watched the kids ___ in the yard.",
            "options": [
              "to play",
              "played",
              "plays",
              "play"
            ],
            "answer": 3,
            "explain": "watch + 목적어 + 동사원형(play) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe felt his heart ___ fast.",
            "options": [
              "pound",
              "to pound",
              "pounded",
              "pounds"
            ],
            "answer": 0,
            "explain": "feel 뒤 목적격보어는 동사원형(pound)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI heard birds ___ in the morning.",
            "options": [
              "to sing",
              "sing",
              "sang",
              "sings"
            ],
            "answer": 1,
            "explain": "hear + 목적어 + 동사원형(sing) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI saw a star ___ from the sky.",
            "options": [
              "to fall",
              "fell",
              "fall",
              "falls"
            ],
            "answer": 2,
            "explain": "see 뒤 목적격보어는 동사원형(fall)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe watched the children ___ soccer.",
            "options": [
              "to play",
              "played",
              "plays",
              "play"
            ],
            "answer": 3,
            "explain": "watch + 목적어 + 동사원형(play) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI felt the wind ___ on my face.",
            "options": [
              "blow",
              "to blow",
              "blew",
              "blows"
            ],
            "answer": 0,
            "explain": "feel 뒤 목적격보어는 동사원형(blow)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThey saw the train ___ into the station.",
            "options": [
              "to come",
              "come",
              "came",
              "comes"
            ],
            "answer": 1,
            "explain": "see + 목적어 + 동사원형(come) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe heard someone ___ loudly.",
            "options": [
              "to laugh",
              "laughed",
              "laugh",
              "laughs"
            ],
            "answer": 2,
            "explain": "hear 뒤 목적격보어는 동사원형(laugh)이에요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe felt the door ___.",
            "options": [
              "to open",
              "opened",
              "opens",
              "open"
            ],
            "answer": 3,
            "explain": "feel + 목적어 + 동사원형(open) 형태예요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI watched him ___ the street.",
            "options": [
              "to cross",
              "crossed",
              "cross",
              "crosses"
            ],
            "answer": 2,
            "explain": "watch 뒤 목적격보어는 동사원형(cross)이에요."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI saw him ___ across the street.",
            "ko": "나는 그가 길을 가로질러 달리는 것을 보았다.",
            "answers": [
              "run",
              "running"
            ],
            "explain": "지각동사 see 뒤에는 동사원형 run 또는 진행을 강조하는 running을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nShe heard the baby ___.",
            "ko": "그녀는 아기가 우는 것을 들었다.",
            "answers": [
              "cry",
              "crying"
            ],
            "explain": "hear 뒤에는 동사원형 cry 또는 crying을 써요. (to부정사 불가)"
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWe watched them ___ on the stage.",
            "ko": "우리는 그들이 무대에서 춤추는 것을 지켜보았다.",
            "answers": [
              "dance",
              "dancing"
            ],
            "explain": "watch 뒤에는 동사원형 dance 또는 dancing을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI saw a bird ___ in the sky.",
            "ko": "나는 새가 하늘을 나는 것을 보았다.",
            "answers": [
              "fly",
              "flying"
            ],
            "explain": "see 뒤에는 동사원형 fly 또는 flying을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWe watched the leaves ___ slowly.",
            "ko": "우리는 나뭇잎이 천천히 떠다니는 것을 지켜보았다.",
            "answers": [
              "float",
              "floating"
            ],
            "explain": "watch 뒤에는 동사원형 float 또는 floating을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nHe felt the ground ___.",
            "ko": "그는 땅이 흔들리는 것을 느꼈다.",
            "answers": [
              "shake",
              "shaking"
            ],
            "explain": "feel 뒤에는 동사원형 shake 또는 shaking을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nShe noticed him ___ the room.",
            "ko": "그녀는 그가 방에 들어오는 것을 알아챘다.",
            "answers": [
              "enter",
              "entering"
            ],
            "explain": "notice 뒤에는 동사원형 enter 또는 entering을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nShe heard the phone ___.",
            "ko": "그녀는 전화가 울리는 것을 들었다.",
            "answers": [
              "ring",
              "ringing"
            ],
            "explain": "hear 뒤에는 동사원형 ring 또는 ringing을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI saw a star ___ from the sky.",
            "ko": "나는 별이 하늘에서 떨어지는 것을 보았다.",
            "answers": [
              "fall",
              "falling"
            ],
            "explain": "see 뒤에는 동사원형 fall 또는 falling을 써요."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nHe heard someone ___ loudly.",
            "ko": "그는 누군가 크게 웃는 것을 들었다.",
            "answers": [
              "laugh",
              "laughing"
            ],
            "explain": "hear 뒤에는 동사원형 laugh 또는 laughing을 써요."
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
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThe book ___ I read was fun.",
            "options": [
              "which",
              "who",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사가 사물(book)이므로 목적격 which."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThe girl ___ I met is kind.",
            "options": [
              "which",
              "whom",
              "what",
              "whose"
            ],
            "answer": 1,
            "explain": "선행사가 사람(girl)이므로 목적격 whom."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThis is the cake ___ my mom made.",
            "options": [
              "who",
              "what",
              "that",
              "whose"
            ],
            "answer": 2,
            "explain": "사물 선행사(cake)에 쓸 수 있는 목적격 that."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nHe is the singer ___ everyone loves.",
            "options": [
              "which",
              "what",
              "whose",
              "who"
            ],
            "answer": 3,
            "explain": "선행사가 사람(singer)이므로 목적격 who."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThe song ___ I like is popular.",
            "options": [
              "who",
              "which",
              "what",
              "whose"
            ],
            "answer": 1,
            "explain": "선행사가 사물(song)이므로 which."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThe boy ___ she likes is kind.",
            "options": [
              "whom",
              "which",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사가 사람(boy)이므로 목적격 whom."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThe bag ___ you bought looks nice.",
            "options": [
              "who",
              "what",
              "whose",
              "that"
            ],
            "answer": 3,
            "explain": "사물 선행사(bag)에 쓸 수 있는 that."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThe teacher ___ I respect is strict.",
            "options": [
              "which",
              "what",
              "who",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사가 사람(teacher)이므로 who."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThe food ___ he cooked was delicious.",
            "options": [
              "who",
              "what",
              "which",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사가 사물(food)이므로 which."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThe people ___ we met were friendly.",
            "options": [
              "which",
              "what",
              "whose",
              "whom"
            ],
            "answer": 3,
            "explain": "선행사가 사람(people)이므로 목적격 whom."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThis is the letter ___ he wrote.",
            "options": [
              "that",
              "who",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "사물 선행사(letter)에 쓸 수 있는 that."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nShe is the girl ___ we know.",
            "options": [
              "which",
              "who",
              "what",
              "whose"
            ],
            "answer": 1,
            "explain": "선행사가 사람(girl)이므로 who."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThat is the bike ___ I want.",
            "options": [
              "who",
              "what",
              "whose",
              "which"
            ],
            "answer": 3,
            "explain": "선행사가 사물(bike)이므로 which."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nHe is the friend ___ I trust.",
            "options": [
              "which",
              "what",
              "whom",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사가 사람(friend)이므로 목적격 whom."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThat is the picture ___ you drew.",
            "options": [
              "who",
              "that",
              "what",
              "whose"
            ],
            "answer": 1,
            "explain": "사물 선행사(picture)에 쓸 수 있는 that."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThey are the guests ___ I invited.",
            "options": [
              "who",
              "which",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사가 사람(guests)이므로 who."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThe movie ___ we watched was great.",
            "options": [
              "which",
              "who",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사가 사물(movie)이므로 which."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nShe is the teacher ___ I respect.",
            "options": [
              "which",
              "whom",
              "what",
              "whose"
            ],
            "answer": 1,
            "explain": "선행사가 사람(teacher)이므로 목적격 whom."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nHere is the pen ___ you lost.",
            "options": [
              "who",
              "what",
              "whose",
              "that"
            ],
            "answer": 3,
            "explain": "사물 선행사(pen)에 쓸 수 있는 that."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nHe is the boy ___ I met yesterday.",
            "options": [
              "which",
              "what",
              "who",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사가 사람(boy)이므로 who."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThis is the information ___ we need.",
            "options": [
              "who",
              "which",
              "what",
              "whose"
            ],
            "answer": 1,
            "explain": "선행사가 사물(information)이므로 which."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThey are the friends ___ I trust most.",
            "options": [
              "whom",
              "which",
              "what",
              "whose"
            ],
            "answer": 0,
            "explain": "선행사가 사람(friends)이므로 목적격 whom."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nThat is the house ___ they built.",
            "options": [
              "who",
              "what",
              "that",
              "whose"
            ],
            "answer": 2,
            "explain": "사물 선행사(house)에 쓸 수 있는 that."
          },
          {
            "q": "선행사에 맞는 목적격 관계대명사를 고르세요.\nShe is the person ___ I respect.",
            "options": [
              "which",
              "what",
              "whose",
              "who"
            ],
            "answer": 3,
            "explain": "선행사가 사람(person)이므로 who."
          },
          {
            "q": "빈칸에 알맞은 관계대명사를 고르세요.\nThe guitar ___ my father gave me is old.",
            "options": [
              "who",
              "what",
              "which",
              "whose"
            ],
            "answer": 2,
            "explain": "선행사가 사물(guitar)이므로 which."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThe book ___ I read was fun.",
            "ko": "내가 읽은 그 책은 재미있었다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사가 사물(book)이므로 which/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThe girl ___ I met is kind.",
            "ko": "내가 만난 그 소녀는 친절하다.",
            "answers": [
              "who",
              "whom",
              "that"
            ],
            "explain": "선행사가 사람(girl)이므로 who(m)/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThis is the cake ___ my mom made.",
            "ko": "이것은 우리 엄마가 만든 케이크다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사가 사물(cake)이므로 which/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nHe is the singer ___ everyone loves.",
            "ko": "그는 모두가 좋아하는 가수다.",
            "answers": [
              "who",
              "whom",
              "that"
            ],
            "explain": "선행사가 사람(singer)이므로 who(m)/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThe teacher ___ I respect is strict.",
            "ko": "내가 존경하는 그 선생님은 엄격하다.",
            "answers": [
              "who",
              "whom",
              "that"
            ],
            "explain": "선행사가 사람(teacher)이므로 who(m)/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThat is the bike ___ I want.",
            "ko": "저것은 내가 원하는 자전거다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사가 사물(bike)이므로 which/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThe people ___ we met were friendly.",
            "ko": "우리가 만난 그 사람들은 친절했다.",
            "answers": [
              "who",
              "whom",
              "that"
            ],
            "explain": "선행사가 사람(people)이므로 who(m)/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThe movie ___ we watched was great.",
            "ko": "우리가 본 그 영화는 훌륭했다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사가 사물(movie)이므로 which/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nHe is the friend ___ I trust.",
            "ko": "그는 내가 믿는 친구다.",
            "answers": [
              "who",
              "whom",
              "that"
            ],
            "explain": "선행사가 사람(friend)이므로 who(m)/that."
          },
          {
            "q": "빈칸에 알맞은 목적격 관계대명사를 쓰세요.\nThis is the information ___ we need.",
            "ko": "이것은 우리가 필요한 정보다.",
            "answers": [
              "which",
              "that"
            ],
            "explain": "선행사가 사물(information)이므로 which/that."
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
            "q": "빈칸에 알맞은 말을 고르세요.\n___ it was cold, we went out.",
            "options": [
              "Although",
              "Because",
              "So",
              "And"
            ],
            "answer": 0,
            "explain": "'비록 추웠지만' 양보의 뜻이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nWe were happy ___ we won the game.",
            "options": [
              "although",
              "because",
              "but",
              "so"
            ],
            "answer": 1,
            "explain": "'이겼기 때문에' 이유이므로 because."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ the water was cold, we went swimming.",
            "options": [
              "So",
              "Because",
              "Although",
              "And"
            ],
            "answer": 2,
            "explain": "'비록 물이 차가웠지만' 양보이므로 Although. 문장 앞에서 대조를 나타내요."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt was raining, ___ we stayed home.",
            "options": [
              "although",
              "because",
              "though",
              "so"
            ],
            "answer": 3,
            "explain": "'그래서' 결과이므로 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ she was tired, she kept working.",
            "options": [
              "Although",
              "Because",
              "So",
              "And"
            ],
            "answer": 0,
            "explain": "'비록 피곤했지만' 양보이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ he practiced every day, he lost the match.",
            "options": [
              "Because",
              "Although",
              "So",
              "But"
            ],
            "answer": 1,
            "explain": "'비록 매일 연습했지만' 양보이므로 Although. (연습이 진 이유가 아니므로 Because는 틀려요.)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe went to bed early ___ she was very tired.",
            "options": [
              "although",
              "so",
              "because",
              "but"
            ],
            "answer": 2,
            "explain": "'피곤했기 때문에' 이유이므로 because."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe was very tired, ___ he went to bed.",
            "options": [
              "because",
              "although",
              "but",
              "so"
            ],
            "answer": 3,
            "explain": "'그래서' 결과이므로 so. (피곤해서 잠자리에 든 결과)"
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nAlthough she ___ tired, she kept working.",
            "options": [
              "was",
              "is",
              "are",
              "be"
            ],
            "answer": 0,
            "explain": "과거 상황이고 주어가 she이므로 was."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nAlthough they ___ twins, they look different.",
            "options": [
              "is",
              "are",
              "was",
              "be"
            ],
            "answer": 1,
            "explain": "주어가 they이므로 are."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nAlthough it ___ cold, they played outside.",
            "options": [
              "is",
              "are",
              "was",
              "were"
            ],
            "answer": 2,
            "explain": "과거이고 주어 it이므로 was."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nAlthough he was tired, he ___ running.",
            "options": [
              "keep",
              "keeps",
              "keeping",
              "kept"
            ],
            "answer": 3,
            "explain": "과거이므로 kept (keep의 과거)."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ the test was hard, I passed it.",
            "options": [
              "Although",
              "Because",
              "So",
              "And"
            ],
            "answer": 0,
            "explain": "'비록 어려웠지만' 양보이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI was late ___ I overslept.",
            "options": [
              "although",
              "because",
              "so",
              "but"
            ],
            "answer": 1,
            "explain": "'늦잠 잤기 때문에' 이유이므로 because."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ she is young, she is very wise.",
            "options": [
              "So",
              "Because",
              "Although",
              "And"
            ],
            "answer": 2,
            "explain": "'비록 어리지만' 양보이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI was hungry, ___ I made a sandwich.",
            "options": [
              "although",
              "because",
              "though",
              "so"
            ],
            "answer": 3,
            "explain": "'그래서' 결과이므로 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ we were busy, we helped them.",
            "options": [
              "Although",
              "Because",
              "So",
              "And"
            ],
            "answer": 0,
            "explain": "'비록 바빴지만' 양보이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nAlthough she was sick, she ___ to school.",
            "options": [
              "go",
              "went",
              "goes",
              "going"
            ],
            "answer": 1,
            "explain": "과거이므로 went."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ the food was expensive, it tasted bad.",
            "options": [
              "Because",
              "So",
              "Though",
              "And"
            ],
            "answer": 2,
            "explain": "Though는 Although와 같은 뜻(비록 ~일지라도)이에요. '비록 비쌌지만 맛없었다' 양보."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ I was afraid, I rode the roller coaster.",
            "options": [
              "Because",
              "So",
              "And",
              "Although"
            ],
            "answer": 3,
            "explain": "'비록 무서웠지만' 양보이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ it was raining, we could not play outside.",
            "options": [
              "Because",
              "Although",
              "So",
              "But"
            ],
            "answer": 0,
            "explain": "'비가 왔기 때문에' 이유이므로 Because. (비가 원인이 되어 못 놀았어요.)"
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ it was raining, we walked to school.",
            "options": [
              "Because",
              "Although",
              "So",
              "And"
            ],
            "answer": 1,
            "explain": "'비록 비가 왔지만' 양보이므로 Although."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt was cold ___ windy yesterday.",
            "options": [
              "but",
              "so",
              "and",
              "although"
            ],
            "answer": 2,
            "explain": "'춥고 바람 불었다' 대등 연결이므로 and."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nAlthough it was late, she ___ reading.",
            "options": [
              "keep",
              "keeps",
              "keeping",
              "kept"
            ],
            "answer": 3,
            "explain": "과거이므로 kept."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\n___ it rained a little, we went on a picnic.",
            "options": [
              "Because",
              "So",
              "Although",
              "And"
            ],
            "answer": 2,
            "explain": "'비록 비가 조금 왔지만' 양보이므로 Although."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\n___ it was cold, we went out.",
            "ko": "비록 추웠지만 우리는 밖에 나갔다.",
            "answers": [
              "Although",
              "Though"
            ],
            "explain": "'비록 ~지만' 양보이므로 Although(=Though)."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nWe were happy ___ we won the game.",
            "ko": "우리는 경기에서 이겼기 때문에 행복했다.",
            "answers": [
              "because"
            ],
            "explain": "'이겼기 때문에' 이유이므로 because."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nAlthough he was tired, he ___ running.",
            "ko": "비록 그는 피곤했지만 계속 뛰었다.",
            "answers": [
              "kept"
            ],
            "explain": "과거이므로 keep의 과거형 kept."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nAlthough they ___ twins, they look different.",
            "ko": "비록 그들은 쌍둥이지만 다르게 생겼다.",
            "answers": [
              "are"
            ],
            "explain": "주어가 they이므로 are."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt was raining, ___ we stayed home.",
            "ko": "비가 오고 있어서 우리는 집에 있었다.",
            "answers": [
              "so"
            ],
            "explain": "'그래서' 결과이므로 so."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nAlthough she was sick, she ___ to school.",
            "ko": "비록 그녀는 아팠지만 학교에 갔다.",
            "answers": [
              "went"
            ],
            "explain": "과거이므로 go의 과거형 went."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\n___ she is young, she is very wise.",
            "ko": "비록 그녀는 어리지만 매우 현명하다.",
            "answers": [
              "Although",
              "Though"
            ],
            "explain": "'비록 어리지만' 양보이므로 Although(=Though). 문장 앞이므로 대문자로."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nI was late ___ I missed the bus.",
            "ko": "나는 버스를 놓쳤기 때문에 늦었다.",
            "answers": [
              "because"
            ],
            "explain": "'놓쳤기 때문에' 이유이므로 because."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt was cold ___ windy yesterday.",
            "ko": "어제는 춥고 바람이 불었다.",
            "answers": [
              "and"
            ],
            "explain": "'춥고 바람 불었다' 대등 연결이므로 and."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nAlthough it ___ cold, they played outside.",
            "ko": "비록 추웠지만 그들은 밖에서 놀았다.",
            "answers": [
              "was"
            ],
            "explain": "과거이고 주어 it이므로 was."
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
            "q": "나는 무엇을 할지 모르겠다.\nI don't know ___ to do.",
            "options": [
              "what",
              "when",
              "where",
              "how"
            ],
            "answer": 0,
            "explain": "'무엇을 ~할지'는 what to+동사원형."
          },
          {
            "q": "거기에 어떻게 가는지 나에게 말해 줘.\nTell me ___ to get there.",
            "options": [
              "what",
              "how",
              "where",
              "when"
            ],
            "answer": 1,
            "explain": "'어떻게 ~할지'는 how to+동사원형."
          },
          {
            "q": "그녀는 어디로 갈지 물었다.\nShe asked ___ to go.",
            "options": [
              "what",
              "when",
              "where",
              "how"
            ],
            "answer": 2,
            "explain": "'어디로 ~할지'는 where to+동사원형."
          },
          {
            "q": "우리는 언제 떠날지 정했다.\nWe decided ___ to leave.",
            "options": [
              "what",
              "how",
              "where",
              "when"
            ],
            "answer": 3,
            "explain": "'언제 ~할지'는 when to+동사원형."
          },
          {
            "q": "그는 어떻게 수영하는지 배웠다.\nHe learned ___ to swim.",
            "options": [
              "how",
              "what",
              "where",
              "why"
            ],
            "answer": 0,
            "explain": "'어떻게 ~할지'는 how to. why to는 쓰지 않음."
          },
          {
            "q": "나는 무엇을 말할지 잘 모르겠다.\nI'm not sure ___ to say.",
            "options": [
              "how",
              "what",
              "where",
              "when"
            ],
            "answer": 1,
            "explain": "'무엇을 ~할지'는 what to+동사원형."
          },
          {
            "q": "그것을 어떻게 사용하는지 나에게 보여 줘.\nShow me ___ to use it.",
            "options": [
              "what",
              "where",
              "how",
              "when"
            ],
            "answer": 2,
            "explain": "'어떻게 ~할지'는 how to+동사원형."
          },
          {
            "q": "그들은 어디에 머물지 궁금해한다.\nThey wonder ___ to stay.",
            "options": [
              "what",
              "how",
              "when",
              "where"
            ],
            "answer": 3,
            "explain": "'어디에 ~할지'는 where to+동사원형."
          },
          {
            "q": "나는 점심으로 무엇을 먹을지 모르겠다.\nI don't know ___ to eat for lunch.",
            "options": [
              "what",
              "when",
              "how",
              "where"
            ],
            "answer": 0,
            "explain": "'무엇을 ~할지'는 what to+동사원형."
          },
          {
            "q": "이 문제를 어떻게 푸는지 알려 줘.\nPlease tell me ___ to solve this problem.",
            "options": [
              "what",
              "how",
              "when",
              "where"
            ],
            "answer": 1,
            "explain": "'어떻게 ~할지'는 how to+동사원형."
          },
          {
            "q": "그녀는 어디서 표를 살지 알게 되었다.\nShe learned ___ to buy tickets.",
            "options": [
              "when",
              "what",
              "where",
              "how"
            ],
            "answer": 2,
            "explain": "'어디서 ~할지'는 where to+동사원형."
          },
          {
            "q": "우리는 언제 시작할지 아직 정하지 않았다.\nWe haven't decided ___ to start.",
            "options": [
              "what",
              "how",
              "where",
              "when"
            ],
            "answer": 3,
            "explain": "'언제 ~할지'는 when to+동사원형."
          },
          {
            "q": "그는 자전거 타는 법을 안다.\nHe knows ___ to ride a bike.",
            "options": [
              "how",
              "what",
              "when",
              "where"
            ],
            "answer": 0,
            "explain": "'~하는 법(어떻게 할지)'은 how to+동사원형."
          },
          {
            "q": "나는 오늘 무엇을 입을지 정할 수 없다.\nI can't decide ___ to wear today.",
            "options": [
              "how",
              "what",
              "where",
              "when"
            ],
            "answer": 1,
            "explain": "'무엇을 ~할지'는 what to+동사원형."
          },
          {
            "q": "너는 그들을 어디서 만날지 아니?\nDo you know ___ to meet them?",
            "options": [
              "what",
              "when",
              "where",
              "how"
            ],
            "answer": 2,
            "explain": "'어디서 ~할지'는 where to+동사원형."
          },
          {
            "q": "무엇을 먹을지 정하자.\nLet's decide ___.",
            "options": [
              "when to eat",
              "where to eat",
              "how to eat",
              "what to eat"
            ],
            "answer": 3,
            "explain": "'무엇을 먹을지'는 what to eat."
          },
          {
            "q": "내가 너에게 거기 어떻게 가는지 보여 줄게.\nI'll show you ___ there.",
            "options": [
              "how to get",
              "why to get",
              "when to get",
              "where to get"
            ],
            "answer": 0,
            "explain": "'어떻게 갈지'는 how to get. why to는 쓰지 않음."
          },
          {
            "q": "나는 그것들을 어디서 살지 안다.\nI know ___ them.",
            "options": [
              "what to buy",
              "where to buy",
              "when to buy",
              "how to buy"
            ],
            "answer": 1,
            "explain": "'어디서 살지'는 where to buy."
          },
          {
            "q": "언제 떠날지 정하자.\nLet's decide ___.",
            "options": [
              "where to leave",
              "how to leave",
              "when to leave",
              "what to leave"
            ],
            "answer": 2,
            "explain": "'언제 떠날지'는 when to leave."
          },
          {
            "q": "내가 너에게 수영하는 법을 가르쳐 줄게.\nI'll teach you ___.",
            "options": [
              "what to swim",
              "when to swim",
              "where to swim",
              "how to swim"
            ],
            "answer": 3,
            "explain": "'수영하는 법(어떻게 할지)'은 how to swim."
          },
          {
            "q": "내가 너에게 무엇을 말할지 알려 줄게.\nI'll tell you ___.",
            "options": [
              "what to say",
              "why to say",
              "how to say",
              "when to say"
            ],
            "answer": 0,
            "explain": "'무엇을 말할지'는 what to say. why to는 쓰지 않음."
          },
          {
            "q": "어디서 만날지 정하자.\nLet's decide ___.",
            "options": [
              "when to meet",
              "where to meet",
              "what to meet",
              "how to meet"
            ],
            "answer": 1,
            "explain": "'어디서 만날지'는 where to meet."
          },
          {
            "q": "나는 누구에게 물어볼지 모르겠다.\nI don't know ___ to ask.",
            "options": [
              "what",
              "how",
              "who",
              "where"
            ],
            "answer": 2,
            "explain": "'누구에게 ~할지'는 who(m) to+동사원형."
          },
          {
            "q": "그는 언제 멈춰야 할지 모른다.\nHe doesn't know ___ to stop.",
            "options": [
              "what",
              "how",
              "where",
              "when"
            ],
            "answer": 3,
            "explain": "'언제 ~할지'는 when to+동사원형."
          },
          {
            "q": "나는 어디에 앉을지 잘 모르겠다.\nI'm not sure ___ to sit.",
            "options": [
              "where",
              "what",
              "when",
              "how"
            ],
            "answer": 0,
            "explain": "'어디에 ~할지'는 where to+동사원형."
          }
        ],
        "sa": [
          {
            "q": "그는 자전거 타는 법을 안다.\nHe knows ___ to ride a bike.",
            "ko": "그는 자전거 타는 법을 안다.",
            "answers": [
              "how"
            ],
            "explain": "'~하는 법(어떻게 할지)'은 how to."
          },
          {
            "q": "나는 누구에게 물어볼지 모르겠다.\nI don't know ___ to ask.",
            "ko": "나는 누구에게 물어볼지 모르겠다.",
            "answers": [
              "who",
              "whom"
            ],
            "explain": "'누구에게 ~할지'는 who(m) to."
          },
          {
            "q": "무엇을 먹을지 정하자.\nLet's decide ___.",
            "ko": "무엇을 먹을지 정하자.",
            "answers": [
              "what to eat"
            ],
            "explain": "'무엇을 먹을지'는 what to eat."
          },
          {
            "q": "우리는 언제 시작할지 아직 정하지 않았다.\nWe haven't decided ___ to start.",
            "ko": "우리는 언제 시작할지 아직 정하지 않았다.",
            "answers": [
              "when"
            ],
            "explain": "'언제 ~할지'는 when to."
          },
          {
            "q": "나는 점심으로 무엇을 먹을지 모르겠다.\nI don't know ___ to eat for lunch.",
            "ko": "나는 점심으로 무엇을 먹을지 모르겠다.",
            "answers": [
              "what"
            ],
            "explain": "'무엇을 ~할지'는 what to."
          },
          {
            "q": "나는 그것들을 어디서 살지 안다.\nI know ___ them.",
            "ko": "나는 그것들을 어디서 살지 안다.",
            "answers": [
              "where to buy"
            ],
            "explain": "'어디서 살지'는 where to buy."
          },
          {
            "q": "내가 너에게 수영하는 법을 가르쳐 줄게.\nI'll teach you ___.",
            "ko": "내가 너에게 수영하는 법을 가르쳐 줄게.",
            "answers": [
              "how to swim"
            ],
            "explain": "'수영하는 법'은 how to swim."
          },
          {
            "q": "언제 떠날지 정하자.\nLet's decide ___.",
            "ko": "언제 떠날지 정하자.",
            "answers": [
              "when to leave"
            ],
            "explain": "'언제 떠날지'는 when to leave."
          },
          {
            "q": "그녀는 어디로 갈지 물었다.\nShe asked ___ to go.",
            "ko": "그녀는 어디로 갈지 물었다.",
            "answers": [
              "where"
            ],
            "explain": "'어디로 ~할지'는 where to."
          },
          {
            "q": "내가 너에게 무엇을 말할지 알려 줄게.\nI'll tell you ___.",
            "ko": "내가 너에게 무엇을 말할지 알려 줄게.",
            "answers": [
              "what to say"
            ],
            "explain": "'무엇을 말할지'는 what to say."
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
            "q": "빈칸에 알맞은 말을 고르세요.\nIt was ___ hot that we stayed inside.",
            "options": [
              "so",
              "very",
              "such",
              "too"
            ],
            "answer": 0,
            "explain": "「so + 형용사 + that」 형태이므로 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nShe was so tired ___ she fell asleep.",
            "options": [
              "so",
              "that",
              "which",
              "what"
            ],
            "answer": 1,
            "explain": "so 뒤 결과절 앞에는 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nThe box was so ___ that I couldn't lift it.",
            "options": [
              "light",
              "soft",
              "heavy",
              "empty"
            ],
            "answer": 2,
            "explain": "들 수 없었으니 무거운(heavy)."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nHe ran so fast that nobody could ___ him.",
            "options": [
              "throw",
              "hold",
              "carry",
              "catch"
            ],
            "answer": 3,
            "explain": "빨라서 아무도 잡을(catch) 수 없었다."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe soup was ___ hot that I burned my tongue.",
            "options": [
              "very",
              "so",
              "such",
              "too"
            ],
            "answer": 1,
            "explain": "that와 짝을 이루는 것은 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe music was so loud ___ we couldn't talk.",
            "options": [
              "so",
              "very",
              "that",
              "which"
            ],
            "answer": 2,
            "explain": "결과절 앞에는 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nThe tea was so ___ that it burned my mouth.",
            "options": [
              "hot",
              "cold",
              "sweet",
              "fresh"
            ],
            "answer": 0,
            "explain": "입을 데었으니 뜨거운(hot)."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nShe was so tired that she ___ asleep.",
            "options": [
              "stood",
              "woke",
              "sat",
              "fell"
            ],
            "answer": 3,
            "explain": "fall asleep(잠들다)의 fell."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nHe is ___ kind that everyone likes him.",
            "options": [
              "very",
              "such",
              "so",
              "too"
            ],
            "answer": 2,
            "explain": "「so + 형용사 + that」이므로 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nIt was so dark ___ I couldn't see.",
            "options": [
              "that",
              "so",
              "what",
              "which"
            ],
            "answer": 0,
            "explain": "so ~ that 구문의 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nThe bag was so ___ that she dropped it.",
            "options": [
              "light",
              "heavy",
              "small",
              "soft"
            ],
            "answer": 1,
            "explain": "떨어뜨릴 만큼 무거운(heavy)."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nThe story was so sad that we ___.",
            "options": [
              "smiled",
              "laughed",
              "danced",
              "cried"
            ],
            "answer": 3,
            "explain": "슬퍼서 울었다(cried)."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe joke was ___ funny that we laughed a lot.",
            "options": [
              "so",
              "very",
              "such",
              "too"
            ],
            "answer": 0,
            "explain": "that와 짝이 되는 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI was so busy ___ I skipped lunch.",
            "options": [
              "so",
              "that",
              "because",
              "which"
            ],
            "answer": 1,
            "explain": "결과절을 이끄는 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nHe is so ___ that he can touch the ceiling.",
            "options": [
              "short",
              "small",
              "tall",
              "weak"
            ],
            "answer": 2,
            "explain": "천장에 닿을 만큼 키가 큰(tall)."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nIt was so cold that the lake ___.",
            "options": [
              "melted",
              "boiled",
              "dried",
              "froze"
            ],
            "answer": 3,
            "explain": "추워서 호수가 얼었다(froze)."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe movie was ___ long that we got bored.",
            "options": [
              "very",
              "so",
              "such",
              "too"
            ],
            "answer": 1,
            "explain": "「so + 형용사 + that」이므로 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe problem was so difficult ___ nobody could solve it.",
            "options": [
              "that",
              "so",
              "which",
              "what"
            ],
            "answer": 0,
            "explain": "so ~ that 구문의 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nThe music was so ___ that I couldn't sleep.",
            "options": [
              "quiet",
              "soft",
              "loud",
              "slow"
            ],
            "answer": 2,
            "explain": "잘 수 없을 만큼 시끄러운(loud)."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nShe ran so fast that she ___ the race.",
            "options": [
              "lost",
              "missed",
              "started",
              "won"
            ],
            "answer": 3,
            "explain": "빨라서 경주에서 이겼다(won)."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe game was ___ exciting that I forgot the time.",
            "options": [
              "so",
              "very",
              "such",
              "too"
            ],
            "answer": 0,
            "explain": "that와 짝을 이루는 so."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nI was so happy ___ I couldn't stop smiling.",
            "options": [
              "so",
              "that",
              "which",
              "what"
            ],
            "answer": 1,
            "explain": "결과절 앞에는 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 고르세요.\nIt was so ___ that we turned on the fan.",
            "options": [
              "cold",
              "cool",
              "hot",
              "mild"
            ],
            "answer": 2,
            "explain": "선풍기를 켰으니 더운(hot)."
          },
          {
            "q": "빈칸에 알맞은 동사를 고르세요.\nThe joke was so funny that we ___ a lot.",
            "options": [
              "frowned",
              "slept",
              "talked",
              "laughed"
            ],
            "answer": 3,
            "explain": "웃겨서 많이 웃었다(laughed)."
          },
          {
            "q": "빈칸에 알맞은 말을 고르세요.\nThe cake was ___ sweet that I could eat only one piece.",
            "options": [
              "very",
              "so",
              "such",
              "too"
            ],
            "answer": 1,
            "explain": "「so + 형용사 + that」이므로 so."
          }
        ],
        "sa": [
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe tea was so ___ that I couldn't drink it.",
            "ko": "그 차는 너무 뜨거워서 나는 마실 수 없었다.",
            "answers": [
              "hot"
            ],
            "explain": "마실 수 없었으니 뜨거운 hot."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe box was so ___ that I couldn't lift it.",
            "ko": "그 상자는 너무 무거워서 나는 들 수 없었다.",
            "answers": [
              "heavy"
            ],
            "explain": "들 수 없었으니 무거운 heavy."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nShe ran so fast that she ___ the race.",
            "ko": "그녀는 너무 빨리 달려서 경주에서 이겼다.",
            "answers": [
              "won"
            ],
            "explain": "win의 과거형 won."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nShe was so tired that she ___ asleep.",
            "ko": "그녀는 너무 피곤해서 잠들었다.",
            "answers": [
              "fell"
            ],
            "explain": "fall asleep의 과거형 fell."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nIt was so cold that we ___ home.",
            "ko": "날이 너무 추워서 우리는 집에 있었다.",
            "answers": [
              "stayed"
            ],
            "explain": "stay home의 과거형 stayed."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nHe ran so fast that nobody could ___ him.",
            "ko": "그는 너무 빨리 달려서 아무도 그를 잡을 수 없었다.",
            "answers": [
              "catch"
            ],
            "explain": "could 뒤에는 동사원형 catch."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt was ___ hot that we stayed inside.",
            "ko": "너무 더워서 우리는 안에 있었다.",
            "answers": [
              "so"
            ],
            "explain": "that와 짝을 이루는 so."
          },
          {
            "q": "빈칸에 알맞은 말을 쓰세요.\nIt was so dark ___ I couldn't see.",
            "ko": "너무 어두워서 나는 볼 수 없었다.",
            "answers": [
              "that"
            ],
            "explain": "결과절을 이끄는 that."
          },
          {
            "q": "빈칸에 알맞은 형용사를 쓰세요.\nThe music was so ___ that I couldn't sleep.",
            "ko": "그 음악은 너무 시끄러워서 나는 잘 수 없었다.",
            "answers": [
              "loud"
            ],
            "explain": "잘 수 없을 만큼 시끄러운 loud."
          },
          {
            "q": "빈칸에 알맞은 동사를 쓰세요.\nThe story was so sad that we ___.",
            "ko": "그 이야기는 너무 슬퍼서 우리는 울었다.",
            "answers": [
              "cried"
            ],
            "explain": "cry의 과거형 cried."
          }
        ]
      }
    ]
  }
]
