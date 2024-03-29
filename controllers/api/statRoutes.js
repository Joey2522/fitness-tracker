const router = require('express').Router();
const {Stats} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const stats = await Stats.findAll();

        if(!stats || stats.length === 0) {
            return res.status(404).json({ message: 'No stats found' });
        }

        res.status(200).json(stats);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('POST REQUEST ACTIVATED');
        const statData = req.body;
        console.log(statData);
        console.log(req.user);

        if (req.user && req.user.authMethod === 'google') {
            const newStat = await Stats.create({
                google_id: req.user.googleId,
                distance: statData.distance,
                duration: statData.duration,
                feeling: statData.feeling
            });
            res.status(201).json({ message: 'Statistic created successfully', data: newStat});
        } else {
            const newStat = await Stats.create(statData);
            res.status(201).json({ message: 'Statistic created successfully', data: newStat});
        }
    } catch (error) {
        console.error('Error creating new statistic', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { distance, duration, feeling } = req.body;

    try {
        const stat = await Stats.findByPk(id);
        if (!stat) {
            return res.status(404).json({ message: 'Stat not found' });
        };

        if (distance !== undefined) {
            stat.distance = distance;
        }
        if (duration !== undefined) {
            stat.duration = duration;
        }
        if (feeling !== undefined) {
            stat.feeling = feeling;
        }

        await stat.save();

        res.status(200).json({ message: 'Stat updataed successfully', data: stat });
    } catch (error) {
        console.error('Error updating stat:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;