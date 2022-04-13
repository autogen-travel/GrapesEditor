<div id="wrapper-[+grapesID+]" class="grapesEditor grapes-main" >

    <div class="panel-view">
      <div class="panel panel-devices"></div>
      <div class="panel panel-redo"></div>
      <div class="panel panel-misc"></div>
      <div class="panel panel-settings d-none"></div>
    </div>
    <div class="sidebar">
        
      <div class="sidebar-wrapper">

        <div class="traits-wrapper d-none">
          <div class="traits"></div>
        </div>

        <div class="sidebar-tabs">
          <div class="styles" data-tab="styles" onclick="tab(this)">Стили</div>
          <div class="blocks active" data-tab="blocks" onclick="tab(this)">Блоки</div>
        </div>

        <div class="sidebar-content">
          <div class="styles"></div>
          <div class="blocks active">
            <div class="blockList"></div>
            <div class="addCustomBlock">
              <a class="btn btn-success" href="javascript:;" data-grapes="addCustomBlock">
                <span>Добавить свой блок</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="label">
        <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
          <path fill="#494c4e" d="M5.49 15.61a1.5 1.5 0 0 1-.1-2.12L9.47 9 5.39 4.51a1.5 1.5 0 1 1 2.22-2.02L12.62 8A1.474 1.474 0 0 1 13 9a1.524 1.524 0 0 1-.38 1l-5.01 5.51a1.5 1.5 0 0 1-2.12.1z"/>
        </svg>
      </div>
    </div>

    <div id="grapes-[+grapesID+]" style="height:0px; overflow:hidden"></div>

</div>