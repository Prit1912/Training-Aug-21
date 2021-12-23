<template>
   <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>

        <br>
        <br>

        <a class="btn btn-primary" href="#" role="button">Link</a>
        <button class="btn btn-primary" type="submit">Button</button>
        <input class="btn btn-primary" type="button" value="Input">
        <input class="btn btn-primary" type="submit" value="Submit">
        <input class="btn btn-primary" type="reset" value="Reset">

        <br>
        <br>


        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>

        <br><br>
        <button type="button" class="btn btn-primary btn-lg">Large button</button>
        <button type="button" class="btn btn-secondary btn-lg">Large button</button>
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>

        <br>
        <br>
        <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
        <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>

        <br><br>
        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
        <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>


        <br><br>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"> Radio
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option3" autocomplete="off"> Radio
            </label>
        </div>

        <br><br>

        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Dropdown link</a>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
            </div>
        </div>

        <br><br>
        <div class="btn-group-vertical" role="group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Dropdown link</a>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'buttons'
}
</script>

<style>

</style>