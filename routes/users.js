const usersRoute = require('express').Router();
const { allUsers, idUser, createUser } = require('../controllers/users');

// GET
usersRoute.get('/', allUsers);
usersRoute.get('/:userId', idUser);
usersRoute.post('/', createUser);

module.exports = usersRoute;
/* const usersRoute = require('express').Router();
const fs = require('fs');
const path = require('path');

const userPath = path.join(__dirname, '../data/users.json');

const doesFileExist = (req, res, next) => {
  fs.stat(userPath, (err) => {
    if (err == null) {
      return next();
    }
    if (err.code === 'ENOENT') {
      return res.status(500).json({ message: 'Запрашиваемый файл не найден' });
    }
    return res.status(500).json({ message: err.message });
  });
};

const getUsersAsyncAwait = async (res) => {
  try {
    const data = await fs.promises
      .readFile(userPath, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (error) {
    res.status(500);
    return JSON.stringify({ message: 'Что-то не так с файлом на сервере' });
  }
};

const getUserPromise = () => fs.promises
  .readFile(userPath, { encoding: 'utf8' })
  .then((data) => JSON.parse(data));

usersRoute.get('/', doesFileExist);
usersRoute.get('/', async (req, res) => {
  const users = await getUsersAsyncAwait(res);
  res.send(users);
});

usersRoute.get('/:id', (req, res) => {
  getUserPromise()
    .then((users) => {
      const user = users.find((item) => item.id === req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    });
});

module.exports = usersRoute;
*/
