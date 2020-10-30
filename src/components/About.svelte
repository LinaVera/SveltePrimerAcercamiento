<script>
  import Button from "./Button.svelte";
  let someText = "Frontedn Selvet";
  let count = 0;
  let styles = { darkMode: false };
  function handleClick() {
    count++;
  }
  function toggle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<style>
  p {
    color: var(--theme-color);
  }
</style>

<div class="About">
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p style="color: #ffffff">Hola, modo escuro</p>
  {/if}
  <Button text="Click" {count} on:click={handleClick} />
  <button on:click={toggle}>Modo oscuro</button>
  <p>{someText}</p>
  <button on:click={handleClick}>Click {count == 0 ? '' : count}</button>
</div>
