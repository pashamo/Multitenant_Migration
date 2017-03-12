# Multitenant_Migration
Moving users from an isolated database to a pluggable container

1. Extract Non-System user accounts from DB
2. Provide List to Operations Teams
3. Produce CREATE commands from new/modified list


#Script Generator

Purpose: Generate CREATE and GRANT commands to create users on a specified DB instance.

How to Use:
1. Download files index.html, script.js, style.css and pattern.png to a folder/directory on your local system
2. Open application by clicking index.html
3. Provide input in TEXTAREA in the following manner:
    - "USERID PROFILE"
    - Ensure that the two data elements are seperated (use space/tab/new line)
4. Provide a PASSWORD which satisfies Oracle Enterprise 12 requirements
5. Click 'Generate Script' button
6. Expected Output:
    - Your input in grey font
    - a number indicating the pair(s) of data
    - CREATE command(s)
    - GRANT commands(s)
