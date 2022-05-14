<script>
  import { session } from "$app/stores";

</script>

<h1>Dashboard</h1>
<h3>Olá {$session.user.name}</h3>
<h3>{$session.access}</h3>