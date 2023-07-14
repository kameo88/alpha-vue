<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form</div>

			<div class="section">
				<h3 class="tit02">input</h3>

				<input type="text" class="input" placeholder="고객명">
				<input type="text" class="input" placeholder="고객명" disabled>
				<input type="text" class="input" placeholder="고객명" readonly>

				<div class="input_box">
					<input type="text" class="input" placeholder="검색어를 입력해주세요">
					<button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
				</div>

				<div class="input_box search">
					<input type="text" class="input" placeholder="검색어를 입력해주세요" value="김알파">
					<button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
					<button type="button" class="btn_search"><span class="blind">검색</span></button>
				</div>

				<div class="input_box search find_num">
					<div class="num_mark">010-<span>****</span>-</div>
					<input type="text" class="input" placeholder="4자리 숫자">
					<button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
					<button type="button" class="btn_search"><span class="blind">검색</span></button>
				</div>

				<div class="input_box search find_num">
					<div class="num_mark">010-<span>****</span>-</div>
					<input type="text" class="input" placeholder="4자리 숫자" disabled>
					<button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
					<button type="button" class="btn_search" disabled><span class="blind">검색</span></button>
				</div>
				
				<div class="input_box auth_num">
					<input type="text" class="input" value="322115">
					<button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
					<div class="timer">
						<span>0:01</span>
						<button type="button">시간연장하기</button>
					</div>
				</div>
				
				<div class="input_box auth_num">
					<input type="text" class="input" value="322115" disabled>
					<button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
					<div class="timer">
						<span>0:01</span>
						<button type="button" disabled>시간연장하기</button>
					</div>
				</div>

			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">select</h3>

				<button type="button" class="btn_select">배송 시 요청사항 선택하기</button>

				<button type="button" class="btn_select" disabled>배송 시 요청사항 선택하기</button>

				<select name="" class="select">
          <option disabled selected>배송 시 요청사항 선택하기</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
				</select>

				<select name="" class="select" disabled>
          <option disabled selected>배송 시 요청사항 선택하기</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
				</select>

				<br><br>

				<ul class="select_list" role="listbox">
          <li role="none" class="on">
            <button type="button" role="option" aria-selected="true" data-option="은행계좌 자동이체" @click="$selectList.click">은행계좌 자동이체</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="신용카드 자동결제" @click="$selectList.click">신용카드 자동결제</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="지로납부" @click="$selectList.click">지로납부</button>
          </li>
				</ul>

				<br>

				<div class="form_group">
					<strong class="form_label">Select Popup</strong>
					<div class="form_item">
            <button type="button" class="btn_select" id="btn_selectPop01" @click="$popup.open('#selectPop01', '#btn_selectPop01');">은행계좌 자동이체</button>
					</div>
					<div class="form_item">
            <button type="button" class="btn_select" id="btn_selectPop02" @click="$popup.open('#selectPop02', '#btn_selectPop02');">전체</button>
					</div>
				</div>

			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">textarea</h3>

        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요"></textarea>
        
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" disabled></textarea>
        
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" readonly></textarea>

        <div class="textarea_box">
          <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" maxlength="1000"></textarea>
          <div class="byte_check">
            <span class="count">0</span><span class="total">1,000</span>
          </div>
        </div>

        <div class="textarea_box disabled">
          <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" maxlength="1000" disabled></textarea>
          <div class="byte_check">
            <span class="count">0</span><span class="total">1,000</span>
          </div>
        </div>

        <div class="textarea_box">
          <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" maxlength="1000" readonly></textarea>
          <div class="byte_check">
            <span class="count">0</span><span class="total">1,000</span>
          </div>
        </div>

        <br><br>

        <div class="textarea_box ty02">
          <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" rows="1" maxlength="50"></textarea>
          <div class="byte_check">
            <span class="count">0</span><span class="total">50</span>
          </div>
        </div>

        <br><br>

        <div class="textarea_box ty02">
          <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" rows="1" maxlength="50"></textarea>
          <div class="byte_check">
            <span class="count">0</span><span class="total">50</span>
          </div>
          <button>등록</button>
        </div>

			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">radio</h3>

        <div class="radio_st">
          <input type="radio" id="radio01_00" name="radio01">
          <label for="radio01_00"></label>
        </div>
        <div class="radio_st">
          <input type="radio" id="radio01_01" name="radio01">
          <label for="radio01_01">radio01_01</label>
        </div>
        <div class="radio_st">
          <input type="radio" id="radio01_02" name="radio01" disabled>
          <label for="radio01_02">radio01_02</label>
        </div>
        <div class="radio_st">
          <input type="radio" id="radio01_03" name="radio01" checked disabled>
          <label for="radio01_03">radio01_03</label>
        </div>
			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">checkbox</h3>

        <div class="check_st">
          <input type="checkbox" id="checkbox01_00" name="">
          <label for="checkbox01_00"></label>
        </div>
        <div class="check_st">
          <input type="checkbox" id="checkbox01_01" name="">
          <label for="checkbox01_01">checkbox01_01</label>
        </div>
        <div class="check_st">
          <input type="checkbox" id="checkbox01_02" name="" disabled>
          <label for="checkbox01_02">checkbox01_02</label>
        </div>
        <div class="check_st">
          <input type="checkbox" id="checkbox01_03" name="" checked disabled>
          <label for="checkbox01_03">checkbox01_03</label>
        </div>

        <br><br>

        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_00" name="">
          <label for="checkbox02_00"></label>
        </div>
        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_01" name="">
          <label for="checkbox02_01">checkbox02_01</label>
        </div>
        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_02" name="" disabled>
          <label for="checkbox02_02">checkbox02_02</label>
        </div>
        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_03" name="" checked disabled>
          <label for="checkbox02_03">checkbox02_03</label>
        </div>

        <br><br>

        <div class="item_list">
          <ul>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox03_00" name="">
                <label for="checkbox03_00">check_list</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox03_01" name="">
                <label for="checkbox03_01">check_list</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox03_02" name="">
                <label for="checkbox03_02">check_list</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->

        <br><br>

        <div class="item_list02">
          <ul>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox04_00" name="">
                <label for="checkbox04_00">check_list02</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox04_01" name="">
                <label for="checkbox04_01">check_list02</label>
              </div>
            </li> 
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox04_02" name="">
                <label for="checkbox04_02">check_list02</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list02 -->

			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">form list</h3>
					
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item">
            <div class="input_box">
              <input type="text" class="input">
              <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
            </div>
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item">
            <div class="input_box">
              <input type="text" class="input" value="김알파">
              <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
            </div>
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item val_chk">
            <div class="input_box">
              <input type="text" class="input" placeholder="고객명">
              <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
            </div>
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <div class="form_item">
            <div class="input_box search">
              <input type="text" class="input" placeholder="검색어를 입력해주세요">
              <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              <button type="button" class="btn_search"><span class="blind">검색</span></button>
            </div>
            </div>
            <div class="error">검색어를 입력 해주세요</div>
          </div>


          <div class="form_group">
            <div class="form_item">
              <div class="input_box search">
                <input type="text" class="input" placeholder="검색어를 입력해주세요" value="김알파">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
            </div>
            <div class="error">검색어를 입력 해주세요</div>
          </div>
          <div class="form_group">
            <div class="form_item">
              <select name="" class="select" style="flex:none; width:30%;">
                  <option disabled selected>전체</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
              </select>
              <div class="input_box search">
                <input type="text" class="input" placeholder="검색어를 입력해주세요" value="김알파">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
                <div class="input_box">
                  <input type="tel" class="input" placeholder="'-'없이 숫자만 입력">
                  <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                </div>
                <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
              <div class="input_box auth_num">
                <input type="text" class="input" value="322115">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" value="01011111111">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item val_chk">
              <div class="input_box auth_num">
                <input type="text" class="input" value="322115">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
                <div class="input_box">
                  <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" value="01011111111">
                  <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                </div>
                <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
              <div class="input_box auth_num">
                <input type="text" class="input" value="322115">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn md c03">인증 확인</button>
          </div>
          <div class="form_group">
            <strong class="form_label">픽업 가능한 편의점 조회</strong>
            <div class="btn_group">
              <button type="button" class="btn md c04">GS25 편의점 조회</button>
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" value="01011111111">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item val_chk">
              <div class="input_box auth_num">
                <input type="text" class="input" value="322115">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" value="01011111111" disabled>
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03" disabled>인증 재요청</button>
            </div>
            <div class="form_item">
              <div class="input_box auth_num">
                <input type="text" class="input" value="322115" disabled>
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button" disabled>시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">주소</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="우편주소">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03">우편번호 찾기</button>
            </div>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="주소">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="주소" value="LG유플러스 상암사옥">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="tel" class="input" placeholder="휴대폰 번호 입력" value="01011111111">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>    
            <div class="error">휴대폰 번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">비밀번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="password" class="input" placeholder="10~20자의 영문, 숫자 조합">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">비밀번호를 다시 확인해주세요</div>
            <div class="error">비밀번호를 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">주민등록번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="text" class="input" placeholder="앞 6자리 입력">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <span class="mark_div">-</span>
              <div class="input_box">
                <input type="password" class="input" placeholder="뒤 7자리 입력">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">주민등록번호를 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">이메일</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="text" class="input" placeholder="아이디">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <span class="mark_div">@</span>
              <div class="input_box">
                <input type="text" class="input" placeholder="도메인">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">이메일 형식을 확인해주세요</div>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <div class="input_box search find_num">
                <div class="num_mark">010-<span>****</span>-</div>
                <input type="text" class="input" placeholder="4자리 숫자">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
            </div>
            <div class="error">4자리 숫자를 입력 해주세요</div>
          </div>
        </div>

			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">약관동의</h3>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all00" name="all">
            <label for="check_all00">전체 약관에 모두 동의합니다.</label>
            <button type="button"><span class="blind">약관 보기</span></button>
          </div>
        </div>

        <br>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all01" name="all">
            <label for="check_all01">전체 약관에 모두 동의합니다.</label>
          </div>
        </div>

        <br>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all02" name="all">
            <label for="check_all02"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list01">
            <div class="cst_panel">
              <ul>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_01" name="">
                    <label for="check_consent00_01">개인정보 수집·이용동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_02" name="">
                    <label for="check_consent00_02">개인정보 제3자 제공 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_03" name="">
                    <label for="check_consent00_03">고유식별정보 처리 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- // terms_consent -->

        <br><br>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all03" name="all">
            <label for="check_all03"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list02 acdItem_wrap tog">
            <div class="cst_acd acdItem">
              <div class="cst_tab">
                <div class="check_st">
                  <input type="checkbox" id="check_consent01_all" name="">
                  <label for="check_consent01_all"><b>+알파 동의항목</b></label>
                </div>
                <button type="button" aria-expanded="false"><span class="blind">약관 보기</span></button>
              </div>
              <div class="cst_panel" role="region">
                <ul>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent02_01" name="">
                      <label for="check_consent02_01">개인정보 수집·이용동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent02_02" name="">
                      <label for="check_consent02_02">개인정보 제3자 제공 동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent02_03" name="">
                      <label for="check_consent02_03">고유식별정보 처리 동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="cst_acd acdItem">
              <div class="cst_tab">
                  <div class="check_st">
                    <input type="checkbox" id="check_consent02_all" name="">
                    <label for="check_consent02_all"><b>통신사 동의 항목</b></label>
                  </div>
                  <button type="button" aria-expanded="false"><span class="blind">약관 보기</span></button>
              </div>
              <div class="cst_panel" role="region">
                <ul>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent03_01" name="">
                      <label for="check_consent03_01">통신 이용 약관 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent03_02" name="">
                      <label for="check_consent03_02">개인 수집 이용 동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent03_03" name="">
                      <label for="check_consent03_03">서비스 제공을 위한 개인정보 제공 이전 동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent03_04" name="">
                      <label for="check_consent03_04">개인정보 취급 위탁 동의·신용정보 조회에 관한 동의·본인인증 서비스 이용에 대한 동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                  <li>
                    <div class="check_st ty02">
                      <input type="checkbox" id="check_consent03_05" name="">
                      <label for="check_consent03_05">서비스 계약의 인수관련 동의 (필수)</label>
                    </div>
                    <button type="button"><span class="blind">약관 보기</span></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> <!-- // terms_consent -->

			</div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
export default {
  name: 'GuideForm',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      popupItem: ['selectPop01', 'selectPop02'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  }
}
</script>