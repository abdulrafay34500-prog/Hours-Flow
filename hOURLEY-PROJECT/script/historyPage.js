
HistoryPageREnder()
export function HistoryPageREnder() {
    let Html=`<div class="history-popup-overlay js-history-popup">

                    <div class="history-popup">

                        <!-- Header -->
                        <div class="history-header">

                            <div>
                                <p class="history-label">EMPLOYEE HISTORY</p>
                                <h2>Rafay</h2>
                                <p class="history-subtitle">Last 6 months</p>
                            </div>

                            <button class="history-close-button js-history-close">
                                &times
                            </button>

                        </div>


                        <!-- History Box -->
                        <div class="history-box">

                            <!-- Table Header -->
                            <div class="history-table-header">
                                <span>MONTH</span>
                                <span>HOURS</span>
                                <span>SALARY</span>
                            </div>


                            <!-- September -->
                            <div class="history-month-row">

                                <div class="month-info">
                                    <strong>September</strong>
                                    <span>2026</span>
                                </div>

                                <div class="hours-info">
                                    <strong>176</strong>
                                    <span>hrs</span>
                                </div>

                                <div class="salary-info">
                                    <strong>$1,250</strong>
                                </div>

                            </div>


                            <!-- August -->
                            <div class="history-month-row">

                                <div class="month-info">
                                    <strong>August</strong>
                                    <span>2026</span>
                                </div>

                                <div class="hours-info">
                                    <strong>168</strong>
                                    <span>hrs</span>
                                </div>

                                <div class="salary-info">
                                    <strong>$1,200</strong>
                                </div>

                            </div>


                            <!-- July -->
                            <div class="history-month-row">

                                <div class="month-info">
                                    <strong>July</strong>
                                    <span>2026</span>
                                </div>

                                <div class="hours-info">
                                    <strong>172</strong>
                                    <span>hrs</span>
                                </div>

                                <div class="salary-info">
                                    <strong>$1,220</strong>
                                </div>

                            </div>


                            <!-- June -->
                            <div class="history-month-row">

                                <div class="month-info">
                                    <strong>June</strong>
                                    <span>2026</span>
                                </div>

                                <div class="hours-info">
                                    <strong>160</strong>
                                    <span>hrs</span>
                                </div>

                                <div class="salary-info">
                                    <strong>$1,150</strong>
                                </div>

                            </div>


                            <!-- May -->
                            <div class="history-month-row">

                                <div class="month-info">
                                    <strong>May</strong>
                                    <span>2026</span>
                                </div>

                                <div class="hours-info">
                                    <strong>180</strong>
                                    <span>hrs</span>
                                </div>

                                <div class="salary-info">
                                    <strong>$1,280</strong>
                                </div>

                            </div>


                            <!-- April -->
                            <div class="history-month-row">

                                <div class="month-info">
                                    <strong>April</strong>
                                    <span>2026</span>
                                </div>

                                <div class="hours-info">
                                    <strong>165</strong>
                                    <span>hrs</span>
                                </div>

                                <div class="salary-info">
                                    <strong>$1,180</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>`

     document.querySelector('.js-history-page-popup')
     .innerHTML=Html;    
     
     let crossButton=document.querySelector('.js-history-close')
     let mainPage=document.querySelector('.main-addingEmploy-page');

     crossButton.addEventListener('click' ,()=>{
         mainPage.classList.remove('clicking-history-button')
     })
}