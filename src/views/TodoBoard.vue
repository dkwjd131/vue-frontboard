<template>
    <div>
        <table>
            <!-- table header -->
            <thead>
                <tr>
                    <th class="id">ID</th>
                    <th class="comment">comment</th>
                    <th class="state">state</th>
                    <th class="button">-</th>
                </tr>
            </thead>
            <!-- table body -->
            <tbody>
                <tr v-for="item in todos" v-bind:key="item.id">
                    <th>{{ item.id }}</th>
                    <td>{{ item.content }}</td>
                    <td class="state">
                        <button>{{ item.state }}</button>
                    </td>
                    <td class="button">
                        <button>delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Add New Task</h2>
        <form class="add-form" v-on:submit.prevent="doAdd">
            content <input type="text" ref="comment" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todos: []
        };
    }
};
</script>
