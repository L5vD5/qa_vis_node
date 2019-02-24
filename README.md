# qa_vis_node
d3.js visualization

# Layer 시각화
- Seq2Seq 모델에서 Context와 Question을 각각의 layer에 대해서 시각화함. 각 layer의 vector 값(n*n)을 tsne로 2차원으로 변환하여 시각화한 모델
- layer를 거치면서 학습이 제대로 됐는지를 검증하기 위한 도구로 사용할 수 있음
- 점이 기대했던 것보다 분류가 잘 안 돼 tsne 학습 등을 조정하여 여러번 찍어봐야 할 것 같음
- tsne는 점이 많을 수록 분류가 잘 돼서 Context끼리, Question끼리 짝을 지어서 점을 다양하게 찍었는데 이 방식도 적절한지 의논해야함
- 특정 Context가 layer를 거치면서 학습됐는지를 한 눈에 볼 수 있는 방식을 의논해야함

### char_c
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/char_c.JPG)
### char_q
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/char_q.JPG)
### highway_c
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/highway_c.JPG)
### highway_q
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/highway_q.JPG)
### word_c
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/word_c.JPG)
### word_q
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/word_q.JPG)
### context_c
![](/img/context_c.jpg)
### context_q
![](/img/context_q.jpg)

# Possibility 시각화
- 모델이 예측한 start와 end의 possibility를 시각화
### possibility
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/pos.JPG)

# Loss 시각화
- 모델이 start와 end possibility를 적절하게 예측했는지를 Loss 시각화로 알 수 있다 (Loss 는 정확도와 반비례)
- bar를 클릭하면 그 class에 해당하는 문장 번호를 받을 수 있다.
- (Loss의 정확한 정의가 헷갈리니 회의 때 공유하면 좋을 듯)
### loss
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/loss.JPG)

# Attention 시각화
- Query to Context, Context to Query Attention을 시각화
- 세 시각화 모두 Context to Query Attention 시각화를 한 것.
### attention
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/attention.JPG)
### mainview
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/mainview.JPG)
### mainview2
![](https://github.com/L5vD5/qa_vis_node/blob/master/img/mainview2.JPG)
