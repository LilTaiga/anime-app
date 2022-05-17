<script lang="ts">
    export let username: string = "JohnDoe";
    export let userId: number = 69420;
    export let userAvatar: string;
</script>

<div>
    <img src={userAvatar} 
         alt="Avatar do trouxa"/>
    <h3>{username}</h3>
    <p>{userId}</p>
</div>

<style>
    div {
        border: 2px red solid;
        border-radius: 16px;
        mask-clip: border-box;
        padding: 16px;
        background: white;
    }

    div > img {
        float: left;
        width: 120px;
        border-radius: 8px;
    }

    div > h3 {
        position: relative;
        left: 32px;
        top: -20px;
        font-family: cursive;
        font-size: 2em;
    }

    div > p
    {
        position: relative;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        left: 32px;
        top: -50px;
    }
</style>