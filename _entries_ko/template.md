---
published: false
title: "뉴스 헤드라인처럼: 누가 무엇을 했는지. 주어, 동사, 일어난 일. 주장이나 두 개의 절로 된 논증은 쓰지 않습니다."
incident_date: 2026-01-01
updated: 2026-01-01
category: A
country: 국가
status: reported
ai_claim_basis: statement  # court, described, statement, media, none 중 하나. _data/claim_bases.yml 참고
detection_path: unknown    # provider, referral, victim, business, disclosure, outside, police, unknown 중 하나. _data/detection_paths.yml 참고
next_check: 2026-01-31     # 다음 법원·기관 일정 다음 날. 없으면 진행 중인 사건은 30일 뒤, 남은 절차가 없으면 90일 뒤. 종결되면 비워 둡니다
# 영어 사례의 번역본에서는 위 세 줄을 지웁니다. 영어 파일의 값이 기준입니다.
summary: "두세 문장. 무슨 일이 있었는지, 누가 피해를 입었는지, 어떻게 알려졌는지. 출처가 뒷받침하지 않는 수식어는 쓰지 않습니다."
note_label: "작동 방식"
note: "한 줄만. 무엇이 이를 가능하게 했는지, 어떤 통제를 무력화했는지, 또는 수치가 무엇을 입증하고 무엇을 입증하지 못하는지. 라벨은 작동 방식, 미해결 질문, 수치 점검, 주장 점검 중 하나를 씁니다."
query: '보이스피싱 딥보이스 검거'
sources:
  - tier: P
    outlet: 발표 기관
    title: "문서 제목"
    url: "https://example.go.kr/release"
    retrieved: 2026-01-01
  - tier: S
    outlet: 언론사
    title: "기사 제목"
    url: "https://example.co.kr/article"
    retrieved: 2026-01-01
---

본문은 선택 사항입니다. 대부분의 사례에는 필요 없습니다. 사건의 후속 경과를
추적할 가치가 있거나, 논란이 있는 수치를 풀어 볼 필요가 있거나, 해결에 몇 년이
걸릴 법적 쟁점이 있을 때 씁니다.

영어 사례의 번역이라면 이 파일을 복사해 영어 파일과 똑같은 이름으로 저장합니다.
예: _entries/AI-walmart-fraud.md 의 한국어판은 _entries_ko/AI-walmart-fraud.md.
이름이 같아야 두 페이지가 서로 연결되고 EN / KR 전환 버튼이 나타납니다.
한국어로만 게재하는 사례는 아무 이름이나 써도 됩니다.

published 를 true 로 바꾸면 게재됩니다.
