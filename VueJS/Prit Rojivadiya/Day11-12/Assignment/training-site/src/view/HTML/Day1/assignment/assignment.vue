<template>
      <table>
        <tr>
            <td>
                <label for="">Name</label>
            </td>
            <td>
                <input type="text" name="EmpName" id="">
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Age</label>
            </td>
            <td>
                <input type="number" name="Age" id="">
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Gender</label>
            </td>
            <td>
                <input type="radio" name="gender" id="" value="Male"> Male
                <input type="radio" name="gender" id="" value="Female"> Female
                <input type="radio" name="gender" id="" value="Other"> Other
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Designation</label>
            </td>
            <td>
                <input type="text" name="Designation" id="">
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Salary</label>
            </td>
            <td>
                <input type="number" name="Salary" id="">
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Location</label>
            </td>
            <td>
                <select name="City" id="">
                    <option value="Navsari">Navsari</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Gandhinagar" selected>Gandhinagar</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Email</label>
            </td>
            <td>
                <input type="email" name="Emai" id="">
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Date of Joining</label>
            </td>
            <td>
                <input type="date" name="DateofJoining" id="">
            </td>
        </tr>
        <tr>
            <td>
                <label for="">Phone</label>
            </td>
            <td>
                <input type="number" name="PhoneNo" id="" minlength="10" maxlength="10">
            </td>
        </tr>
        <tr>
            <td><button type="submit">Submit</button></td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'd1-assignment'
}
</script>

<style>

</style>