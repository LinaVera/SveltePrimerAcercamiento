<script>
  let skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JS",
    },
    {
      id: 4,
      name: "SVELTE",
    }
  ];
</script>
<style>
    .Skills{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li{
        display: inline;
        margin: 0 0 0 0.4rem;
    }
</style>

<div class="Skills">
  <h3>Habilidades:</h3>
  <ul>
    {#each skills as skill, i}
      <li>{skill.name}</li>
    {/each}
  </ul>
</div>
