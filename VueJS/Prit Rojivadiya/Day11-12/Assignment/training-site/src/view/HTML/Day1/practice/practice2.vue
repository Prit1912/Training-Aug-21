<template>
  <ul>
    <li>
      CEO
      <ul>
        <li>
          CTO
          <ol type="i">
            <li>
              Manager 1
              <ul style="list-style-type: circle">
                <li>
                  team lead 1
                  <ol type="A">
                    <li>Employee 1</li>
                    <li>Employee 2</li>
                  </ol>
                </li>
                <li>
                  team lead 2
                  <ol type="A">
                    <li>Employee 3</li>
                    <li>Employee 4</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              Manager 2
              <ul style="list-style-type: circle">
                <li>
                  team lead 3
                  <ol type="A">
                    <li>Employee 5</li>
                    <li>Employee 6</li>
                  </ol>
                </li>
                <li>
                  team lead 4
                  <ol type="A">
                    <li>Employee 7</li>
                    <li>Employee 8</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          COO
          <ol type="i">
            <li>
              Admin 1
              <ul>
                <li>operation and delivery head</li>
                <li>Employee Pay Manager</li>
              </ul>
            </li>
            <li>
              Admin 2
              <ul>
                <li>Database Administrator</li>
                <li>Event Organizer</li>
              </ul>
            </li>
          </ol>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Practice2",
};
</script>

<style scoped></style>
