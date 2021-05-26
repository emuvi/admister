<div id="divLoading"><img src="./assets/loading.gif" alt=""></div>
<h1 id="mainHeader">
  <a href="./desk-vue.php"><img src="./assets/admister.png" alt="AdMister"></a>
  <div><?=$am_title?></div>
</h1>
<div id="divMessages"></div>
<?php
if (isset($am_msg_suc)) {
    echo ("<div class='divSuccess'><button>X</button> $am_msg_suc</div>");
}
if (isset($am_msg_err)) {
    echo ("<div class='divError'><button>X</button> $am_msg_err</div>");
}
?>