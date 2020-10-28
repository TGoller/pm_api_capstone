const Policy = require('../models/policy');

// Handle Policy create on POST.
exports.policy_create_post = function (req, res) {
    if (!req.body.name) {
        res.status(400).send("No name included on the request")
    }

    const policy = new Policy(req.body);
    policy.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('There was an issue saving the policy');
        });
};

// Handle Policy list on GET.
exports.policy_list_get = function (req, res) {
    Policy.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('There was an issue getting the policies');
        });

};

// Handle Policy get a specific policy.
exports.getByID = (req, res) => {
    const id = req.params.id;
    
    Policy.findById(id)
        .then(data => {
            if (!data) {
                res.status(400).send(`No policy found with id: ${id}`);
            }
            else {
                res.status(200).send(data);
            }
        })
        .catch(err => {
            res.status(400).send('There was an issue finding that one policy');
        });
};


// update Policy by ID
exports.updateByID = (req, res) => {
    const id = req.params.id;
    
    Policy.findOneAndUpdate(id,req.body,{new:true})
        .then(data => {
            if (!data) {
                res.status(400).send(`No policy found with id: ${id}`);
            }
            else {
                res.status(200).send(data);
            }
        })
        .catch(err => {
            res.status(400).send('There was an issue finding that one policy');
        });
};

// deleteByID
exports.deleteByID = (req, res) => {
    const id = req.params.id;
    
    Policy.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(400).send(`No policy found with id: ${id}`);
            }
            else {
                res.status(200).send(`${id} Policy deleted`);
            }
        })
        .catch(err => {
            res.status(400).send('There was an issue finding that one policy');
        });
};